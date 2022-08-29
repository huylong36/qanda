const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    color:{
        type:String,
    },
    price:{
        type:String,
    },
    size:{
        type:String,
    },
    image:{
        type:String
    }
    
})
module.exports = mongoose.model('product' , ProductSchema) //Product : tên của table trong database