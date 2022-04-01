import { createWriteStream } from "fs";
import { GraphQLUpload } from "graphql-upload";
import service from "../../../service/service";
import { hashPassword } from "../utils/hash";
import { uploadServerFile } from "../utils/upload";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (
  _,
  { userCode, phoneNumber, email, avatar },
  { loggedInUser }
) => {
  let avatarUrl = null;
  if (avatar) {
    avatarUrl = await uploadServerFile(loggedInUser, avatar);
  }

  const updateUserBasicInfo = await service.UserBasicInfo.updateAll(
    loggedInUser.userCode,
    phoneNumber,
    email,
    avatarUrl,
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
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
