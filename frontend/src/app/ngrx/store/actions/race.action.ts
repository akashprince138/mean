import { Store, Action, ActionReducerMap, createSelector } from '@ngrx/store';

export const SET_RACE = '[RACE] Set';

export class SetRaceAction implements Action {
  readonly type = SET_RACE;
  constructor(public race: string) {}
}
