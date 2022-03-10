import client from "../client";
export default {
  Mutation: {
    createPositionAddressInfo: (_, { userCode, locLatitude, locLongtitude }) =>
      client.positionAddressInfo.create({
        data: {
          userCode,
          locLatitude,
          locLongtitude,
        },
      }),
    deletePositionAddressInfo: (_, { userCode }) =>
      client.positionAddressInfo.delete({ where: { userCode } }),
    updatePositionAddressInfo: (_, { userCode, locLatitude, locLongtitude }) =>
      client.positionAddressInfo.update({
        where: { userCode },
        data: {
          userCode,
          locLatitude,
          locLongtitude,
        },
      }),
  },
};