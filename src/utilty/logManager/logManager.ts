import { UserInputError } from "apollo-server-express";
import LEVEL from "../type/level";
import Logger from "../logger/logger";
import ERROR_CODE from "../type/errorCode";

export const logManager = (level: any, ErrorCode: ERROR_CODE, msg: any = null) => {
  
  switch (level) {
    case LEVEL.ERROR:
      Logger(level, ErrorCode);
      throw new UserInputError(ErrorCode.toString(), { ErrorCode: ErrorCode });
    case LEVEL.WARN:
      Logger(level, ErrorCode.toString());
      break;
    case LEVEL.INFO:
      Logger(level, msg);
      break;
    case LEVEL.HTTP:
      Logger(level, ErrorCode.toString());
      break;
    case LEVEL.DEBUG:
      Logger(level, ErrorCode.toString());
      break;
    case LEVEL.HELP:
      Logger(level, ErrorCode.toString());
      break;
  }
};

export default Error;
