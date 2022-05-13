import { UserInputError } from "apollo-server-express";
import LEVEL from "../type/level";
import Logger from "../logger/logger";
import ERROR_CODE from "../type/errorCode";

export const logManager = new class logManager {

  constructor(){

  }

  Error(ErrorCode: ERROR_CODE){
    Logger(LEVEL.ERROR, ErrorCode);
    throw new UserInputError(ErrorCode.toString(), { ErrorCode: ErrorCode });
  }

  Warn(ErrorCode: ERROR_CODE){
    Logger(LEVEL.WARN, ErrorCode.toString());
  }

  Info(msg: string){
    Logger(LEVEL.INFO, msg);
  }

  Http(ErrorCode: ERROR_CODE){
    Logger(LEVEL.HTTP, ErrorCode.toString());
  }
  Debug(ErrorCode: ERROR_CODE){
    Logger(LEVEL.DEBUG, ErrorCode.toString());
  }

  Help(ErrorCode: ERROR_CODE){
    Logger(LEVEL.HELP, ErrorCode.toString());
  }
};