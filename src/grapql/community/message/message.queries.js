import client from "../../../service/client";

export default {
  Query: {
    messages: () => client.movie.findMany(),
    message: (_, { id }) => client.movie.findUnique({ where: { id } }),
  },
};