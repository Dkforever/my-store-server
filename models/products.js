const mongoose = require("mongoose");
const Admin = require("../models/admin");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxLength: [30, "Name must be less than 30 characters"],
  },

  price: {
    type: Number,
  },

  images: [
    {
      public_id: String,
      required: false,
      url: String,
    },
  ],
  color:[
    {
      type:String,
    }
  ],


  category:{
    type:String,
  },
  sub_category:{
    type:String,
  },
  sub_subcategory:{
    type:String,
  },
  description:{
    type:String,
  },

    modelList:[{
      modelname:{
      type: String,
      }
  }],
  stock:{
    type:Number,
    default:1,
  },

  //all model without model having id
  // modelList: [
  //   {
  //     type: String,
  //   },
  // ],

  // Id of Admin who created this product

  modelList:[{
    modelname:{
    type: String,
    }
}],



//all model without model having id
// modelList:[
//   {
    
//  type:String,
// }
// ],


       // Id of Admin who created this product admin
       
admin: {
  type: mongoose.Schema.ObjectId,
  ref: "Admin",
  required: true,
},


// admin: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Admin",
//   required: true,
// },
// admin: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Admin",
//   required: true,
// },

createdAt: {
  type: Date,
  default: Date.now,
},



  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("Product", productSchema);
