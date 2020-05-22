const pool = require("./pgdb");

const getAllInfo = (request, response) => {
  pool.query("SELECT * FROM sorted_alphabet_final_world_bank_sample", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getInfoById = (request, response) => {
  const id = parseInt(request.params.id);
  console.log(id)
  pool.query("SELECT * FROM sorted_alphabet_final_world_bank_sample WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


module.exports = {
  getAllInfo,
  getInfoById
};