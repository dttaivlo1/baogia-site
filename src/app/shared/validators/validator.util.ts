import {formatDateStrFromDatePicker} from '@utils/format.util';
import {FormGroup} from '@angular/forms';

export const ErrorCode = {
  SUCCESS: '0'
};

export const Pattern = {
  TEXT_PATTERN: `[0-9A-Za-z()---+="'/.,;:\\ ]*`,
  ALPHANUMERIC_PATTERN: `[0-9A-Za-z]*`,
  NUMBER_PATTERN: `\\d+`,
  DECIMAL_NUMBER: `[\\d]{1,20}([\\.|\\,]\\d{1,2})?`,
  PHONE_NUMBER: `(09|03|07|08|05)+([0-9]{8})`,
  FAX_NUMBER: `\\+?[0-9]{7,10}`,
  TAX_CODE: `\\d{10}(\\d{2})?`,
  DMY_DATE_PATTERN: `(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d`,
  MDY_DATE_PATTERN: `(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d`,
  // EMAIL_PATTERN: `[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}`,
  EMAIL_PATTERN: `[^\\s@]+@[^\\s@]+\\.[^\\s@]+`,
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  PASSWORD_PATTERN: `(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}`
};

export const ValidatorType = {
  required: 'REQUIRED',
  maxLength: 'MAX_LENGTH',
  minLength: 'MIN_LENGTH',
  textPattern: 'TEXT_PATTERN',
  numberPattern: 'NUMBER_PATTERN',
  alphaPattern: 'ALPHANUMERIC_PATTERN',
  negativeNumber: 'NEGATIVE_NUMBER'
};

export class NgModelValidator {
  param: any;
  type: Array<string> = [];
  maxLength: number = 35;
  minLength: number = 35;
}

export function ValidatorNgModel(payload: Array<NgModelValidator>) {
  return payload.some((validator: NgModelValidator) => {
    for (const type of validator.type) {
      let flag = false;
      switch (type) {
        case ValidatorType.required:
          flag = checkRequired(validator.param);
          break;
        case ValidatorType.maxLength:
          flag = checkMaxLength(validator.param, validator.maxLength);
          break;
        case ValidatorType.minLength:
          flag = checkMinLength(validator.param, validator.minLength);
          break;
        case ValidatorType.textPattern:
          flag = checkUnsignedTextPattern(validator.param);
          break;
        case ValidatorType.numberPattern:
          flag = checkNumberPattern(validator.param);
          break;
        case ValidatorType.alphaPattern:
          flag = checkAlphaPattern(validator.param);
          break;
        case ValidatorType.negativeNumber:
          flag = checkNegativeNumber(validator.param);
          break;
      }
      if (flag) {
        return true;
      }
    }
    return false;
  });
}

export function checkRequired(param: any) {
  if (!param) {
    return true;
  }
  if (typeof param === 'number') {
    return false;
  }
  if (typeof param === 'object') {
    return Object.keys(param).length === 0;
  }
  if (typeof param === 'string') {
    return param.replace(/\s\s+/g, ' ').trim().length === 0;
  }
  return param.length === 0;
}

export function checkFileRequired(param: any) {
  return param === null || !param;
}

export function checkMaxLength(param: any, length: number) {
  if (param) {
    return param.length > length;
  }
  return false;
}

export function checkEmail(email: string) {
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;

  const emailParts = email.split('@');

  if (emailParts.length !== 2) return false;

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64 || address.length > 255) return false;

  const domainParts = address.split('.');
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return emailRegex.test(email);
}

export function checkPattern(param: any, pattern: any) {
  if (param) {
    const regex = new RegExp(pattern);
    return !regex.test(param);
  }
  return false;
}

export function checkNumberPattern(param: any) {
  if (param) {
    const regex = new RegExp('^' + Pattern.NUMBER_PATTERN + '$');
    return !regex.test(param);
  }
  return false;
}

export function checkUnsignedTextPattern(param: any) {
  if (param) {
    const regex = new RegExp('^' + Pattern.TEXT_PATTERN + '$');
    return !regex.test(param);
  }
  return false;
}

export function checkAlphaPattern(param: any) {
  if (param) {
    const regex = new RegExp('^' + Pattern.ALPHANUMERIC_PATTERN + '$');
    return !regex.test(param);
  }
  return false;
}

export function checkMinLength(param: any, length: number) {
  if (!param || Object.keys(param).length === 0) {
    return true;
  }
  return param.length < length;
}

export function checkNegativeNumber(param: any) {
  if (isNaN(param)) {
    return true; // không phải loại số bắt validate
  }
  return param <= 0;
}

export function strEqual(str1: string, str2: string) {
  if (!str1 || !str2) {
    return false;
  }
  return str1.trim() === str2.trim();
}

export function startsWithByParam(str: string, lStr: string[]) {
  if (!str || !lStr) {
    return false;
  }
  return lStr.some(elem => str.startsWith(elem));
}

export function strEqualIgnoreCase(str1: string, str2: string) {
  if (!str1 || !str2) {
    return false;
  }
  return str1.trim().toUpperCase() === str2.trim().toUpperCase();
}

export function isObjEmpty(obj: any) {
  if (!obj) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

export function isEmptyObject(obj: any) {
  return !obj || Object.keys(obj).length === 0;
}

export function isDifferSearchData(objA: any, objB: any) {
  if (isEmptyObject(objA) && isEmptyObject(objB)) {
    return false;
  }
  if (
    (!isEmptyObject(objA) && isEmptyObject(objB)) ||
    (isEmptyObject(objA) && !isEmptyObject(objB))
  ) {
    return true;
  }
  return Object.keys(objA).some(keyInA => {
    return (
      objA[keyInA] != objB[keyInA] && keyInA !== 'used' && keyInA !== 'isReset'
    );
  });
}

export function isEmpty(str: any) {
  if (!str) {
    return true;
  }
  if (typeof str !== 'string') {
    str = str.toString();
  }
  return str.trim().length === 0;
}

export function appToString(str: any) {
  if (!str) {
    return '';
  }
  if (typeof str !== 'string') {
    str = str.toString();
  }
  return str.trim();
}

export function isInvalidParam(param: any) {
  if (!param) {
    return true;
  }
  return param?.trim().length === 0;
}

export function checkNumber(e: any) {
  e = e ? e : window.event;
  const charCode = e.which ? e.which : e.keyCode;
  return !(
    charCode > 31 &&
    charCode !== 190 &&
    charCode !== 188 &&
    (charCode < 48 || charCode > 57)
  );
}

export function isValidDate(date: any, isDatePicker: boolean = false) {
  if (isObjEmpty(date) || date.length === 0) {
    return true; // bỏ qua case check hợp lệ vì đã kiểm tra required
  }
  const dateString = !isDatePicker ? date : formatDateStrFromDatePicker(date);
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    return false;
  }
  // Parse the date parts to integers
  const parts = dateString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false;
  }
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29;
  }
  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

export function isValidDateWithoutRequired(
  date: any,
  isDatePicker: boolean = false
) {
  const dateString = !isDatePicker ? date : formatDateStrFromDatePicker(date);
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    return false;
  }
  // Parse the date parts to integers
  const parts = dateString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false;
  }
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29;
  }
  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

export function createDatePicker(dateString: string) {
  // Parse the date parts to integers
  const parts = dateString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  return {
    day,
    month,
    year
  };
}

// Password and consirm password match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function or(...arrCondition: any[]) {
  return arrCondition.some(elem => elem === true);
}

export function and(...arrCondition: any[]) {
  return arrCondition.every(elem => elem === true);
}

export function checkUUID(param: any) {
  return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(
    param
  );
}
