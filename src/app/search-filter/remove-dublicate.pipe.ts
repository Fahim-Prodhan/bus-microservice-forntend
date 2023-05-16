import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDublicate'
})
export class RemoveDublicatePipe implements PipeTransform {

  transform(value: any[], property: string): any[] {
    const uniqueValues = new Set();
    return value.filter(item => {
      if (!uniqueValues.has(item[property])) {
        uniqueValues.add(item[property]);
        return true;
      }
      return false;
    });
  }

}
