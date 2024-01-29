const Joi = require("joi");
const {
  create,
  getProductByUserId,
  getProducts,
} = require("./product.service");

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  Features: Joi.string().required(),
  type: Joi.string().required(),
  image: Joi.string().required(),
  stock: Joi.number().required(),
});

module.exports = {
  createProduct: (req, res) => {
    const body = req.body;
    console.log("body", body);

    const { error } = createProductSchema.validate(body);

    if (error) {
      return res.status(400).json({
        success: 0,
        message: error.details[0].message,
      });
    }

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getProductByUserId: (req, res) => {
    const id = req.params.id;
    getProductByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getProducts: (req, res) => {
    getProducts((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
