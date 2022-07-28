require('./Schema/User')
require('./Schema/inviteCode')

const mongoose = require('mongoose')

const connectionUrl = 'mongodb+srv://GUANZE:2018060708Bl%40@guanzemongo.ucm6b.mongodb.net/book-mgr?authSource=admin&replicaSet=atlas-xt9c1z-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'

const connect = () => {

    return new Promise((resolve) => {
        mongoose.connect(connectionUrl);

        mongoose.connection.on('open', () => {
            console.log('Link Successfully');
            
            resolve();
        });

    })
   

}

module.exports = {
    connect
}


