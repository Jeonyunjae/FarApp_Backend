import client from "../../../service/client";


const userinfo = class UserInfo {

  // #region UserInfo Read
  userInfo(userCode) {
    return client.userInfo.findFirst({ where: { userCode } });
  }
  userInfos() {
    return client.userInfo.findMany();
  }
  //#endregion

  // #region UserInfo delete
  delete(userCode) {
    client.userInfo.delete({ where: { userCode } });
  }
  //#endregion

  // #region UserInfo create
  create(userCode, password) {
    return client.userInfo.create({
      data: {
        userCode,
        password,
      },
    });
  }
  //#endregion

  // #region UserInfo update
  update(userCode, password) {
    client.userInfo.update({ where: { userCode }, data: { password } });
  }
}
//#endregion

export default userinfo;