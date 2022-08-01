const mongoose = require("mongoose");
const Admin = require("../models/admin");

const campaignSchema = mongoose.Schema({

 
  name: {
    type: String,
  },

  // which admin created this Campaign

  title: {
    type: String,
  },


  province: {
    type: String,
  },
  city: {
    type: String,
  },
  discount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  stocks: {
    type: Number,
  },


  images: [
    {
      public_id: String,
      required: false,
      url: String,
    },
  ],



  // brand: [
  //     {
  //         type: mongoose.Schema.ObjectId,
  //         ref: "Product",
  //        name:{
  //         type: String,
  //         },

  //     },
  // ],

  // model: [
  //     {
  //         modelid: {
  //             type: mongoose.Schema.ObjectId,
  //             ref: "Model",
  //             required: true,
  //         },
  //         name: {
  //             type: String,
  //         },
  //         discount: {
  //             type: Number,
  //         },
  //         price: {
  //             type: Number,
  //         },
  //         stocks: {
  //             type: Number,
  //         },

  //     }],

 
  
  
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", campaignSchema);
