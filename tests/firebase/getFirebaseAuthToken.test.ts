import { getFirebaseAuthToken } from '../../src/firebase/getFirebaseAuthToken';

let args = {
  credential: '',
  email: '',
  password: '',
};

describe('Test : getFirebaseAuthToken() - Normal', () => {
  it('Normal scenario', () => {
    args = {
      credential:
        process.env.CREDENTIAL_PATH == undefined
          ? ''
          : process.env.CREDENTIAL_PATH,
      email: 'example@example.com',
      password: 'P@ssw0rd',
    };
    return expect(
      getFirebaseAuthToken(args.credential, args.email, args.password)
    ).resolves.toMatch(/^ey/);
  });
  it('Normal scenario(Console mode)', async () => {
    args = {
      credential:
        process.env.CREDENTIAL_PATH == undefined
          ? ''
          : process.env.CREDENTIAL_PATH,
      email: 'example@example.com',
      password: 'P@ssw0rd',
    };
    const log = jest.spyOn(console, 'log').mockReturnValue();
    await getFirebaseAuthToken(
      args.credential,
      args.email,
      args.password,
      true
    );
    expect(log).toHaveBeenCalledWith(expect.stringMatching(/^ey/));
    log.mockRestore();
  });
  it('Exception scenario : Invalid credential file', () => {
    args = {
      credential: '',
      email: 'example@example.com',
      password: 'P@ssw0rd',
    };
    return expect(
      getFirebaseAuthToken(args.credential, args.email, args.password)
    ).rejects.toBe('Error : Credential file not found.');
  });
  it('Exception scenario : Invalid email (invaild address)', () => {
    args = {
      credential:
        process.env.CREDENTIAL_PATH == undefined
          ? ''
          : process.env.CREDENTIAL_PATH,
      email: 'example',
      password: 'P@ssw0rd',
    };
    return expect(
      getFirebaseAuthToken(args.credential, args.email, args.password)
    ).rejects.toMatch('Firebase: Error (auth/invalid-email).');
  });
  it('Exception scenario : Invalid password (weak password)', () => {
    args = {
      credential:
        process.env.CREDENTIAL_PATH == undefined
          ? ''
          : process.env.CREDENTIAL_PATH,
      email: 'example@example.com',
      password: '0000',
    };
    return expect(
      getFirebaseAuthToken(args.credential, args.email, args.password)
    ).rejects.toMatch(
      'Firebase: Password should be at least 6 characters (auth/weak-password).'
    );
  });
  it('Exception scenario : Invalid password (wrong password)', () => {
    args = {
      credential:
        process.env.CREDENTIAL_PATH == undefined
          ? ''
          : process.env.CREDENTIAL_PATH,
      email: 'example@example.com',
      password: 'wrongP@ssw0rd',
    };
    return expect(
      getFirebaseAuthToken(args.credential, args.email, args.password)
    ).rejects.toBe('Firebase: Error (auth/wrong-password).');
  });
});
