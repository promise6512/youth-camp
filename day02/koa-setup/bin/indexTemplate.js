import fs from "fs";
import ejs from "ejs";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path from "path";

export const getTemplate = (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(path.resolve(__dirname,"../template/index.ejs"),"utf-8");
  const code = ejs.render(template,{
    middleware:config.middleware,
    port:config.port
  });

  return prettier.format(code,{
    parser:"babel"
  })
}
//console.log(getTemplate())
//fs.mkdirSync("./template")