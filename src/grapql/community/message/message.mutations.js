import client from "../../../service/client";

export default {
  Mutation: {
    createMessage: (_, { id, payload, userCode, roomId }) =>
      client.message.create({
        data: {
          id,
          payload,
          userCode,
          roomId,
        },
      }),
    deleteMessage: (_, { id }) => client.message.delete({ where: { id } }),
    updateMessage: (_, { id, year }) =>
      client.message.update({ where: { id }, data: { year } }),
  },
};