const logger = require("../../logger");
const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into product(name,price,Features,type,image,stock) 
                      values(?,?,?,?,?,?)`,
      [data.name, data.price, data.Features, data.type, data.image, data.stock],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("Product created successfully");
        return callBack(null, results);
      }
    );
  },
  getProductByUserId: (id, callBack) => {
    pool.query(
      `select id, name, price, Features,type,image,stock from product where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("Product obtained successfully");
        return callBack(null, results[0]);
      }
    );
  },
  getProducts: (callBack) => {
    pool.query(
      `select id,name, price, Features,type,image,stock from product`,
      [],
      (error, results, fields) => {
        if (error) {
          logger.error(error.message);
          callBack(error);
        }
        logger.info("Products obtained successfully");
        return callBack(null, results);
      }
    );
  },
};
