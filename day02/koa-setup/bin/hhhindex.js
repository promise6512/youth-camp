const Koa = require("koa");

const Router = require("koa-router");

const app = new Koa();

const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello koa-setup-heihei";
});

app.listen(8080, () => {
  console.log("open server location:8080");
});
