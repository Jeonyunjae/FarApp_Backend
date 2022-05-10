enum ERROR_CODE {
  NONE = 0,
  //createAccount
  CREATEACCOUNT_EXIST_USERINFO = 101,
  CREATEACCOUNT_EXIST_USERBASICINFO,
  CREATEACCOUNT_FAIL_INSERT_USERINFO,
  CREATEACCOUNT_FAIL_INSERT_BASICINFO,

  //editPassword
  EDITPASSWORD_FAIL_PASSWORD_UPDATE = 201,

  //editProfile
  FINDUSERCODE_FAIL_USERBASICINFO_UPDATE = 301,

  //findUserCode
  FINDUSERCODE_USER_NOT_FOUND = 401,

  //login
  LOGIN_USER_NOT_FOUND = 501,
  LOGIN_FAIL_INSERT_USERBASICINFO,
  LOGIN_INCORRECT_PASSWORD,

  //seeProfile
  SEEPROFILE_USER_NOT_FOUND = 601,

  //uploadProduct
  UPLOADPRODUCT_FAIL_INSERT_SELLINFO = 701,
}
export default ERROR_CODE;

class error {
  constructor() {}
}
