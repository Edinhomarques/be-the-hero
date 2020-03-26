const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async listSpecificForOng(req, res) {
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*')
    return res.json( incident )
  },
  
  

 
}