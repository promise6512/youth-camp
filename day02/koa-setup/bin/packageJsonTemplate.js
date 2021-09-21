import fs from "fs";
import ejs from "ejs";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path from "path";

export const getPackageJsonTemplate = (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(path.resolve(__dirname,"../template/package.ejs"),"utf-8");
  const code = ejs.render(template,{
    packageName:config.packageName,
    middleware:config.middleware
  });
  return prettier.format(code,{
    parser:"json"
  })

}
//console.log(getTemplate())
//fs.mkdirSync("./template")

