const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Customer = require("../models/customermodel");
//const sendEmail = require("../utils/sendEmail");

exports.registerCustomer = async (req, res, next) => {

  const { name, email, phone } = req.body;
  
  let customer = await Customer.findOne({ email });
  if (customer) {
      return res.status(400).json({ success: false, message: "User already exists" });
   }


  const couponcode = Math.floor(Math.random() * 1000000);

   customer = await Customer.create({
    name,
    email,
    phone,
    couponcode,

  });
  res.status(201).json({succuess:true, customer});
};
