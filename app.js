const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
    ctx.body = '1'
})

app.listen(3000, () => {
    console.log('This server is start!')
})