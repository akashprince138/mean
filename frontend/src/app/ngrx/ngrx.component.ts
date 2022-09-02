import { Component, OnInit } from '@angular/core';
import { SetRaceAction } from './store/actions/race.action';
import { SetSpecialtyAction } from './store/actions/set-speciality.action';
import { CharacterState } from './store/Character.state';
import { Store, Action, ActionReducerMap, createSelector } from '@ngrx/store';
@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  currentRace = this.store.select('race');
  currentSpecialty = this.store.select('specialty');
  constructor(public store: Store<CharacterState>) {}

  ngOnInit(): void {}
  dispatchRace(race) {
    this.store.dispatch(new SetRaceAction(race));
  }
  dispatchSpecialty(spec) {
    this.store.dispatch(new SetSpecialtyAction(spec));
  }
}
