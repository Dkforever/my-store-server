const mongoose = require("mongoose");
const Admin = require("../models/admin");

const campaignSchema = mongoose.Schema({

    // admin: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Admin",
    //     required: true,
    //   },
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
          public_id:  String,
          required:false,
          url: String,
          
        },
      ],



  
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

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Campaign", campaignSchema);
