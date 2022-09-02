import { SetRaceAction } from './../actions/race.action';

export function raceReducer(
  state: string = undefined,
  action: SetRaceAction
): string {
  return action.race || state;
}
