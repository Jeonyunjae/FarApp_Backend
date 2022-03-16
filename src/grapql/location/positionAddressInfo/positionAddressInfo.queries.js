import client from "../../../service/client";

export default {
  Query: {
    positionAddressInfos: () => client.positionAddressInfo.findMany(),
    positionAddressInfo: (_, { userCode }) => client.positionAddressInfo.findUnique({ where: { userCode } }),
  },
};