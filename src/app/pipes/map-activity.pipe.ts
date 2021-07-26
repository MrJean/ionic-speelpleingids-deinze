import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../enums/activities.enum';

@Pipe({
  name: 'mapActivity'
})
export class MapActivityPipe implements PipeTransform {

  transform(value: string): unknown {
    return Activities[value];
  }

}
