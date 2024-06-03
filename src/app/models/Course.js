const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Course = new Schema ({
    name: {type: String, maxLenth: 255},
    des: {type: String, maxLenth: 600},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now} 
})

module.exports = mongoose.Schema('Course', Course);