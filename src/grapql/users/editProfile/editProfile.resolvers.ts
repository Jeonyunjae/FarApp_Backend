import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { hashPassword } from "../utils/hash";
import { protectedResolver } from "../utils/utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { userCode, password, phoneNumber, email },
        { loggedInUser }
      ) => {
        let uglyPassword = null;
        if (password) {
          uglyPassword = await hashPassword(password);
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
