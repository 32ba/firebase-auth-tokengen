# firebase-auth-tokengen

English version is here → [README.md](README.md)

## インストール

```s
$ npm installfirebase-auth-tokengen
```

## 前準備

アプリを追加すると得られる`firebaseConfig`を JSON ファイルへ変換する

```javascript
const fs = require('fs');
const firebaseConfig = {
  apiKey: 'example',
  authDomain: 'example.firebaseapp.com',
  projectId: 'example',
  storageBucket: 'example.appspot.com',
  messagingSenderId: 'example',
  appId: 'example',
};

fs.writeFile('credential.json', JSON.stringify(firebaseConfig), (err) => {});
```

## 使い方

### CUI から

ヘルプを表示:

`firebaseauth-tokengen --help`

基本:

`firebaseauth-tokengen --email test@example.com --password qwertyuiop --credential ./credential.json`

以下のような省略入力も可能:

`firebaseauth-tokengen -e test@example.com -p qwertyuiop -c ./credential.json`

### スクリプトから

```typescript
import { getFirebaseAuthToken } from 'firebaseauth-tokengen';

let credential_path = 'YOUR_CREDENTIAL_PATH';
let email = 'example@example.com';
let password = 'P@ssw0rd';

getFirebaseAuthToken(credential_path, email, password)
  .then((token) => console.log(token))
  .catch((error) => console.error(error));
```

E-mail、Password、認証情報の JSON ファイルパスは必須オプション。
