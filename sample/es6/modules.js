export function bet(race, car) { // ...
}
export function start(race) {
    // ...
}
import { bet, start } from './races_service';


import { start as startRace } from './races_service';
startRace(race);


import * as racesService from './races_service';
racesService.bet(race, car);
racesService.start(race);


export default class Car { /* ... */ }
import Car from './car';