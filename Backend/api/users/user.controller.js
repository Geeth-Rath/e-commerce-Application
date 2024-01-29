const Joi = require("joi");
const {
  create,
  getUserByUserId,
  getUsers,
  getUserByUserEmail,
} = require("./user.service");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  gender: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  number: Joi.number().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  createUser: (req, res) => {



    const { error } = createUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: 0,
        message: error.details[0].message,
      });
    }

    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      req.session.user = {
        id: results.insertId,
        email: body.email,
      };

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
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
  getUsers: (req, res) => {
    getUsers((err, results) => {
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
  refreshtoken: (req, res) => {
    const { error } = loginUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: 0,
        message: error.details[0].message,
      });
    }

    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",

        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        req.session.user = {
          id: results.id,
          email: results.email,
        };
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error destroying session",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Logout successful",
      });
    });
  },
};
