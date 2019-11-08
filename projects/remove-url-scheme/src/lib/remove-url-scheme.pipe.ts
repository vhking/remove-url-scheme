import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'removeUrlScheme'
})
export class RemoveUrlSchemePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/(^\w+:|^)\/\//, '');
    }
}
