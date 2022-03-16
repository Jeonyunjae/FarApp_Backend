import service from "../../../service/service";

export default {
  Query: {
    userInfos: () => service.UserInfo.userInfos(),
    userInfo: (_, { userCode }) => service.UserInfo.userInfo(userCode),
  },
};