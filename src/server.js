const logger = require('koa-logger');
const router = require('koa-router')();
const Koa = require('koa');
const cors = require('@koa/cors');
const api = require('./api.js');

const port = 8080;
const app = new Koa();

app.use(cors());

app.use(logger());

router.get('/:number/:lastPosition', async ctx => {
  const { number, lastPosition } = ctx.params;
  const response = await api.getForestRankingData({ number, lastPosition });
  ctx.body = JSON.stringify(response);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
