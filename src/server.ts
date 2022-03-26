require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import * as express from "express";
import * as morgan from 'morgan';
import { getUser, protectedResolver } from "./grapql/users/utils/utils";
import { typeDefs, resolvers } from "./schema";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
      protectedResolver,
    };
  },
});

const PORT = process.env.PORT;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    },
  });

  await server.start();
  const app = express();
  app.use(graphqlUploadExpress());
  app.use(morgan("tiny"));
  server.applyMiddleware({ app });
  await new Promise((func: any) => app.listen({ port: PORT }, func));
  console.log(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`);
};
startServer();
