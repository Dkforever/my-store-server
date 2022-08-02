const express = require("express");
const { registerAadmin, loginAdmin, adminLogout } = require("../controller/admincontroller");
const { createCampaign, getcampaignList, campaignDetail, updateCampaign, deleteCampaign } = require("../controller/campaign");
const { registerCustomer } = require("../controller/custome");
const { newOrder, getSingleOrder, myOrders, getallOrders, updateOrderStatus, deleteOrder } = require("../controller/orderController");
const {
  getProduct,
  createProduct,
  addModel,
  getallProducts,
  getallModel,
  getmodelname,
  deleteProduct,
  getProductDetail,
  allcategory,
} = require("../controller/productcontroller");
const {
  createstore,
  getallStore,
  getStoreDetail,
  updateStore,
  deleteStore,
} = require("../controller/storecontroller");
const { registerTechnician,loginTechnician, logouttechnician, deleteTechnician, updateTechnician } = require("../controller/technician");

const { isAuthenticatedAdmin } = require("../middleware/auth");

const router = express.Router();

//  product router 
router.route("/product").get(getProduct);
router.route("/product/new").post(createProduct);
router.route("/product/model").post(addModel);
router.route("/product/all").get(getallProducts);
router.route("/product/allcateogry").get(allcategory);
router.route("/product/detail/:id").get(getProductDetail);
router.route("/product/modelList").get(getallModel);
router.route("/product/modelname").get(getmodelname);
router.route("/product/deleteProduct/:id").delete(deleteProduct);


// admin
router.route("/product/register").post(registerAadmin);
router.route("/product/adminlogin").post(loginAdmin);
router.route("/product/adminlogout").post(adminLogout);



// Store API URL
router.route("/product/addstore").post(createstore);

router.route("/product/sotres").get(isAuthenticatedAdmin, getallStore);

router.route("/product/sotresdetail/:id").get(getStoreDetail);
router.route("/product/updateStore/:id").put(updateStore);
router.route("/product/deleteStore/:id").delete(deleteStore);

// technician API URL
router.route("/product/TechnicianRegister").post(registerTechnician);
router.route("/product/loginTechnician").post(loginTechnician);
router.route("/product/logoutTechnician").post(logouttechnician);
router.route("/product/updateTehnician/:id").put(updateTechnician);
router.route("/product/deleteTechnician/:id").delete(deleteTechnician);




// Campaign API URL
router.route("/product/addcampaign").post(isAuthenticatedAdmin,createCampaign);
router.route("/product/campaign").get(getcampaignList);
router.route("/product/campaigndetail/:id").get(campaignDetail);
router.route("/product/updateCampaign/:id").put(updateCampaign);
router.route("/product/deleteCampaign/:id").delete(deleteCampaign);


// Customer Api URL
router.route("/product/customerRegister").post(registerCustomer);

// order API URL
router.route("/product/neworder").post(newOrder);
router.route("/product/allorders").get(getallOrders);
router.route("/product/orders/:id").get(getSingleOrder);
router.route("/product/me").get(myOrders);

router.route("/product/order/:id").put(updateOrderStatus);
router.route("/product/order/:id").delete(deleteOrder);


module.exports = router;
