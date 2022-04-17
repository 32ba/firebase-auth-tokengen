import { initializeApp } from 'firebase/app';
import { readFileSync, existsSync } from 'fs';
export const initFirebaseApp = async (credentialFileDir) => {
    return new Promise((resolve, reject) => {
        if (!existsSync(credentialFileDir))
            reject('Error : Credential file not found.');
        const firebaseConfig = JSON.parse(readFileSync(credentialFileDir, 'utf-8'));
        resolve(initializeApp(firebaseConfig));
    });
};
