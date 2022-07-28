const Router = require('@koa/router');
const moogoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const InviteCode = moogoose.model('InviteCode')

const router = new Router({
    prefix: '/invite'
})

router.get('/add', async (ctx) => {
    const code = new InviteCode({
        code: uuidv4(),
        user: '',
    });

    const saved = await code.save();

    ctx.body = {
        code: 1,
        data: saved,
        msg: 'InviteCode created Successfully'
    }
    
})



module.exports = router;