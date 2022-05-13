require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import * as express from "express";
import * as morgan from "morgan";
import { getUser, protectedResolver } from "./grapql/users/utils/utils";
import { typeDefs, resolvers } from "./schema";
import { Stream } from "./utilty/logger/winston";
import LEVEL from "./utilty/type/level";
import { logManager } from "./utilty/logManager/\blogManager";

const PORT = process.env.PORT;

const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
        introspection: true,
        playground: true,
      };
    },
  });

  await server.start();
  const app = express();
  app.use(graphqlUploadExpress());
  app.use(morgan('short', {Stream}));
  server.applyMiddleware({ app });
  app.use("/static", express.static("uploads"));
  await new Promise((func: any) => app.listen({ port: PORT }, func));
  logManager.Info(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`)
};
startServer();
