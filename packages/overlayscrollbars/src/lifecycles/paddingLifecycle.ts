import { createCache, topRightBottomLeft, equalTRBL, style } from 'support';
import { LifecycleHub, Lifecycle } from 'lifecycles/lifecycleHub';
import { StyleObject } from 'typings';
import { getEnvironment } from 'environment';

/**
 * Lifecycle with the responsibility to adjust the padding styling of the padding and viewport element.
 * @param lifecycleHub
 * @returns
 */
export const createPaddingLifecycle = (lifecycleHub: LifecycleHub): Lifecycle => {
  const { _structureSetup, _setLifecycleCommunication } = lifecycleHub;
  const { _host, _padding, _viewport } = _structureSetup._targetObj;
  const { _update: updatePaddingCache, _current: currentPaddingCache } = createCache(() => topRightBottomLeft(_host, 'padding'), {
    _equal: equalTRBL,
    _initialValue: topRightBottomLeft(),
  });

  return (updateHints, checkOption, force) => {
    let { _value: padding, _changed: paddingChanged } = currentPaddingCache(force);
    const { _nativeScrollbarStyling, _flexboxGlue } = getEnvironment();
    const { _sizeChanged, _directionIsRTL, _contentMutation } = updateHints;
    const { _value: directionIsRTL, _changed: directionChanged } = _directionIsRTL;
    const { _value: paddingAbsolute, _changed: paddingAbsoluteChanged } = checkOption('paddingAbsolute');
    const contentMutation = !_flexboxGlue && _contentMutation;

    if (_sizeChanged || paddingChanged || contentMutation) {
      ({ _value: padding, _changed: paddingChanged } = updatePaddingCache(force));
    }

    const paddingStyleChanged = paddingAbsoluteChanged || directionChanged || paddingChanged;

    if (paddingStyleChanged) {
      // if there is no padding element and no scrollbar styling, paddingAbsolute isn't supported
      const paddingRelative = !paddingAbsolute || (!_padding && !_nativeScrollbarStyling);
      const paddingHorizontal = padding!.r + padding!.l;
      const paddingVertical = padding!.t + padding!.b;

      const paddingStyle: StyleObject = {
        marginRight: paddingRelative && !directionIsRTL ? -paddingHorizontal : 0,
        marginBottom: paddingRelative ? -paddingVertical : 0,
        marginLeft: paddingRelative && directionIsRTL ? -paddingHorizontal : 0,
        top: paddingRelative ? -padding!.t : 0,
        right: paddingRelative ? (directionIsRTL ? -padding!.r : 'auto') : 0,
        left: paddingRelative ? (directionIsRTL ? 'auto' : -padding!.l) : 0,
        width: paddingRelative ? `calc(100% + ${paddingHorizontal}px)` : '',
      };
      const viewportStyle: StyleObject = {
        paddingTop: paddingRelative ? padding!.t : 0,
        paddingRight: paddingRelative ? padding!.r : 0,
        paddingBottom: paddingRelative ? padding!.b : 0,
        paddingLeft: paddingRelative ? padding!.l : 0,
      };

      // if there is no padding element apply the style to the viewport element instead
      style(_padding || _viewport, paddingStyle);
      style(_viewport, viewportStyle);

      _setLifecycleCommunication({
        _paddingInfo: {
          _absolute: !paddingRelative,
          _padding: padding!,
        },
        _viewportPaddingStyle: _padding
          ? viewportStyle
          : {
              ...paddingStyle,
              ...viewportStyle,
            },
      });
    }

    return {
      _paddingStyleChanged: paddingStyleChanged,
    };
  };
};
