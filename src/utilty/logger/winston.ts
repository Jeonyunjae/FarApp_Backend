import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';

const logDir = 'logs';  // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf(info => {
  return `[${info.timestamp}]-[${info.level}]:${info.message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss:ms',
    }),
    logFormat,
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/info',
      filename: `%DATE%.info.log`,
      maxFiles: 30,  // 30일치 로그 파일 저장
      zippedArchive: true, 
    }),
    // error 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장 
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    // error 레벨 로그를 저장할 파일 설정
    // new winstonDaily({
    //   level: 'debug',
    //   datePattern: 'YYYY-MM-DD',
    //   dirname: logDir + '/debug',  // error.log 파일은 /logs/error 하위에 저장 
    //   filename: `%DATE%.debug.log`,
    //   maxFiles: 30,
    //   zippedArchive: true,
    // }),
  ],
});

// Production 환경이 아닌 경우(dev 등) 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),  // 색깔 넣어서 출력
      logFormat, //로그파일과 같ㅡㄴ 포ㅅ
      //winston.format.simple(),  // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    )
  }));
}

const Stream = {
    write: message => {
      logger.info(message)
    }
}

export { logger, Stream };