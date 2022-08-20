import client from "../../client";


class UserInfo {

  userInfo(usercode:string) {
    return client.userinfo.findFirst({ where: { usercode } });
  }

  userInfos() {
    return client.userinfo.findMany();
  }

  

  delete(usercode:string) {
    client.userinfo.delete({ where: { usercode } });
  }

  create(usercode:string, password:string) {
    return client.userinfo.create({
      data: {
        usercode,
        password,
      },
    });
  }

  updatePassword(usercode:string, password:string) {
    return client.userinfo.update({ where: { usercode }, data: { password } });
  }
}

export default UserInfo;