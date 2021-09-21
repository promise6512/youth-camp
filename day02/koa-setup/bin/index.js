#!/usr/bin/env node

//esm

import fs from "fs";
import execa from "execa";
import {getTemplate} from "./indexTemplate.js"
import { getPackageJsonTemplate } from "./packageJsonTemplate.js";
import { answer } from "./question/index.js";
import {createConfig} from "./config.js";
import path from "path";
import process from "process"

const config = createConfig(answer)

//核心：自动化
//1.创建文件夹(项目名)
fs.mkdirSync(config.packageName);
//2.创建index.js
fs.writeFileSync(`${getRootPath()}/index.js`,getTemplate(config))
//3.创建了 package.json
fs.writeFileSync(`${getRootPath()}/package.json`,getPackageJsonTemplate(config))
//4.安装了依赖
//execa("yarn",{cwd:"./haha",stdio:[2,2,2]})

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName)
}