import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env';

@Pipe({ name: 'decimal' })
export class DecimalFormatPipe implements PipeTransform {

  /*
   * Convert the number to locale format.
   **/
  transform(value: number, miniFractionDigits?, shiftDecimal?): string {
    if (value === 0) {
      return '0';
    }
    if (!value) {
      return null;
    }
    if (shiftDecimal) {
      value /= 10 ** shiftDecimal;
    }
    return new Intl.NumberFormat(environment.localeFormat,
      { minimumFractionDigits: miniFractionDigits ? miniFractionDigits : 2 }).format(value);
  }
}
