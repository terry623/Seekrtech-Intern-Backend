const logger = require('koa-logger');
const router = require('koa-router')();
const Koa = require('koa');

const port = 8080;
const app = new Koa();

app.use(logger());

router.get('/', ctx => {
  ctx.body = { test: 'fuck' };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
