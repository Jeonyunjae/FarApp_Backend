import client from "../../client";


class UserInfo {

  userInfo(userCode:string) {
    return client.userInfo.findFirst({ where: { userCode } });
  }

  userInfos() {
    return client.userInfo.findMany();
  }

  

  delete(userCode:string) {
    client.userInfo.delete({ where: { userCode } });
  }

  create(userCode:string, password:string) {
    return client.userInfo.create({
      data: {
        userCode,
        password,
      },
    });
  }

  updatePassword(userCode:string, password:string) {
    return client.userInfo.update({ where: { userCode }, data: { password } });
  }
}

export default UserInfo;