
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        console.log(items);
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return (it.name.toLowerCase().includes(searchText) || it.id.toLowerCase().includes(searchText) || it.email.toLowerCase().includes(searchText));
        });
    }
}