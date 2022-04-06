import client from "../../client";


const like = class like {

  // #region UserInfo Read
  userBasicInfo(userCode) {
    return client.userBasicInfo.findUnique({ where: { userCode } });
  }

  userBasicInfoEmail(email) {
    return client.userBasicInfo.findUnique({ where: { email } });
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
  updateAll(userCode, phoneNumber, email, avatar) {
    return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber, email, avatar } });
  }
  updatePhoneNumber(userCode, phoneNumber) {
    return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber } });
  }
  updateEmail(userCode, email) {
    return client.userBasicInfo.update({ where: { userCode }, data: { email } });
  }
  updateAvatar(userCode, avatar) {
    return client.userBasicInfo.update({ where: { userCode }, data: { avatar } });
  }
}
//#endregion

export default like;