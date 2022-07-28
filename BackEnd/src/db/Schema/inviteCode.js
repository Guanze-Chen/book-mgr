const moogoose = require('mongoose');
const { getMeta } = require('../helper');

const InviteCodeSchema = new moogoose.Schema({
    code: String,
    user: String,
    meta: getMeta()
});

moogoose.model('InviteCode', InviteCodeSchema);