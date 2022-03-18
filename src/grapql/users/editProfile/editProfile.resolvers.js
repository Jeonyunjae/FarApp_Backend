import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import service from "../../../service/service";
import { protectedResolver } from "../utils/utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { userCode, password, phoneNumber, email },
        { loggedInUser, protectResolver }
      ) => {
        protectResolver(loggedInUser);
        let uglyPassword = null;
        if (password) {
          uglyPassword = await bcrypt.hash(password, 10);
        }

        const updateUserInfo = await service.UserInfo.update(
          userCode,
          uglyPassword
        );

        if (uglyPassword !== updateUserInfo.password) {
          return {
            ok: false,
            error: "Fail UserInfo Update.",
          };
        }
        const updateUserBasicInfo = await service.UserBasicInfo.update(
          loggedInUser.userCode,
          phoneNumber,
          email
        );

        if (
          phoneNumber !== updateUserBasicInfo.phoneNumber ||
          email !== updateUserBasicInfo.email
        ) {
          return {
            ok: false,
            error: "Fail UserBasicInfo Update.",
          };
        }
        return {
          ok: true,
        };
      }
    ),
  },
};
