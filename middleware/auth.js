const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

exports.isAuthenticatedAdmin = catchAsyncErrors(async (req, res, next) => {
 const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
 const decodedData = jwt.decode(token, process.env.JWT_SECRET);
  
 // const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.admin = await Admin.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.admin.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.admin.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
