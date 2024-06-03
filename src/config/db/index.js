const mongoose = require('mongoose');

async function connect (){
    try {
        await mongoose.connect('mongodb://localhost:27017/data_1_dev');
        console.log('Connect Successfully!!');  
    } catch (error) {
        console.log('Connect Failed');
    }
}

module.exports = {connect};