import client from "../../client";


const userinfo = class UserInfo {

  // #region UserInfo Read
  userInfo(userCode:string) {
    console.log(userCode);
    return client.userInfo.findFirst({ where: { userCode } });
  }
  userInfos() {
    return client.userInfo.findMany();
  }
  //#endregion

  // #region UserInfo delete
  delete(userCode:string) {
    client.userInfo.delete({ where: { userCode } });
  }
  //#endregion

  // #region UserInfo create
  create(userCode:string, password:string) {
    return client.userInfo.create({
      data: {
        userCode,
        password,
      },
    });
  }
  //#endregion

  // #region UserInfo update
  update(userCode:string, password:string) {
    return client.userInfo.update({ where: { userCode }, data: { password } });
  }
}
//#endregion

export default userinfo;