const mongoose = require('mongoose');
const validator = require("validator");


const customerSchema =  mongoose.Schema({
    name: {
        type: String,
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      phone: {
        type:Number,
       required: [true, "Please Enter Your Phone Number"],
        unique: true,
    
      },

      role: {
        type: String,
        default: "user",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

      couponcode:{
        type:String
      },

    //   userlocaiton:{
    //     "type" : "Point",
    //     "coordinates" : [
    //       -122.5,
    //       37.7
    //     ]
    //   }

    // or 

    // location: {
    //     type: {
    //       type: String, // Don't do `{ location: { type: String } }`
    //       enum: ['Point'], // 'location.type' must be 'Point'
    //       required: true
    //     },
    //     coordinates: {
    //       type: [Number],
    //       required: true
    //     }
    //   }
      
});

module.exports = mongoose.model("Customer", customerSchema);