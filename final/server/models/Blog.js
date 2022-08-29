const mongoose = require("mongoose");
const Category = require("./Category");
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  username: {
    type: String,
  },
  media: {
    type: String,
  },
  desc: {
    type: String,
  },
  react:{
      type:Number
  },
  author:{
    type:String
  },
  categoryId :{
      ref:Category,
      type: mongoose.Types.ObjectId
  }
  
},
{
    timestamps:true
}

);
module.exports = mongoose.model('blog' , BlogSchema)
