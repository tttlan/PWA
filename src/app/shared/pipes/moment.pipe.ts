import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  constructor(
  ) {
    moment.locale('de');
  }
  /*
   * Convert the date to an format.
   **/
  transform(value, args = 'l') {
    const format = args || '';
    const result = format === 'ago' ? moment(value).fromNow() : moment(value).format(format);
    return result !== 'Invalid date' ? result : '';
  }
}
