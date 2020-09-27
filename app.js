const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
    ctx.body = '01998025'
})

app.listen(3000, () => {
    console.log('This server is start!')
})