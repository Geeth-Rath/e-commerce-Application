const logger = require("../../logger");
const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(first_name, last_name, gender, email, password, number) 
                  values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("User created successfully");
        return callBack(null, results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,first_name,last_name,gender,email,number from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("user obtained successfully");
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select id,first_name,last_name,gender,email,number from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("users obtained successfully");
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("user obtained successfully");
        return callBack(null, results[0]);
      }
    );
  },
};
