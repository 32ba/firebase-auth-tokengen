#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFirebaseAuthToken_1 = require("../firebase/getFirebaseAuthToken");
const commandLineSettings_1 = require("./commandLineSettings");
const command_line_args_1 = __importDefault(require("command-line-args"));
const command_line_usage_1 = __importDefault(require("command-line-usage"));
const tools_1 = require("../tools");
const options = (0, command_line_args_1.default)(commandLineSettings_1.commandLineOptionDefinitions);
if (options.help) {
    const usage = (0, command_line_usage_1.default)(commandLineSettings_1.commandLineUseageSections);
    console.log(usage);
    process.exit(0);
}
else if (options.credential == null ||
    options.email == null ||
    options.password == null) {
    if (options.credential == null) {
        (0, tools_1.errorHandling)('Error : Credential path is required.', false);
    }
    if (options.email == null) {
        (0, tools_1.errorHandling)('Error : E-mail address is required.', false);
    }
    if (options.password == null) {
        (0, tools_1.errorHandling)('Error : Password is required.', false);
    }
    process.exit(1);
}
(0, getFirebaseAuthToken_1.getFirebaseAuthToken)(options.credential, options.email, options.password, true).catch((error) => (0, tools_1.errorHandling)(error, true));
