import client from "../../../service/client";

export default {
  Query: {
    postAddressCodeDefineInfos: () =>
      client.postAddressCodeDefineInfo.findMany(),
    postAddressCodeDefineInfo: (_, { addressCode }) =>
      client.postAddressCodeDefineInfo.findUnique({ where: { addressCode } }),
  },
};