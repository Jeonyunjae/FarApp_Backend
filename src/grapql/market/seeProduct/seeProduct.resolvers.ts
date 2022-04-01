import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";

const resolvers: Resolvers = {
  Query: {
    seeProduct: (_, { userCode }, {loggedInUser}) =>
      service.UserInfo.userInfo(userCode)
  },
};

export default resolvers;