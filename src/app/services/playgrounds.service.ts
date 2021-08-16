import { Injectable } from '@angular/core';
import { Playground } from '../interfaces/playground.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundsService {

  constructor() { }

  getPlaygrounds(filter?: any): Array<Playground> {
    if (filter) {
      return playgrounds.filter(playground => this.playgroundWithinAgeRange(playground.targetAgeFrom, playground.targetAgeTo, filter.age.lower, filter.age.upper))
    }
    return playgrounds;
  }

  getPlayground(id: number): Playground {
    return playgrounds.find(playground => playground.id === id);
  }

  private playgroundWithinAgeRange(targetAgeFrom, targetAgeTo, lowerAge, upperAge): boolean {
    if (!targetAgeTo) {
      return lowerAge <= targetAgeFrom && upperAge >= targetAgeFrom
    } else {
      return (lowerAge <= targetAgeFrom || upperAge >= targetAgeTo) // 1. Check if (part of) the playground is within age range
        && (lowerAge <= targetAgeTo) // 2. Check if the playground to age overlaps lower age range
        && (upperAge >= targetAgeFrom) // 3. Check if the playground from age overlaps upper age range
    }
  }
}

const playgrounds: Array<Playground> = [
  {
    id: 1,
    image: '1.webp',
    imageMap: '1-m.webp',
    name: 'Skatepark Briel',
    municipality: 'Deinze',
    targetAgeFrom: 6,
    activities: ['SKATE_BLADE', 'CHILL', 'BENCH'],
    lat: 50.983453282460154,
    lng: 3.525145436764265
  },
  {
    id: 2,
    image: '2.webp',
    imageMap: '2-m.webp',
    name: 'Kaandelpark',
    municipality: 'Deinze',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'CHILL', 'PICNIC_BENCH', 'SPIN', 'WATERWHEEL', 'BENCH', 'BALANCE', 'WATER_LOCK', 'SAND'],
    lat: 50.98412655217438,
    lng: 3.524671900837458
  },
  {
    id: 3,
    image: '3.webp',
    imageMap: '3-m.webp',
    name: 'Biesbulckstraat',
    municipality: 'Deinze',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'CABLEWAY', 'SLIDE', 'SPRING_RIDER', 'BENCH', 'SWING', 'WIRE_CIRCUS', 'SAND', 'HILL'],
    lat: 50.991947456939656,
    lng: 3.5226550928358202
  },
  {
    id: 4,
    image: '4.webp',
    imageMap: '4-m.webp',
    name: 'Ten Bosse',
    municipality: 'Deinze',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'SAND', 'SWING', 'BENCH'],
    lat: 50.98916778340814,
    lng: 3.535499357466702
  },
  {
    id: 5,
    image: '5.webp',
    imageMap: '5-m.webp',
    name: 'Rekkelinge - Désiré Delcroixstraat',
    municipality: 'Deinze',
    targetAgeFrom: 6,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'DIVING_RACK', 'SWING', 'BENCH'],
    lat: 50.985049531936475,
    lng: 3.5366737026468744
  },
  {
    id: 6,
    image: '6.webp',
    imageMap: '6-m.webp',
    name: 'Toekomststraat',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'BENCH', 'SWING', 'SAND'],
    lat: 50.97561263344486,
    lng: 3.54641228900224
  },
  {
    id: 7,
    image: '7.webp',
    imageMap: '7-m.webp',
    name: 'Winterlaan',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['SLIDE', 'BENCH', 'SWING', 'SAND', 'SPRING_RIDER', 'CLIMB'],
    lat: 50.9750120334014,
    lng: 3.5431717154944793
  },
  {
    id: 8,
    image: '8.webp',
    imageMap: '8-m.webp',
    name: 'Koningin Astridstraat - Driesstraat',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['BALANCE', 'PICNIC_BENCH'],
    lat: 50.97331150835841,
    lng: 3.534070852769791
  },
  {
    id: 9,
    image: '9.webp',
    imageMap: '9-m.webp',
    name: 'Sleepstraat',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 6,
    targetAgeTo: 12,
    activities: ['CLIMB', 'DIVING_RACK', 'SLIDE', 'BENCH', 'SWING', 'SAND'],
    lat: 50.96981140330136,
    lng: 3.538226508410422
  },
  {
    id: 10,
    image: '10.webp',
    imageMap: '10-m.webp',
    name: 'Nieuwgoedlaan 1',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 50.966950664314446,
    lng: 3.5320755672939486
  },
  {
    id: 11,
    image: '11.webp',
    imageMap: '11-m.webp',
    name: 'Nieuwgoedlaan 2',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 50.96761957117237,
    lng: 3.533867282886243
  },
  {
    id: 12,
    name: 'Paddenpoelhof',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 50.96509222729424,
    lng: 3.5322214305540434
  },
  {
    id: 13,
    name: 'Ter Meire',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BASKETBALL', 'PICNIC_BENCH', 'SLIDE', 'CHILL', 'SWING', 'SPRING_RIDER'],
    lat: 50.96503177089397,
    lng: 3.5246659843552273
  },
  {
    id: 14,
    name: 'Sluiskouter',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 6,
    targetAgeTo: 14,
    activities: ['CLIMB', 'PICNIC_BENCH', 'BALANCE', 'CHILL'],
    lat: 50.97016805398308,
    lng: 3.521932983988534
  },
  {
    id: 15,
    name: 'Kleine Oostkouter',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['SLIDE', 'BENCH', 'SWING', 'SAND', 'SPRING_RIDER'],
    lat: 50.971706006761416,
    lng: 3.5236205906770475
  },
  {
    id: 16,
    name: 'Katteputstraat',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'PICNIC_BENCH', 'BALANCE'],
    lat: 50.97391991511694,
    lng: 3.524304808411402
  },
  {
    id: 17,
    name: 'Kernlaan',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 6,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'BALANCE'],
    lat: 50.975047591988925,
    lng: 3.519449309572729
  },
  {
    id: 18,
    name: 'Energielaan',
    municipality: 'Deinze',
    submunicipality: 'Petegem',
    targetAgeFrom: 2,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'SPRING_RIDER'],
    lat: 50.97511205259347,
    lng: 3.5188760155317116
  },
  {
    id: 19,
    name: 'Harrelstraat',
    municipality: 'Deinze',
    submunicipality: 'Grammene',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'DIVING_RACK', 'SLIDE', 'BALANCE', 'BENCH', 'SWING', 'SPRING_RIDER', 'SAND'],
    lat: 50.97786095967864,
    lng: 3.469991652155758
  },
  {
    id: 20,
    name: 'Speelweide Oude Heirbaan',
    municipality: 'Deinze',
    submunicipality: 'Gottem',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'CHILL', 'SAND', 'BALANCE', 'PICNIC_BENCH', 'FOOTBALL', 'BENCH'],
    lat: 50.96394462230283,
    lng: 3.461851763052604
  },
  {
    id: 21,
    name: 'Eikhof',
    municipality: 'Deinze',
    submunicipality: 'Wontergem',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'BASKETBALL', 'BALANCE', 'BENCH'],
    lat: 50.9793388041597,
    lng: 3.440202322867133
  },
  {
    id: 22,
    name: 'Aarseleweg - Sint-Pieterslaan',
    municipality: 'Deinze',
    submunicipality: 'Vinkt',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'SAND', 'SLIDE', 'WIRE_CIRCUS', 'SWING', 'BENCH'],
    lat: 51.00696474859768,
    lng: 3.475648116451678
  },
  {
    id: 23,
    name: 'Blekerij',
    municipality: 'Deinze',
    submunicipality: 'Zeveren',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'BENCH', 'SWING', 'SAND'],
    lat: 50.99642896531785,
    lng: 3.4952641930229684
  },
  {
    id: 24,
    name: 'Alfons Van Zandyckestraat',
    municipality: 'Deinze',
    submunicipality: 'Meigem',
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'BENCH', 'SLIDE', 'SPRING_RIDER', 'SAND', 'SWING', 'PICNIC_BENCH'],
    lat: 51.015711269063885,
    lng: 3.53988549483423
  },
  {
    id: 25,
    name: 'Albijn Van Den Abeelestraat',
    municipality: 'Deinze',
    submunicipality: 'Sint-Martens-Leerne',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'FOOTBALL', 'SWING', 'BENCH'],
    lat: 51.017602738981005,
    lng: 3.580715315983599
  },
  {
    id: 26,
    name: 'Ooidonkdreef',
    municipality: 'Deinze',
    submunicipality: 'Bachte-Maria-Leerne',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'FOOTBALL', 'BENCH', 'SLIDE', 'SPRING_RIDER', 'SAND', 'SWING', 'WIRE_CIRCUS'],
    lat: 51.00651175175804,
    lng: 3.580539800093541
  },
  {
    id: 27,
    name: 'Du Boisdreef',
    municipality: 'Deinze',
    submunicipality: 'Bachte-Maria-Leerne',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'PICNIC_BENCH', 'SLIDE', 'SWING'],
    lat: 51.00421258895883,
    lng: 3.5701533827468643
  },
  {
    id: 28,
    name: 'Rietvoornstraat',
    municipality: 'Deinze',
    submunicipality: 'Astene',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SWING', 'DIVING_RACK'],
    lat: 50.9898357861625,
    lng: 3.5699327395879332
  },
  {
    id: 29,
    name: 'Dr. Adriaan Martenslaan',
    municipality: 'Deinze',
    submunicipality: 'Astene',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH', 'FOOTBALL'],
    lat: 50.98998935149279,
    lng: 3.572694795863018
  },
  {
    id: 30,
    name: 'Breeschoot',
    municipality: 'Deinze',
    submunicipality: 'Astene',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['CLIMB', 'SPIN', 'PICNIC_BENCH', 'SLIDE', 'FOOTBALL', 'BENCH', 'SWING', 'SPRING_RIDER', 'SAND'],
    lat: 50.98093228237019,
    lng: 3.5683992483695546
  },
  {
    id: 31,
    name: 'Krommestraat',
    municipality: 'Deinze',
    submunicipality: 'Astene',
    targetAgeFrom: 3,
    targetAgeTo: 16,
    activities: ['FOOTBALL'],
    lat: 50.987076142057845,
    lng: 3.562966384576815
  },
  {
    id: 32,
    name: 'Baarsstraat',
    municipality: 'Deinze',
    submunicipality: 'Astene',
    targetAgeFrom: 2,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'SAND', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 50.98762506106999,
    lng: 3.5645389205083897
  },
  {
    id: 33,
    name: 'Wallenbulk',
    municipality: 'Deinze',
    submunicipality: 'Nevele',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'HILL', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 51.034617399767825,
    lng: 3.543628435288175
  },
  {
    id: 34,
    name: 'Skatepark Oostbroek',
    municipality: 'Deinze',
    submunicipality: 'Nevele',
    targetAgeFrom: 6,
    activities: ['SKATE_BLADE'],
    lat: 51.033636090093566,
    lng: 3.554056074089979
  },
  {
    id: 35,
    name: 'Oudehofstraat',
    municipality: 'Deinze',
    submunicipality: 'Vosselare',
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'SPRING_RIDER', 'SLIDE', 'FOOTBALL', 'BENCH', 'SWING', 'CHILL'],
    lat: 51.02488131945519,
    lng: 3.558657777228252
  },
  {
    id: 36,
    name: 'Paepestraat',
    municipality: 'Deinze',
    submunicipality: 'Poesele',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'SLIDE', 'BALANCE', 'SWING', 'SPRING_RIDER'],
    lat: 51.03455722748165,
    lng: 3.518032072234641
  },
  {
    id: 37,
    name: 'Cultuurhuis Hansbekedorp',
    municipality: 'Deinze',
    submunicipality: 'Hansbeke',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPRING_RIDER', 'SLIDE', 'SWING'],
    lat: 51.07411326726052,
    lng: 3.537044465417952
  },
  {
    id: 38,
    name: 'Kerselare',
    municipality: 'Deinze',
    submunicipality: 'Merendree',
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'BALANCE', 'PICNIC_BENCH', 'SLIDE', 'FOOTBALL', 'SWING', 'SPRING_RIDER'],
    lat: 51.08024660594705,
    lng: 3.5792407171916856
  },
  {
    id: 39,
    name: 'Ter Kale - Jan Burssenstraat',
    municipality: 'Deinze',
    submunicipality: 'Merendree',
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BALANCE', 'SLIDE', 'SPRING_RIDER', 'SWING', 'BENCH'],
    lat: 51.075153897138904,
    lng: 3.575585745626276
  },
  {
    id: 40,
    name: 'Vierhekkens',
    municipality: 'Deinze',
    submunicipality: 'Landegem',
    targetAgeFrom: 3,
    targetAgeTo: 12,
    activities: ['CLIMB', 'SPIN', 'HILL', 'SLIDE', 'BALANCE', 'SWING', 'SPRING_RIDER'],
    lat: 51.06189826213017,
    lng: 3.5798533793276546
  },
  {
    id: 41,
    name: 'Ter Varent',
    municipality: 'Deinze',
    submunicipality: 'Landegem',
    targetAgeFrom: 3,
    targetAgeTo: 8,
    activities: ['CLIMB', 'BENCH', 'SLIDE', 'SPRING_RIDER'],
    lat: 51.055640512600625,
    lng: 3.5836988896539665
  },
  {
    id: 42,
    name: 'Prosper Cocquytstraat',
    municipality: 'Deinze',
    submunicipality: 'Landegem',
    targetAgeFrom: 3,
    targetAgeTo: 14,
    activities: ['CLIMB', 'CHILL', 'BALANCE', 'SPRING_RIDER', 'FOOTBALL', 'SAND'],
    lat: 51.05428913363674,
    lng: 3.5767548751622806
  },
];