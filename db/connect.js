const mongoose = require('mongoose');


const connectToDb = (url) => {
    mongoose.connect(url)
    .then(() => console.log('Connected to db'))
    .catch((error) =>{
        console.log(`failed to connect with error ${error}`)
    });
}

module.exports = connectToDb;
