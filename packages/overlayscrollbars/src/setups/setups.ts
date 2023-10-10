import { bind, each, isEmptyObject, keys, runEachAndClear, scrollLeft, scrollTop } from '~/support';
import { createOptionCheck } from '~/options';
import type { DeepReadonly } from '~/typings';
import type { InitializationTarget, PartialOptions, ReadonlyOptions } from '..';
import type { ObserversSetupState, ObserversSetupUpdateHints } from './observersSetup';
import type { StructureSetupState, StructureSetupUpdateHints } from './structureSetup';
import type { StructureSetupElementsObj } from './structureSetup/structureSetup.elements';
import type { ScrollbarsSetupElementsObj } from './scrollbarsSetup/scrollbarsSetup.elements';
import { createObserversSetup } from './observersSetup';
import { createScrollbarsSetup } from './scrollbarsSetup';
import { createStructureSetup } from './structureSetup';

export type SetupUpdateHints = Partial<Record<string, boolean>>;

export type Setup<
  U extends Record<string, any>,
  S extends Readonly<Record<string, any>>,
  H extends SetupUpdateHints | void
> = [
  /** The create function which returns the `destroy` function. */
  _create: () => () => void,
  /** Function which updates the setup and returns the update result. */
  _update: (updateInfo: U) => H,
  /** Function which returns the current state. */
  _state: S
];

export interface SetupsUpdateInfo {
  /** The options that changed or `undefined` if none changed. */
  _changedOptions?: PartialOptions;
  /** Whether chache should be ignored. */
  _force?: boolean;
  /** Whether observers should take their records and thus update as well. */
  _takeRecords?: boolean;
  /** Whether one or more scrollbars has been cloned. */
  _cloneScrollbar?: boolean;
}

export interface SetupsUpdateHints {
  readonly _observersUpdateHints: Required<DeepReadonly<ObserversSetupUpdateHints>>;
  readonly _structureUpdateHints: Required<DeepReadonly<StructureSetupUpdateHints>>;
}

export interface SetupsState {
  readonly _observersSetupState: DeepReadonly<ObserversSetupState>;
  readonly _structureSetupState: DeepReadonly<StructureSetupState>;
}

export interface SetupsElements {
  readonly _structureSetupElements: DeepReadonly<StructureSetupElementsObj>;
  readonly _scrollbarsSetupElements: DeepReadonly<ScrollbarsSetupElementsObj>;
}

export type Setups = [
  construct: () => () => void,
  update: (updateInfo: SetupsUpdateInfo) => boolean,
  getState: () => SetupsState,
  elements: SetupsElements,
  canceled: () => void
];

const booleanUpdateHints = <T extends SetupUpdateHints>(hints: T): Required<T> => {
  const booleanHints: Required<SetupUpdateHints> = {};
  each(hints, (value, key) => {
    booleanHints[key] = !!value;
  });
  return booleanHints as Required<T>;
};

const updateHintsAreTruthy = (hints: SetupUpdateHints) =>
  keys(hints).some((key) => !!hints[key as keyof typeof hints]);

export const createSetups = (
  target: InitializationTarget,
  options: ReadonlyOptions,
  onUpdated: (updateInfo: SetupsUpdateInfo, updateHints: SetupsUpdateHints) => void,
  onScroll: (scrollEvent: Event) => void
): Setups => {
  const [
    structureSetupCreate,
    structureSetupUpdate,
    structureSetupState,
    structureSetupElements,
    structureSetupCanceled,
  ] = createStructureSetup(target);
  const [observersSetupCreate, observersSetupUpdate, observersSetupState] = createObserversSetup(
    structureSetupElements,
    (observersUpdateHints) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      update({}, observersUpdateHints);
    }
  );
  const [scrollbarsSetupCreate, scrollbarsSetupUpdate, , scrollbarsSetupElements] =
    createScrollbarsSetup(
      target,
      options,
      observersSetupState,
      structureSetupState,
      structureSetupElements,
      onScroll
    );

  const update = (
    updateInfo: SetupsUpdateInfo,
    observerUpdateHints?: ObserversSetupUpdateHints
  ): boolean => {
    const { _changedOptions, _force, _takeRecords, _cloneScrollbar } = updateInfo;
    const _checkOption = createOptionCheck(options, _changedOptions || {}, _force);

    if (_cloneScrollbar) {
      scrollbarsSetupUpdate({ _checkOption, _changedOptions });
      return false;
    }

    const observersHints =
      observerUpdateHints ||
      observersSetupUpdate({
        _checkOption,
        _changedOptions,
        _takeRecords,
        _force,
      });
    const structureHints = structureSetupUpdate({
      _checkOption,
      _changedOptions,
      _observersState: observersSetupState,
      _observersUpdateHints: observersHints,
      _force,
    });
    scrollbarsSetupUpdate({
      _checkOption,
      _changedOptions,
      _observersUpdateHints: observersHints,
      _structureUpdateHints: structureHints,
      _force,
    });

    const truthyObserversHints = updateHintsAreTruthy(observersHints);
    const truthyStructureHints = updateHintsAreTruthy(structureHints);
    const changed =
      truthyObserversHints || truthyStructureHints || !isEmptyObject(_changedOptions) || !!_force;

    changed &&
      onUpdated(updateInfo, {
        _observersUpdateHints: booleanUpdateHints(observersHints),
        _structureUpdateHints: booleanUpdateHints(structureHints),
      });

    return changed;
  };

  return [
    () => {
      const { _target, _viewport, _documentElm, _isBody } = structureSetupElements;
      const scrollingElement = _isBody ? _documentElm.documentElement : _target;
      const initialScrollLeft = scrollLeft(scrollingElement);
      const initialScrollTop = scrollTop(scrollingElement);

      const destroyFns = [observersSetupCreate(), structureSetupCreate(), scrollbarsSetupCreate()];

      scrollLeft(_viewport, initialScrollLeft);
      scrollTop(_viewport, initialScrollTop);

      return bind(runEachAndClear, destroyFns);
    },
    update,
    () => ({
      _observersSetupState: observersSetupState,
      _structureSetupState: structureSetupState,
    }),
    {
      _structureSetupElements: structureSetupElements,
      _scrollbarsSetupElements: scrollbarsSetupElements,
    },
    structureSetupCanceled,
  ];
};
