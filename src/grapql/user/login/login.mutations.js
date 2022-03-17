import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import service from "../../../service/service";
require("dotenv").config();
export default {
  Mutation: {
    login: async (_, { userCode, password }) => {
      const user = await service.UserInfo.userInfo(userCode)
      if (!user) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect password.",
        };
      }
      const token = await jwt.sign({ id: user.userCode }, process.env.SERECT_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
