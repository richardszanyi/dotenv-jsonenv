# dotenv-jsonenv

> Load environment variables via a JSON file

```bash
npm install dotenv-jsonenv
```

Define your environment variables in `.env.json` in the root of your project (or wherever you start your node process):

```json
{
    "BASE_URL": "https://google.com",
    "env": {
      "public_api_key": "s@Mpl3_d@Ta",
      "OTHER_ENV_VARS": "otherEnvVars"
    }
}
```

Load your environment variables at the beginning of your program:

```js
require("dotenv-jsonenv")();

console.log(process.env.public_api_key) // => s@Mpl3_d@Ta
console.log(process.env.OTHER_ENV_VARS) // => otherEnvVars
```

_N.B. Existing keys in `process.env` will **not** be overwritten._

You can customize the location of your `.env.json` file by passing a `path` option:

```js
const dotenvJSON = require("dotenv-jsonenv");
dotenvJSON({ path: ".example.json"});
```
