import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { readFileSync, existsSync } from 'fs';

export const initFirebaseApp = async (credentialFileDir: string) => {
  return new Promise<FirebaseApp>((resolve, reject) => {
    if (!existsSync(credentialFileDir))
      reject('Error : Credential file not found.');
    const firebaseConfig: FirebaseOptions = JSON.parse(
      readFileSync(credentialFileDir, 'utf-8')
    );
    resolve(initializeApp(firebaseConfig));
  });
};
