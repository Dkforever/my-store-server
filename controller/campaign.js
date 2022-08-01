const Campaign  = require('../models/campaignModel');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");





// create New Campaign
exports.createCampaign = catchAsyncErrors(async (req, res, next) => {
  
 // const admin = {admin:req.admin._id}; // to add admin id in product
  const admin = {admin:req.admin._id}; 
  const { name, title, province, city } = req.body;
  let images = req.files.images.tempFilePath;

 // let mycloud = await cloudinary.v2.uploader.upload(images,{ folder: "product", });  // to upload file on Cloudinary
 let mycloud = await cloudinary.v2.uploader.upload(images,{ folder: "campaign", });  // to upload file on Cloudinary

   //fs.rmSync("./tmp", { recursive: true });  // this is to delete the file and TMP folder from server after uploading on Clodinary
 
   

  const campaign = await Campaign.create({
    name,
    title,
    province,
    city,
    
    admin:req.admin._id,
   // admin:req.admin.id,  // to add admin id in product
   
 
  images: {
    public_id:mycloud.public_id, // it will change to mycloud.public_id
    url: mycloud.secure_url, //  mycloud.secure_url
   },

    
  });
  res.status(201).json({succuess:true, campaign});
});





//find or Get list of all Campaign
  exports.getcampaignList = catchAsyncErrors(async(req,res,next)=>{
    const campaign = await Campaign.find()
    return res.status(200).json({campaign})
  });

  
//  get Campaign Details

exports.campaignDetail = catchAsyncErrors(async(req,res,next)=>{
    const campaign= await Campaign.findById(req.params.id)
    if(!campaign)
    {
        return next(new ErrorHandler("Campaign not Found",404))
    }
    return res.status(200).json({
        success:true,
        campaign });
  });


  // Update Campaign Details

  exports.updateCampaign = catchAsyncErrors(async (req, res, next) => {
    let campaign = await Campaign.findById(req.params.id);
  
    if (!campaign) {
      return next(new ErrorHander("Campaing  is not available", 404));
    }
  
   
  campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    campaign,
  });
});



// Delete Product

exports.deleteCampaign = catchAsyncErrors(async (req, res, next) => {
    const campaign = await Campaign.findById(req.params.id);
  
    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }
  
    await campaign.remove();
  
    res.status(200).json({
      success: true,
      message: "Campaign Deleted Successfully",
    });
  });



