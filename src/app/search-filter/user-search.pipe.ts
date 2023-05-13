import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item =>
      item.username.toLowerCase().includes(searchTerm) ||
      item.authorities[0].authority.toLowerCase().includes(searchTerm) ||
      item.firstName.toLowerCase().includes(searchTerm) ||
      item.lastName.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.phone.toLowerCase().includes(searchTerm)
    );
  }

}
