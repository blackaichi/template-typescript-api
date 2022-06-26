import winston from "winston";
import { DEV } from "./envLoader";

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.label({ label: DEV ? "DEBUG" : "PRODUCTION" }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
  )
);

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = () => {
  return DEV ? "debug" : "info";
};

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: process.cwd() + "/logs/all.log" })
];

const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
  format
});

export { logger };
