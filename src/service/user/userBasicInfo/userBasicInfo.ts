import client from "../../client";


const userbasicinfo = class UserBasicInfo {

  // #region UserInfo Read
  userBasicInfo(userCode) {
    return client.userBasicInfo.findUnique({ where: { userCode } });
  }
  userBasicInfos() {
    return client.userBasicInfo.findMany();
  }
  //#endregion

  // #region UserInfo delete
  delete(userCode) {
    client.userBasicInfo.delete({ where: { userCode } });
  }
  //#endregion

  // #region UserInfo create
  create(userCode, phoneNumber, email) {
    const infoResult = client.userBasicInfo.create({
      data: {
        userCode,
        phoneNumber,
        email,
      },
    });
    
    return infoResult;
  }
  //#endregion

  // #region UserInfo update
  update(userCode, phoneNumber, email) {
    return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber, email } });
  }
  updatePhoneNumber(userCode, phoneNumber) {
    return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber } });
  }
  updateEmail(userCode, email) {
    return client.userBasicInfo.update({ where: { userCode }, data: { email } });
  }
}
//#endregion

export default userbasicinfo;