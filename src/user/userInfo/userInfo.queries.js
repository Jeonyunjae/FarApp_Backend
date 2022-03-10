import client from "../../client";
export default {
  Query: {
    userInfos: () => client.userInfo.findMany(),
    userInfo: (_, { userCode }) => client.userInfo.findUnique({ where: { userCode } }),
  },
};