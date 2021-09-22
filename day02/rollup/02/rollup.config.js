import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import {resolve} from " @rollup/plugin-node-resolve";
export default {
  input: "./index.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      //压缩导出结果
      plugins: [terser()]
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs"
    }
  ],
  plugins: [json(),resolve()]
}