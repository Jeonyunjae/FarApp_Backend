import service from "../../../service/service";

export default {
  Query: {
    seeProfile: (_, { userCode }) =>
      service.UserInfo.userInfo(userCode)
  },
};