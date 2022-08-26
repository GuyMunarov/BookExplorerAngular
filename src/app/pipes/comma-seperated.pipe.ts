import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeperated'
})
export class CommaSeperatedPipe implements PipeTransform {

  transform(value: string[]): string {
    if(!value) return '';
    return value.join(', ');
  }

}
