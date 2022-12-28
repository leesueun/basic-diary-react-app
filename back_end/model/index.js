const mongoose = require('mongoose');

const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    dbConnectString= 'mongodb://localhost:27017/daily_note';
    mongoose.connect(dbConnectString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true ,
    })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));
}

module.exports = connect;