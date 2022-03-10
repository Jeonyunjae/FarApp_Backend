import client from "../../client";
export default {
  Query: {
    positionAddressInfos: () => client.positionAddressInfo.findMany(),
    positionAddressInfo: (_, { userCode }) => client.positionAddressInfo.findUnique({ where: { userCode } }),
  },
};