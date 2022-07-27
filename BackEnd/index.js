const Koa = require('koa');
const KoaBody = require('koa-body');
const cors = require('@koa/cors')

const { connect } = require('./src/db/index');

const authRouter = require('./src/router/index');

const app = new Koa();


connect().then(() => {
    app.use(cors());
    app.use(KoaBody());
    authRouter(app);
    app.listen(3000, () => {
        console.log('Run Successfully')
    });
    
})


