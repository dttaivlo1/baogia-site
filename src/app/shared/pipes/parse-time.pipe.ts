import {Pipe, PipeTransform} from '@angular/core';
import {parseTime} from '@utils/convert.util';
import {DATE_FORMAT} from '@configs/constants/date-format.constant';

@Pipe({
  name: 'parseTime',
  pure: false,
})
export class ParseTimePipe implements PipeTransform {
  constructor() {
  }

  transform(item: any, format: string = DATE_FORMAT.DEFAULT_DATE_TIME) {
    return parseTime(item, format);
  }
}
