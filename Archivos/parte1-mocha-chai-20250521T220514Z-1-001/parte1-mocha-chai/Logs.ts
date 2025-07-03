import { LoggerOptions, pino } from "pino";

function getLogger(level: string) {
    const config: LoggerOptions = {
        level: level,
        transport: {
            target: "pino-pretty",
            options: {
                colorize: false,
                destination: `logs/${level}Logs.log`,
                append: false,
                singleLine: true,
                ignore: "pid,hostname",
                translateTime: "SYS:HH:MM:ss.l",
                mkdir: "true",
            },
        },
    };
    return pino(config);
}

const loggerInfo = getLogger("info");
const loggerDebug = getLogger("debug");
const loggerTrace = getLogger("trace");

export const Logs = {
    trace(message: string) {
        loggerTrace.trace(message);
    },

    debug(message: string) {
        loggerTrace.debug(message);
        loggerDebug.debug(message);
    },

    info(message: string) {
        loggerTrace.info(` ${message}`);
        loggerDebug.info(` ${message}`);
        loggerInfo.info(` ${message}`);
    },

    warn(message: string) {
        loggerTrace.warn(message);
        loggerDebug.warn(message);
        loggerInfo.warn(message);
    },

    error(message: string) {
        loggerTrace.error(message);
        loggerDebug.error(message);
        loggerInfo.error(message);
    },

    fatal(message: string) {
        loggerTrace.fatal(message);
        loggerDebug.fatal(message);
        loggerInfo.fatal(message);
    },
};
