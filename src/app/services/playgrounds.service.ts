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
  },
  {
    id: 12,
    name: 'Paddenpoelhof',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  },
  {
    id: 13,
    name: 'Ter Meire',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BASKETBALL', 'PICNIC_BENCH', 'SLIDE', 'CHILL', 'SWING', 'SPRING_RIDER']
  },
  {
    id: 14,
    name: 'Sluiskouter',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 6,
    targetAgeTo: 14,
    activities: ['CLIMB', 'PICNIC_BENCH', 'BALANCE', 'CHILL']
  },
  {
    id: 15,
    name: 'Kleine Oostkouterstraat',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['SLIDE', 'BENCH', 'SWING', 'SAND', 'SPRING_RIDER']
  },
  {
    id: 16,
    name: 'Katteputstraat',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'PICNIC_BENCH', 'BALANCE']
  },
  {
    id: 17,
    name: 'Kernlaan',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 6,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'BALANCE']
  },
  {
    id: 18,
    name: 'Energielaan',
    municipality: 'Deinze', 
    submunicipality: 'Petegem', 
    targetAgeFrom: 2,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'SPRING_RIDER']
  },
  {
    id: 19,
    name: 'Harrelstraat',
    municipality: 'Deinze', 
    submunicipality: 'Grammene', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'DIVING_RACK', 'SLIDE', 'BALANCE', 'BENCH', 'SWING', 'SPRING_RIDER', 'SAND']
  },
  {
    id: 20,
    name: 'Speelweide Oude Heirbaan',
    municipality: 'Deinze', 
    submunicipality: 'Gottem', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'CHILL', 'SAND', 'BALANCE', 'PICNIC_BENCH', 'FOOTBALL', 'BENCH']
  },
  {
    id: 21,
    name: 'Eikhof',
    municipality: 'Deinze', 
    submunicipality: 'Wontergem', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'BASKETBALL', 'BALANCE', 'BENCH']
  },
  {
    id: 22,
    name: 'Aarseleweg - Sint-Pieterslaan',
    municipality: 'Deinze', 
    submunicipality: 'Vinkt', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'WIRE_CIRCUS', 'SWING', 'BENCH']
  },
  {
    id: 23,
    name: 'Blekerij',
    municipality: 'Deinze', 
    submunicipality: 'Zeveren', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'BENCH', 'SWING', 'SAND']
  },
  {
    id: 24,
    name: 'Alfons Van Zandyckestraat',
    municipality: 'Deinze', 
    submunicipality: 'Meigem', 
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'BENCH', 'SLIDE', 'SPRING_RIDER', 'SAND', 'SWING', 'PICNIC_BENCH']
  },
  {
    id: 25,
    name: 'Albijn Van Den Abeelestraat',
    municipality: 'Deinze', 
    submunicipality: 'Sint-Martens-Leerne', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'FOOTBALL', 'SWING', 'BENCH']
  },
  {
    id: 26,
    name: 'Ooidonkdreef',
    municipality: 'Deinze', 
    submunicipality: 'Bachte-Maria-Leerne', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'BENCH', 'SLIDE', 'SPRING_RIDER', 'SAND', 'SWING', 'WIRE_CIRCUS']
  },
  {
    id: 27,
    name: 'Du Boisdreef',
    municipality: 'Deinze', 
    submunicipality: 'Bachte-Maria-Leerne', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'PICNIC_BENCH', 'SLIDE', 'SWING']
  },
  {
    id: 28,
    name: 'Rietvoornstraat',
    municipality: 'Deinze', 
    submunicipality: 'Astene', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SWING', 'DIVING_RACK']
  },
  {
    id: 29,
    name: 'Dr. Adriaan Martenslaan',
    municipality: 'Deinze', 
    submunicipality: 'Astene', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH', 'FOOTBALL']
  },
  {
    id: 30,
    name: 'Breeschoot',
    municipality: 'Deinze', 
    submunicipality: 'Astene', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'SPIN', 'PICNIC_BENCH', 'SLIDE', 'FOOTBALL', 'BENCH', 'SWING', 'SPRING_RIDER', 'SAND']
  },
  {
    id: 31,
    name: 'Krommestraat',
    municipality: 'Deinze', 
    submunicipality: 'Astene', 
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['FOOTBALL']
  },
  {
    id: 32,
    name: 'Baarsstraat',
    municipality: 'Deinze', 
    submunicipality: 'Astene', 
    targetAgeFrom: 2,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  },
  {
    id: 33,
    name: 'Wallenbulk',
    municipality: 'Deinze', 
    submunicipality: 'Nevele', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'HILL', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  },
  {
    id: 34,
    name: 'Skatepark Oostbroek',
    municipality: 'Deinze', 
    submunicipality: 'Nevele', 
    targetAgeFrom: 6,
    activities: ['SKATE_BLADE']
  },
  {
    id: 35,
    name: 'Oudehofstraat',
    municipality: 'Deinze', 
    submunicipality: 'Vosselare', 
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'SPRING_RIDER', 'SLIDE', 'FOOTBALL', 'BENCH', 'SWING', 'CHILL']
  },
  {
    id: 36,
    name: 'Paepestraat',
    municipality: 'Deinze', 
    submunicipality: 'Poesele', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'SLIDE', 'BALANCE', 'SWING', 'SPRING_RIDER']
  },
  {
    id: 37,
    name: 'Cultuurhuis Hansbekedorp',
    municipality: 'Deinze', 
    submunicipality: 'Hansbeke', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'SWING']
  },
  {
    id: 38,
    name: 'Kerselare',
    municipality: 'Deinze', 
    submunicipality: 'Merendree', 
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'PICNIC_BENCH', 'SLIDE', 'FOOTBALL', 'SWING', 'SPRING_RIDER']
  },
  {
    id: 39,
    name: 'Ter Kale-Jan Burssenstraat',
    municipality: 'Deinze', 
    submunicipality: 'Merendree', 
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH']
  },
  {
    id: 40,
    name: 'Vierhekkens',
    municipality: 'Deinze', 
    submunicipality: 'Landegem', 
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'HILL', 'SLIDE', 'BALANCE', 'SWING', 'SPRING_RIDER']
  },
  {
    id: 41,
    name: 'Ter Varent',
    municipality: 'Deinze', 
    submunicipality: 'Landegem', 
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'SPRING_RIDER']
  },
  {
    id: 42,
    name: 'Prosper Cocquytstraat',
    municipality: 'Deinze', 
    submunicipality: 'Landegem', 
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'CHILL', 'BALANCE', 'SPRING_RIDER', 'FOOTBALL', 'SAND']
  },
];