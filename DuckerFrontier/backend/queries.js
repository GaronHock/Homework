const pool = require("./pgdb");

const getAllInfo = (request, response) => {
  pool.query("SELECT * FROM attempt_world_bank_sample", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


module.exports = {
  getAllInfo
};