import client from "../../client";
export default {
  Mutation: {
    createRoom: (_, { id }) =>
      client.room.create({
        data: {
          id,
        },
      }),
    deleteRoom: (_, { id }) => client.room.delete({ where: { id } }),
    updateRoom: (_, { id }) =>
      client.room.update({ where: { id }, data: { id } }),
  },
};