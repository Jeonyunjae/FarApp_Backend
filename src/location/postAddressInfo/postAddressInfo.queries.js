import client from "../../client";
export default {
  Query: {
    postAddressInfos: () => client.postAddressInfo.findMany(),
    postAddressInfo: (_, { userCode }) => client.postAddressInfo.findUnique({ where: { userCode } }),
  },
};