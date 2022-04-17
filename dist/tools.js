"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = exports.emailValidator = void 0;
const emailValidator = (email) => {
    return RegExp(/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
};
exports.emailValidator = emailValidator;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandling = (error, exit_process = false) => {
    console.error(error);
    if (exit_process)
        process.exit(1);
};
exports.errorHandling = errorHandling;
