import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

 
  transform(customers: any[], searchText: string): any[] {
    if (!customers) return [];
    if (!searchText) return customers;

    searchText = searchText.toLowerCase();

    return customers.filter(c => {
      return c.customerName.toLowerCase().includes(searchText)
        || c.customerNumber.toLowerCase().includes(searchText);
    });
  }

}
