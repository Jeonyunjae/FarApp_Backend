import client from "../../../service/client";

export default {
  Query: {
    buyInfos: () => client.buyInfo.findMany(),
    buyInfo: (_, { unique }) => client.buyInfo.findUnique({ where: { unique } }),
  },
};