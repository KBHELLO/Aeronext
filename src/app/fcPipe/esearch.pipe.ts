import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../Entity/product';

@Pipe({
  name: 'eSearch'
})
export class ESearchPipe implements PipeTransform {

  transform(drone: Product[], search: string): Product[] {
    if (!drone || !search) {
      return drone;
    }
    return drone.filter(dr => dr.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
