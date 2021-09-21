export const createConfig = (answer) => {
  return {
    packageName:answer.packageName,
    port:answer.port,
    middleware: {
      router:answer.middleware.indexOf("koaRouter") !== -1,
      static:answer.middleware.indexOf("koaStatic") !== -1
    }
  }
}