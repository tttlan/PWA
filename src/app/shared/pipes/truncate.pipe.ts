import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  /**
   * By default, the pipe will truncate text after 40 characters. You could override this using the first argument:
   *
   * <p>{{ "123456789" | truncate : 3 }}</p>
   * Result:
   * <p>123…</p>
   *
   * <p>{{ "123456789" | truncate : 3 : "xxx" }}</p>
   * Result:
   * <p>123xxx</p>
   *
   * <p>{{ "123456789" | truncate : -4 : "…" }}</p>
   * Result:
   * <p>…6789</p>
   *
   * @param value
   * @param limit
   * @param trail
   */
  transform(value: string, limit: number = 40, trail: String = '…'): string {
    if (!value) {
      value = '';
    }

    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
