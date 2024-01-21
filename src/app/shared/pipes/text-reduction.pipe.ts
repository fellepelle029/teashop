import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textReduction'
})
export class TextReductionPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 100;

    return value.length <= maxLength ? value : value.substring(0, maxLength) + '...';
  }

}
