"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandLineUseageSections = exports.commandLineOptionDefinitions = void 0;
exports.commandLineOptionDefinitions = [
    {
        name: 'credential',
        alias: 'c',
        type: String,
        description: 'Credential json path',
        typeLabel: '{underline credential.json}',
        defaultValue: null,
    },
    {
        name: 'email',
        alias: 'e',
        type: String,
        description: 'E-mail address',
        typeLabel: '{underline test@example.com}',
        defaultValue: null,
    },
    {
        name: 'password',
        alias: 'p',
        type: String,
        description: 'Password',
        defaultValue: null,
    },
    { name: 'help', alias: 'h', type: Boolean, description: 'Show help' },
];
exports.commandLineUseageSections = [
    {
        header: 'firebase-auth-tokengen',
        content: 'firebase-auth-tokengen',
    },
    {
        header: 'Usage',
        content: '$ firebase-auth-tokengen --email test@example.com --password qwertyuiop --credential ./credential.json',
    },
    {
        header: 'Options',
        optionList: exports.commandLineOptionDefinitions,
    },
];
