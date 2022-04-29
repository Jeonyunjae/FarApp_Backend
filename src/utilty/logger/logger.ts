import LEVEL from "../type/level";
import { logger } from "./winston";

export const Logger = (level: any, message: any) => {
  switch (level) {
    case LEVEL.ERROR:
      logger.error(message);
      break;
    case LEVEL.WARN:
      logger.warn(message);
      break;
    case LEVEL.INFO:
      logger.info(message);
      break;
    case LEVEL.HTTP:
      logger.http(message);
      break;
    case LEVEL.DEBUG:
      logger.debug(message);
      break;
    case LEVEL.HELP:
      logger.help(message);
      break;
  }
};

export default Logger;
