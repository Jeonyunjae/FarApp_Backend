import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { comparePassword } from "../utils/hash";
require("dotenv").config();

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { userCode, password }) => {
      const userInfo = await service.UserInfo.userInfo(userCode)
      
      console.log(userInfo);
      if (!userInfo) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const passwordOk = await comparePassword(password, userInfo.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect password.",
        };
      }
      const token = await jwt.sign({ id: userInfo.userCode }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
