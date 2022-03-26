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
  const { filename, createReadStream } = await avatar.file;
  const readStream = createReadStream();
  const writeStream = createWriteStream(process.cwd() + "/src/uploads/"+avatar.file.filename);
  readStream.pipe(writeStream);

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
