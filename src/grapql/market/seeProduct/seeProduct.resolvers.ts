import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";

const resolvers: Resolvers = {
  Query: {
    seeProduct: (_, { unique }, {loggedInUser}) =>
      service.SellInfo.sellInfoToSeeProduct(unique)
  },
};

export default resolvers;