import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { initFirebaseApp } from './initFirebaseApp';

export const getFirebaseAuthToken = async (
  credentialFileDir: string,
  email: string,
  password: string,
  console_mode = false
): Promise<void | string> => {
  const firebaseApp: FirebaseApp = await initFirebaseApp(
    credentialFileDir
  ).catch((error) => {
    throw error;
  });
  const firebaseAuth = getAuth(firebaseApp);

  const userCredential = await getFirebaseAuthEmailLoginResponce(
    firebaseAuth,
    email,
    password
  ).catch((error) => {
    throw error;
  });

  if (!(userCredential === undefined)) {
    const token = await userCredential.user.getIdToken(true);
    if (console_mode) console.log(token);
    else {
      return new Promise<string>((resolve) => {
        resolve(token);
      });
    }
  }
};

const getFirebaseAuthEmailLoginResponce = async (
  firebaseAuth: Auth,
  email: string,
  password: string
): Promise<UserCredential> => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password).catch(
    (error) => {
      if (error.code != 'auth/email-already-in-use') throw error.message;
    }
  );
  const userCredential = signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  ).catch((error) => {
    throw error.message;
  });
  return userCredential;
};
