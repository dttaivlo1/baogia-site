export const AppDefinition = {
  NUMBER_OF_RETRY_API: 0,
  API_TIMEOUT: 150000, // 150s = 2m30s
  CACHE_RESPONSE_TIMEOUT: 5, // 5m
  TOASTR_TIMEOUT: 5000, // 5s
  DEFAULT_LIMIT: 10, // 5s
  PATTERN: {
    TEXT_PATTERN: `[0-9A-Za-z()---+="'/.,;:\\ ]*`,
    ALPHANUMERIC_PATTERN: `[0-9A-Za-z]*`,
    NUMBER_PATTERN: `\\d+`,
    DECIMAL_NUMBER: `[\\d]{1,20}([\\.|\\,]\\d{1,2})?`,
  },
  AUTHEN_CHECK_INTERVAL: 1000 * 60 * 15,
  PUBLIC_PAGE: ['/public/offer-confirmation'],
  APPVALIDATOR: {
    CAPACITY: 'MB',
    /*Kích thước file cho phép upload*/
    MAX_SIZE_FILE_UPLOAD: 50, // MB
    /*Kích thước file cho phép upload kho tài liệu*/
    MAX_SIZE_FILE_UPLOAD_ADMIN: 100, // MB
    /*Kích thước file cho phép upload*/
    MAX_SIZE_IMAGE_UPLOAD: 10, // MB
    /*độ dài tối da input code*/
    CODE_MAXLENGTH: 32,
    /*độ dài tối da input text*/
    TEXT_MAXLENGTH: 256,
    /*file chấp nhận trên fontend*/
    ACCEPT_EXCEL: '.xlsx, .xls',
    /*file chấp nhận trên fontend*/
    ACCEPT_IMAGE: 'image/*',
    /*file chấp nhận trên fontend*/
    ACCEPT_WORD: '.doc, .docx',
    ACCEPT_ADMIN_DOC:
      '.zip,.rar,.7zip,.xlsx,.xls,.doc,.docx,.ppt,.pptx,.pdf,image/*,.xml,text/plain',
    /*fortmat so nguyen(, => 10,000,000)*/
    PATTERN_NUMBER: '1.0',
    /*fortmat so le(, => 10,000,000.10)*/
    PATTERN_NUMBER_DECIMAL: '1.2-2',
    /*fortmat tien(10,000,000 đ)*/
    CURRENCY: 'VND',
    LOCALE: 'vi',
    MAX_CALL_BACK: 300,
    ACCEPT_OFFICE: '.xlsx,.xls,.doc,.docx,.ppt,.pptx,.pdf,image/*',
  },
};
