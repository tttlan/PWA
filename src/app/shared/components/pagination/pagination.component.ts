import { Component, EventEmitter, Input, Output, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Page } from './pagination.interface';

@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pagination.component.html',
  exportAs: 'pagination'
})
export class PaginationComponent implements OnChanges {

  public pages: Page[] = [];

  public current: number;
  @Input() set page(page: number | string) {
    this.current = +page;
  }
  @Output() pageChange = new EventEmitter<number>();

  @Input() totalRecords: number | string;
  @Input() perPage: number | string = 20;
  @Input() limit: number | string = 3;
  @Input() boundaryNumbers = 0;

  @Input() set boundaryLinks(boundaryLinks: string | boolean) {
    this._boundaryLinks = this.toBoolean(boundaryLinks);
  }

  public totalPages: number;
  private _boundaryLinks = false;

  get boundaryLinks() {
    return this._boundaryLinks;
  }

  public hasPrevious() {
    return this.current > 1;
  }

  public hasNext() {
    return this.current < this.totalPages;
  }

  public goto(page: number) {
    if (page === this.current) {
      return;
    }
    this.pageChange.emit(+page);
  }

  public ngOnChanges(changes?: any) {
    this.totalPages = Math.ceil(+this.totalRecords / +this.perPage);

    const { start, end } = this.limits();

    this.pages = this.getPageArray(start, end);

    if (this.boundaryNumbers > 0) {
      if (start > 1) {
        const preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
        const lastGapNumber = +preGap[preGap.length - 1].number;
        if (lastGapNumber < start - 1) {
          this.pages.unshift(this.getGapPage(lastGapNumber, start));
        }
        this.pages.unshift(...preGap);
      }

      if (end < this.totalPages) {
        const postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
        const firstGapNumber = +postGap[0].number;
        if (firstGapNumber > end + 1) {
          this.pages.push(this.getGapPage(end, firstGapNumber));
        }
        this.pages.push(...postGap);
      }
    }

    if (this.current > this.totalPages) {
      setTimeout(() => this.goto(this.totalPages));
    } else if (!this.current && this.totalPages > 0) {
      setTimeout(() => this.goto(1));
    }
  }

  public pageTrackBy(index: number, page: Page) {
    return page.number;
  }

  get start(): number {
    return Math.min(Math.max(1 + (+this.current - 1) * +this.perPage, 0), +this.totalRecords);
  }

  get end(): number {
    return Math.min(this.start + (+this.perPage - 1), +this.totalRecords);
  }

  private getPageArray(start: number, end: number) {
    return Array.apply(null, { length: end - start + 1 }).map((value: any, index: number) => this.getPage(start + index));
  }

  private getPage(number: string | number, disabled = false): Page {
    return { number, disabled };
  }

  private getGapPage(before: number, after: number) {
    const isConsecutive = before + 1 === after - 1;
    return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
  }

  /**
   * Calculate the first and the last visible page numbers
   */
  private limits() {
    let start = 1, end = this.totalPages;

    if (this.limit < 1) {
      return { start, end };
    }

    // The current page is displayed in the middle of the visible ones
    start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
    end = start + +this.limit - 1;

    // Adjust if limit is exceeded
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(end - +this.limit + 1, 1);
    }

    return { start, end };
  }

  private toBoolean(value: any): boolean {
    switch (value) {
      case '':
        return true;

      case 'false':
      case '0':
        return false;

      default:
        return !!value;
    }
  }
}
