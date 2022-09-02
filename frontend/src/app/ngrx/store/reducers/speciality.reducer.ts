import { SetSpecialtyAction } from './../actions/set-speciality.action';

export function specialtyReducer(
  state: string = undefined,
  action: SetSpecialtyAction
): string {
  return action.specialty || state;
}
