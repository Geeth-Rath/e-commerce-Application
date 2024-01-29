const router = require("express").Router();
const {
  createProduct,
  getProducts,
  getProductByUserId,
} = require("./product.controller");

router.post("/",  createProduct);
router.get("/",  getProducts);
router.get("/product/:id",  getProductByUserId);

module.exports = router;
