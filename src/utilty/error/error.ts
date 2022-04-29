import { UserInputError } from "apollo-server-express";
import LEVEL from "../type/level";
import Logger from "../logger/logger";

export const logManager = (
  level: any = 6,
  message: any = "",
  ErrorCode: any = 0
) => {
  try {
  } catch (error) {}

  switch (level) {
    case LEVEL.ERROR:
      Logger(level, message);
      throw new UserInputError(message, {ErrorCode:ErrorCode});
    case LEVEL.WARN:
      Logger(level, message);
      break;
    case LEVEL.INFO:
      Logger(level, message);
      break;
    case LEVEL.HTTP:
      Logger(level, message);
      break;
    case LEVEL.DEBUG:
      Logger(level, message);
      break;
    case LEVEL.HELP:
      Logger(level, `Error:${ErrorCode}-`+message);
      break;
  }
};

export default Error;
