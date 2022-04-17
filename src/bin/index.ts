#!/usr/bin/env node

import { getFirebaseAuthToken } from '../firebase/getFirebaseAuthToken';
import {
  commandLineOptionDefinitions,
  commandLineUseageSections,
} from './commandLineSettings';
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { errorHandling } from '../tools';

const options = commandLineArgs(commandLineOptionDefinitions);

if (options.help) {
  const usage = commandLineUsage(commandLineUseageSections);
  console.log(usage);
  process.exit(0);
} else if (
  options.credential == null ||
  options.email == null ||
  options.password == null
) {
  if (options.credential == null) {
    errorHandling('Error : Credential path is required.', false);
  }
  if (options.email == null) {
    errorHandling('Error : E-mail address is required.', false);
  }
  if (options.password == null) {
    errorHandling('Error : Password is required.', false);
  }
  process.exit(1);
}

getFirebaseAuthToken(
  options.credential,
  options.email,
  options.password,
  true
).catch((error) => errorHandling(error, true));
