import { PrismaClient, UserInfo } from "@prisma/client";

type Context = {
    loggedInUser: UserInfo;
}

export type Resolver = (
  root: any,
  args: any,
  context: Context,
  info: any
) => any;

export type Resolvers = {
    [key:string]: {
        [key:string]: Resolver
    }
}