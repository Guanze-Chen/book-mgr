const moogoose = require('mongoose');
const { getMeta } = require('../helper');

const UserSchema = new moogoose.Schema({
    account: String,
    password: String,
    meta: getMeta()
});

moogoose.model('User', UserSchema);