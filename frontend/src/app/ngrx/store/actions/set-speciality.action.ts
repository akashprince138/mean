import { Store, Action, ActionReducerMap, createSelector } from '@ngrx/store';
const SET_SPECIALTY = '[CLASS] Set';

export class SetSpecialtyAction implements Action {
  readonly type = SET_SPECIALTY;
  constructor(public specialty: string) {}
}
