"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFirebaseApp = void 0;
const app_1 = require("firebase/app");
const fs_1 = require("fs");
const initFirebaseApp = async (credentialFileDir) => {
    return new Promise((resolve, reject) => {
        if (!(0, fs_1.existsSync)(credentialFileDir))
            reject('Error : Credential file not found.');
        const firebaseConfig = JSON.parse((0, fs_1.readFileSync)(credentialFileDir, 'utf-8'));
        resolve((0, app_1.initializeApp)(firebaseConfig));
    });
};
exports.initFirebaseApp = initFirebaseApp;
