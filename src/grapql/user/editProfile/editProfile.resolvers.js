import bcrypt from "bcrypt";
import service from "../../../service/service";

export default {
  Mutation: {
    editProfile: async (
      _,
      { userCode, password, phoneNumber, email }
    ) => {
      let uglyPassword = null;
      if (password) {
        uglyPassword = await bcrypt.hash(password, 10);
      }

      const updateUserInfo = await service.UserInfo.update(userCode, uglyPassword);

      if (uglyPassword !== updateUserInfo.password) {
        return {
          ok: false,
          error: "Fail UserInfo Update.",
        };
      }
      const updateUserBasicInfo = await service.UserBasicInfo.update(userCode, phoneNumber, email);

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
    },
  },
};