import { Injectable } from '@angular/core';
import { Playground } from '../interfaces/playground.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundsService {

  constructor() { }
  
  getPlaygrounds(): Array<Playground> {
    return playgrounds;
  }

  getPlayground(id: number): Playground {
    return playgrounds.find(playground => playground.id === id);
  }
}

const playgrounds: Array<Playground> = [
  {
    id: 1,
    image: 'playground-175144.jpg',
    name: 'Skatepark Briel',
    municipality: 'Deinze',
    targetAgeFrom: 6,
    activities: ['SKATE_BLADE', 'CHILL', 'BENCH']
  },
  {
    id: 2,
    name: 'Kaandelpark',
    municipality: 'Deinze', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'CHILL', 'PICNIC_BENCH', 'SPIN', 'WATERWHEEL', 'BENCH', 'BALANCE', 'WATER_LOCK', 'SAND']
  },
  {
    id: 3,
    name: 'Biesbulckstraat',
    municipality: 'Deinze', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'CABLEWAY', 'SLIDE', 'SPRING_RIDER', 'BENCH', 'SWING', 'WIRE_CIRCUS', 'SAND', 'HILL']
  },
  {
    id: 4,
    name: 'Ten Bosse',
    municipality: 'Deinze', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'SAND', 'SWING', 'BENCH']
  },
  {
    id: 5,
    name: 'Rekkelinge - Désiré Delcroixstraat',
    municipality: 'Deinze', 
    targetAgeFrom: 6,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'DIVING_RACK', 'SWING', 'BENCH']
  },
  {
    id: 6,
    name: 'Toekomststraat',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'BENCH', 'SWING', 'SAND']
  },
  {
    id: 7,
    name: 'Winterlaan',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['SLIDE', 'BENCH', 'SWING', 'SAND', 'SPRING_RIDER']
  },
  {
    id: 8,
    name: 'Koningin Astridstraat - Driesstraat',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['BALANCE', 'PICNIC_BENCH']
  },
  {
    id: 9,
    name: 'Sleepstraat',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 6,
    targetAgeTo: 12,
    activities: ['CLIMB', 'DIVING_RACK', 'SLIDE', 'BENCH', 'SWING', 'SAND']
  },
  {
    id: 10,
    name: 'Nieuwgoedlaan 1',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  },
  {
    id: 11,
    name: 'Nieuwgoedlaan 2',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  }
];