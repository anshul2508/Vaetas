import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(value: number ): string {
    return Math.floor( value / 60 ) + ':' + (value % 60);
  }
}
