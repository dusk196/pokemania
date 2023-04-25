import { Injectable } from '@angular/core';
import { isEmpty, isNull, isUndefined } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  isValid(param: any): boolean {
    return !(isNull(param) || isUndefined(param) || isEmpty(param));
  }

}
