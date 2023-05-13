import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'schdule'
})
export class SchdulePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Modify the property accessors to match the structure of your data
      const date = new Date(item.date);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;
      return formattedDate.toLowerCase().includes(searchText) ||
             item.bus.busName.toLowerCase().includes(searchText) ||
             item.bus.busCode.toLowerCase().includes(searchText) ||
             item.startAndEnd.toLowerCase().includes(searchText);
    });
  }

}
