import client from "../../client";
export default {
  Query: {
    userBasicInfos: () => client.userBasicInfo.findMany(),
    userBasicInfo: (_, { userCode }) => client.userBasicInfo.findUnique({ where: { userCode } }),
  },
};