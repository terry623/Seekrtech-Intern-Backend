const logger = require('koa-logger');
const router = require('koa-router')();
const Koa = require('koa');
const api = require('./api.js');

const port = 8080;
const app = new Koa();

app.use(logger());

router.get('/', async ctx => {
  const response = await api.getForestRankingData({
    number: 10,
    lastPosition: 0,
  });
  ctx.body = JSON.stringify(response);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
