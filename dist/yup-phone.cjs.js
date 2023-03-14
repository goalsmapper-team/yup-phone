'use strict';var Yup=require("yup"),gPhoneNumber=require("google-libphonenumber");function _interopDefaultLegacy(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function _interopNamespace(a){if(a&&a.__esModule)return a;var c=Object.create(null);a&&Object.keys(a).forEach(function(b){if("default"!==b){var d=Object.getOwnPropertyDescriptor(a,b);Object.defineProperty(c,b,d.get?d:{enumerable:!0,get:function(){return a[b]}})}});c["default"]=a;return Object.freeze(c)}
var Yup__namespace=_interopNamespace(Yup),gPhoneNumber__default=_interopDefaultLegacy(gPhoneNumber),phoneUtil=gPhoneNumber__default["default"].PhoneNumberUtil.getInstance(),YUP_PHONE_METHOD="phone",CLDR_REGION_CODE_SIZE=2,isValidCountryCode=function(a){return"string"===typeof a&&a.length===CLDR_REGION_CODE_SIZE};
Yup__namespace.addMethod(Yup__namespace.string,YUP_PHONE_METHOD,function(a,c,b){void 0===c&&(c=!1);void 0===b&&(b="");b="string"===typeof b&&b?b:isValidCountryCode(a)?"${path} must be a valid phone number for region "+a:"${path} must be a valid phone number.";return this.test(YUP_PHONE_METHOD,b,function(d){isValidCountryCode(a)||(a="IN",c=!1);if(void 0===d||""===d)return!0;try{var e=phoneUtil.parseAndKeepRawInput(d,a);if(!phoneUtil.isPossibleNumber(e))return!1;var f=phoneUtil.getRegionCodeForNumber(e);
return c?phoneUtil.isValidNumberForRegion(e,a):phoneUtil.isValidNumberForRegion(e,f)}catch(g){return!1}})})
//# sourceMappingURL=yup-phone.cjs.js.map
