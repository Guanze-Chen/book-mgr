const Router = require('@koa/router');
const moogoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {
    getBody
} = require('../../helper/utils/index');

const User = moogoose.model('User')
const InviteCode = moogoose.model('InviteCode')

const router = new Router({
    prefix: '/auth'
})

router.post('/register', async (ctx) => {
    const {
        account,
        password,
        inviteCode,
    } = getBody(ctx);



    if (account === "" || password === "") {
        ctx.body = {
            code: 0,
            msg: 'account or password is null',
            data: null
        };

        return;
    };

    const user = new User({
        account,
        password,
    });

    const one = await User.findOne({
        account
    }).exec();

    if (one) {
        ctx.body = {
            code: 0,
            msg: '已存在该用户',
        };

        return;

    }

    const res = await user.save();
    // 如果有邀请码且验证正确 没有被使用
    if (inviteCode !== '') {
        const resCode = await InviteCode.findOne({
            code: inviteCode
        }).exec();
        if (!resCode.user) {
            resCode.user = res._id;
            resCode.meta.updatedAt = new Date().getTime()
            await resCode.save();
        };

        ctx.body = {
            code: 1,
            msg: "Register Using InviteCode Successfully ",
        };

        return;


    }

    ctx.body = {
        code: 1,
        msg: "Register Successfully Without InviteCode",
    }

})


router.post('/login', async (ctx) => {
    const {
        account,
        password
    } = getBody(ctx);

    if (account === "" || password === "") {
        ctx.body = {
            code: 0,
            msg: 'account or password is null',
            data: null
        };

        return;
    };

    const one = await User.findOne({
        account,
    }).exec();

    if (!one) {
        ctx.body = {
            code: 0,
            msg: 'LOGIN FAILED NOT FOUND THIS ACCOUNT',
            data: null
        };

        return;
    }

    if (one.password != password) {
        ctx.body = {
            code: 0,
            msg: 'PASSWORD IS WRONG',
            data: null
        };

        return;
    }

    if (one.password === password) {
        const userInfo = {
            account: one.account,
            _id: one._id
        }
        ctx.body = {
            code: 1,
            msg: 'Login Successfully',
            data: {
                userInfo,
                token: jwt.sign({
                    userInfo
                }, 'book-mgr-scu')
            }
        };

        return;
    }

})

module.exports = router;