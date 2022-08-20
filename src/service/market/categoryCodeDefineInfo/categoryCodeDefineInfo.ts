import client from "../../client";


const categoryCodeDefineInfo = class ㅊategoryCodeDefineInfo {

  // #region UserInfo Read
  userBasicInfo(usercode) {
    return client.userbasicinfos.findUnique({ where: { usercode } });
  }

  userBasicInfoEmail(email) {
    return client.userbasicinfos.findUnique({ where: { email } });
  }

  userBasicInfos() {
    return client.userbasicinfos.findMany();
  }
  //#endregion

  // #region UserInfo delete
  delete(usercode) {
    client.userbasicinfos.delete({ where: { usercode } });
  }
  //#endregion

  // #region UserInfo create
  create(usercode, phonenumber, email) {
    const infoResult = client.userbasicinfos.create({
      data: {
        usercode,
        phonenumber,
        email,
      },
    });
    
    return infoResult;
  }
  //#endregion

  // #region UserInfo update
  updateAll(usercode, phonenumber, email, avatar) {
    return client.userbasicinfos.update({ where: { usercode }, data: { phonenumber, email, avatar } });
  }
  updatePhoneNumber(usercode, phonenumber) {
    return client.userbasicinfos.update({ where: { usercode }, data: { phonenumber } });
  }
  updateEmail(usercode, email) {
    return client.userbasicinfos.update({ where: { usercode }, data: { email } });
  }
  updateAvatar(usercode, avatar) {
    return client.userbasicinfos.update({ where: { usercode }, data: { avatar } });
  }
}
//#endregion

export default categoryCodeDefineInfo;