import {
  keys,
  noop,
  each,
  assignDeep,
  strMarginBottom,
  strMarginLeft,
  strMarginRight,
  strPaddingBottom,
  strPaddingLeft,
  strPaddingRight,
  strPaddingTop,
  getStyles,
  setStyles,
  removeAttrClass,
  strWidth,
  strOverflowY,
  strOverflowX,
  strScroll,
} from '~/support';
import { dataValueViewportArrange, dataAttributeViewport } from '~/classnames';
import { getShowNativeOverlaidScrollbars } from '~/setups/structureSetup/structureSetup.utils';
import type { ObserversSetupState } from '~/setups';
import type { Options, OptionsCheckFn } from '~/options';
import type { StructureSetupElementsObj } from '~/setups/structureSetup/structureSetup.elements';
import type { ViewportOverflowState } from '~/setups/structureSetup/structureSetup.utils';
import type { Env } from '~/environment';
import type { WH } from '~/support';
import type { OverflowStyle, StyleObject, StyleObjectKey } from '~/typings';
import type { StructureSetupState } from '~/setups/structureSetup';
import type { StaticPlugin } from '~/plugins';

export const scrollbarsHidingPluginName = '__osScrollbarsHidingPlugin';

export const ScrollbarsHidingPlugin = /* @__PURE__ */ (() => ({
  [scrollbarsHidingPluginName]: {
    static: () => ({
      _viewportArrangement: (
        structureSetupElements: StructureSetupElementsObj,
        structureSetupState: StructureSetupState,
        observersSetupState: ObserversSetupState,
        env: Env,
        checkOptions: OptionsCheckFn<Options>
      ) => {
        const { _viewportIsTarget, _viewport } = structureSetupElements;
        const { _nativeScrollbarsHiding, _nativeScrollbarsOverlaid, _nativeScrollbarsSize } = env;
        const doViewportArrange =
          !_viewportIsTarget &&
          !_nativeScrollbarsHiding &&
          (_nativeScrollbarsOverlaid.x || _nativeScrollbarsOverlaid.y);
        const [showNativeOverlaidScrollbars] = getShowNativeOverlaidScrollbars(checkOptions, env);

        /**
         * Gets the current overflow state of the viewport.
         */
        const readViewportOverflowState = (): ViewportOverflowState => {
          const getStatePerAxis = (styleKey: StyleObjectKey) => {
            const overflowStyle = getStyles(_viewport, styleKey) as OverflowStyle;
            const overflowScroll = overflowStyle === strScroll;

            return [overflowStyle, overflowScroll] as const;
          };

          const [xOverflowStyle, xOverflowScroll] = getStatePerAxis(strOverflowX);
          const [yOverflowStyle, yOverflowScroll] = getStatePerAxis(strOverflowY);

          return {
            _overflowStyle: {
              x: xOverflowStyle,
              y: yOverflowStyle,
            },
            _overflowScroll: {
              x: xOverflowScroll,
              y: yOverflowScroll,
            },
          };
        };

        /**
         * Gets the hide offset matching the passed overflow state.
         * @param viewportOverflowState The overflow state of the viewport
         */
        const _getViewportOverflowHideOffset = (viewportOverflowState: ViewportOverflowState) => {
          const { _overflowScroll } = viewportOverflowState;
          const arrangeHideOffset =
            _nativeScrollbarsHiding || showNativeOverlaidScrollbars ? 0 : 42;

          const getHideOffsetPerAxis = (
            isOverlaid: boolean,
            overflowScroll: boolean,
            nativeScrollbarSize: number
          ) => {
            const nonScrollbarStylingHideOffset = isOverlaid
              ? arrangeHideOffset
              : nativeScrollbarSize;
            const scrollbarsHideOffset =
              overflowScroll && !_nativeScrollbarsHiding ? nonScrollbarStylingHideOffset : 0;
            const scrollbarsHideOffsetArrange = isOverlaid && !!arrangeHideOffset;

            return [scrollbarsHideOffset, scrollbarsHideOffsetArrange] as const;
          };

          const [xScrollbarsHideOffset, xScrollbarsHideOffsetArrange] = getHideOffsetPerAxis(
            _nativeScrollbarsOverlaid.x,
            _overflowScroll.x,
            _nativeScrollbarsSize.x
          );
          const [yScrollbarsHideOffset, yScrollbarsHideOffsetArrange] = getHideOffsetPerAxis(
            _nativeScrollbarsOverlaid.y,
            _overflowScroll.y,
            _nativeScrollbarsSize.y
          );

          return {
            _scrollbarsHideOffset: {
              x: xScrollbarsHideOffset,
              y: yScrollbarsHideOffset,
            },
            _scrollbarsHideOffsetArrange: {
              x: xScrollbarsHideOffsetArrange,
              y: yScrollbarsHideOffsetArrange,
            },
          };
        };

        /**
         * Hides the native scrollbars according to the passed parameters.
         * @param viewportOverflowState The viewport overflow state.
         * @param directionIsRTL Whether the direction is RTL or not.
         * @param viewportArrange Whether special styles related to the viewport arrange strategy shall be applied.
         * @param viewportStyleObj The viewport style object to which the needed styles shall be applied.
         */
        const _hideNativeScrollbars = (
          viewportOverflowState: ViewportOverflowState,
          { _directionIsRTL }: ObserversSetupState,
          viewportArrange: boolean
        ): StyleObject | undefined => {
          if (!_viewportIsTarget) {
            const viewportStyleObj: StyleObject = assignDeep(
              {},
              {
                [strMarginRight]: 0,
                [strMarginBottom]: 0,
                [strMarginLeft]: 0,
              }
            );
            const { _scrollbarsHideOffset, _scrollbarsHideOffsetArrange } =
              _getViewportOverflowHideOffset(viewportOverflowState);
            const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
            const { x: hideOffsetX, y: hideOffsetY } = _scrollbarsHideOffset;
            const { _viewportPaddingStyle } = structureSetupState;
            const horizontalMarginKey: keyof StyleObject = _directionIsRTL
              ? strMarginLeft
              : strMarginRight;
            const viewportHorizontalPaddingKey: keyof StyleObject = _directionIsRTL
              ? strPaddingLeft
              : strPaddingRight;
            const horizontalMarginValue = _viewportPaddingStyle[horizontalMarginKey] as number;
            const verticalMarginValue = _viewportPaddingStyle[strMarginBottom] as number;
            const horizontalPaddingValue = _viewportPaddingStyle[
              viewportHorizontalPaddingKey
            ] as number;
            const verticalPaddingValue = _viewportPaddingStyle[strPaddingBottom] as number;

            // horizontal
            viewportStyleObj[strWidth] = `calc(100% + ${
              hideOffsetY + horizontalMarginValue * -1
            }px)`;
            viewportStyleObj[horizontalMarginKey] = -hideOffsetY + horizontalMarginValue;

            // vertical
            viewportStyleObj[strMarginBottom] = -hideOffsetX + verticalMarginValue;

            // viewport arrange additional styles
            if (viewportArrange) {
              viewportStyleObj[viewportHorizontalPaddingKey] =
                horizontalPaddingValue + (arrangeY ? hideOffsetY : 0);
              viewportStyleObj[strPaddingBottom] =
                verticalPaddingValue + (arrangeX ? hideOffsetX : 0);
            }

            return viewportStyleObj;
          }
        };

        /**
         * Sets the styles of the viewport arrange element.
         * @param viewportOverflowState The viewport overflow state according to which the scrollbars shall be hidden.
         * @param viewportScrollSize The content scroll size.
         * @param directionIsRTL Whether the direction is RTL or not.
         * @returns A boolean which indicates whether the viewport arrange element was adjusted.
         */
        const _arrangeViewport = (
          viewportOverflowState: ViewportOverflowState,
          viewportScrollSize: WH<number>,
          sizeFraction: WH<number>
        ) => {
          if (doViewportArrange) {
            const { _viewportPaddingStyle } = structureSetupState;
            const { _scrollbarsHideOffset, _scrollbarsHideOffsetArrange } =
              _getViewportOverflowHideOffset(viewportOverflowState);
            const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
            const { x: hideOffsetX, y: hideOffsetY } = _scrollbarsHideOffset;
            const { _directionIsRTL } = observersSetupState;
            const viewportArrangeHorizontalPaddingKey: keyof StyleObject = _directionIsRTL
              ? strPaddingRight
              : strPaddingLeft;
            const viewportArrangeHorizontalPaddingValue = _viewportPaddingStyle[
              viewportArrangeHorizontalPaddingKey
            ] as number;
            const viewportArrangeVerticalPaddingValue = _viewportPaddingStyle.paddingTop as number;
            const fractionalContentWidth = viewportScrollSize.w + sizeFraction.w;
            const fractionalContenHeight = viewportScrollSize.h + sizeFraction.h;
            const arrangeSize = {
              w:
                hideOffsetY && arrangeY
                  ? `${
                      hideOffsetY + fractionalContentWidth - viewportArrangeHorizontalPaddingValue
                    }px`
                  : '',
              h:
                hideOffsetX && arrangeX
                  ? `${
                      hideOffsetX + fractionalContenHeight - viewportArrangeVerticalPaddingValue
                    }px`
                  : '',
            };

            setStyles(_viewport, {
              '--os-vaw': arrangeSize.w,
              '--os-vah': arrangeSize.h,
            });
          }

          return doViewportArrange;
        };

        /**
         * Removes all styles applied because of the viewport arrange strategy.
         * @param showNativeOverlaidScrollbars Whether native overlaid scrollbars are shown instead of hidden.
         * @param directionIsRTL Whether the direction is RTL or not.
         * @param viewportOverflowState The currentviewport overflow state or undefined if it has to be determined.
         * @returns A object with a function which applies all the removed styles and the determined viewport vverflow state.
         */
        const _undoViewportArrange = (viewportOverflowState?: ViewportOverflowState) => {
          if (doViewportArrange) {
            const finalViewportOverflowState = viewportOverflowState || readViewportOverflowState();
            const { _viewportPaddingStyle: viewportPaddingStyle } = structureSetupState;
            const { _scrollbarsHideOffsetArrange } = _getViewportOverflowHideOffset(
              finalViewportOverflowState
            );
            const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
            const finalPaddingStyle: StyleObject = {};
            const assignProps = (props: string[]) =>
              each(props, (prop) => {
                finalPaddingStyle[prop as StyleObjectKey] =
                  viewportPaddingStyle[prop as StyleObjectKey];
              });

            if (arrangeX) {
              assignProps([strMarginBottom, strPaddingTop, strPaddingBottom]);
            }

            if (arrangeY) {
              assignProps([strMarginLeft, strMarginRight, strPaddingLeft, strPaddingRight]);
            }

            const prevStyle = getStyles(_viewport, keys(finalPaddingStyle) as StyleObjectKey[]);
            const addArrange = removeAttrClass(
              _viewport,
              dataAttributeViewport,
              dataValueViewportArrange
            );

            setStyles(_viewport, finalPaddingStyle);

            return [
              () => {
                setStyles(
                  _viewport,
                  assignDeep(
                    {},
                    prevStyle,
                    _hideNativeScrollbars(
                      finalViewportOverflowState,
                      observersSetupState,
                      doViewportArrange
                    )
                  )
                );
                addArrange();
              },
              finalViewportOverflowState,
            ] as const;
          }
          return [noop] as const;
        };

        return {
          _getViewportOverflowHideOffset,
          _arrangeViewport,
          _undoViewportArrange,
          _hideNativeScrollbars,
        };
      },
    }),
  },
}))() satisfies StaticPlugin<typeof scrollbarsHidingPluginName>;
