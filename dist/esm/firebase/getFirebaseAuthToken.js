import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
import { initFirebaseApp } from './initFirebaseApp';
export const getFirebaseAuthToken = async (credentialFileDir, email, password, console_mode = false) => {
    const firebaseApp = await initFirebaseApp(credentialFileDir).catch((error) => {
        throw error;
    });
    const firebaseAuth = getAuth(firebaseApp);
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
const getFirebaseAuthEmailLoginResponce = async (firebaseAuth, email, password) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password).catch((error) => {
        if (error.code != 'auth/email-already-in-use')
            throw error.message;
    });
    const userCredential = signInWithEmailAndPassword(firebaseAuth, email, password).catch((error) => {
        throw error.message;
    });
    return userCredential;
};
