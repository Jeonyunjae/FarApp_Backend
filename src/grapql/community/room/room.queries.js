import client from "../../../service/client";

export default {
  Query: {
    rooms: () => client.room.findMany(),
    room: (_, { id }) => client.room.findUnique({ where: { id } }),
  },
};