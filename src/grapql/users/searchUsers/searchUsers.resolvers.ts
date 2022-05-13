import service from "../../../service/service";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (_, { keyword }, { loggedInUser }) => {
  return service.UserBasicInfo.userBasicInfoSearchUser(keyword);
};

export default {
  Query: {
    searchUsers: protectedResolver(resolverFn),
  },
};
