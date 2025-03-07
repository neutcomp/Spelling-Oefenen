import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces',
    standalone: false
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }

}