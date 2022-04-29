import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { comparePassword } from "../utils/hash";
require("dotenv").config();

export default {
  Query: {
    findUserCode: async (_, { email }) => {
      const userBaiscInfo = await service.UserBasicInfo.userBasicInfoEmail(email)
      if (!userBaiscInfo) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      return {
        ok: true,
        id: userBaiscInfo.userCode,
      };
    },
  },
};
