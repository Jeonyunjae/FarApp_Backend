import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { comparePassword, hashPassword } from "../utils/hash";
require("dotenv").config();

export default {
  Mutation: {
    editPassword: async (_, { userCode, password }) => {

      // hash password
      const uglyPassword = await hashPassword(password);

      const userBaiscInfo = await service.UserInfo.updatePassword(userCode, uglyPassword)
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
