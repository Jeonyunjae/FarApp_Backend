import { createWriteStream } from "fs";
import { GraphQLUpload } from "graphql-upload";
import service from "../../../service/service";
import { hashPassword } from "../utils/hash";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (
  _,
  { userCode, password, phoneNumber, email, avatar },
  { loggedInUser }
) => {
  let avatarUrl = null;
  if (avatar) {
    const { filename, createReadStream } = await avatar.file;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    avatarUrl = `http://localhost:4000/static/${newFilename}`;
  }

  let uglyPassword = null;
  if (password) {
    uglyPassword = await hashPassword(password);
  }

  const updateUserInfo = await service.UserInfo.updatePassword(
    userCode,
    uglyPassword
  );

  if (uglyPassword !== updateUserInfo.password) {
    return {
      ok: false,
      error: "Fail UserInfo Update.",
    };
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
