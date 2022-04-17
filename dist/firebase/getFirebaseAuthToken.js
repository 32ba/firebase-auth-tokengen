"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirebaseAuthToken = void 0;
const auth_1 = require("firebase/auth");
const initFirebaseApp_1 = require("./initFirebaseApp");
const getFirebaseAuthToken = async (credentialFileDir, email, password, console_mode = false) => {
    const firebaseApp = await (0, initFirebaseApp_1.initFirebaseApp)(credentialFileDir).catch((error) => {
        throw error;
    });
    const firebaseAuth = (0, auth_1.getAuth)(firebaseApp);
    const userCredential = await getFirebaseAuthEmailLoginResponce(firebaseAuth, email, password).catch((error) => {
        throw error;
    });
    if (!(userCredential === undefined)) {
        const token = await userCredential.user.getIdToken(true);
        if (console_mode)
            console.log(token);
        else {
            return new Promise((resolve) => {
                resolve(token);
            });
        }
    }
};
exports.getFirebaseAuthToken = getFirebaseAuthToken;
const getFirebaseAuthEmailLoginResponce = async (firebaseAuth, email, password) => {
    await (0, auth_1.createUserWithEmailAndPassword)(firebaseAuth, email, password).catch((error) => {
        if (error.code != 'auth/email-already-in-use')
            throw error.message;
    });
    const userCredential = (0, auth_1.signInWithEmailAndPassword)(firebaseAuth, email, password).catch((error) => {
        throw error.message;
    });
    return userCredential;
};
