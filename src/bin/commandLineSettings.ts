export const commandLineOptionDefinitions = [
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

export const commandLineUseageSections = [
  {
    header: 'firebase-auth-tokengen',
    content: 'firebase-auth-tokengen',
  },
  {
    header: 'Usage',
    content:
      '$ firebase-auth-tokengen --email test@example.com --password qwertyuiop --credential ./credential.json',
  },
  {
    header: 'Options',
    optionList: commandLineOptionDefinitions,
  },
];
