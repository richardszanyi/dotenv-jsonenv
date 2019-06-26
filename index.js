const path = require("path");
const fs = require("fs");

module.exports = function dotenvJSON(options) {
  const jsonFile = (options && options.path) || ".env.json";

  const jsonString = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), jsonFile)), {
    encoding: "utf8"
  });

  try {
    const envConfig = jsonString.env;

    for (const key in envConfig) {
      process.env[key] = process.env[key] || envConfig[key];
    }
  } catch (err) {
    console.error(err);
  }
};
