const Router = require('@koa/router')
const moogoose = require('mongoose')

const User = moogoose.model('User')

const router = new Router({
    prefix: '/auth'
})

router.post('/register', async(ctx) => {
    const {account, password } = ctx.request.body;

    const user = new User({
        account,
        password,
    });

    const one = await User.findOne({
        account
    }).exec();

    if (one) {
        ctx.body =  {
            code: 0,
            msg:'已存在该用户',
            data: null
        }
        
    }





    const res = await user.save();

    ctx.body = {
        code: 1,
        msg: "Register Successfully",
    }

})

router.get('/login', async(ctx) => {
    ctx.body = "Login OK "
})

module.exports = router;