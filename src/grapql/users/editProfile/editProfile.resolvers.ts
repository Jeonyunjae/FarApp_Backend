import { createWriteStream } from "fs";
import { GraphQLUpload } from "graphql-upload";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { returnValue } from "../../shared/shared";
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
    logManager.Error(ERROR_CODE.FINDUSERCODE_FAIL_USERBASICINFO_UPDATE);
  }
  return returnValue(true, userCode);
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
