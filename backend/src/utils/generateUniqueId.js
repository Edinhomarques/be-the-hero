const crypto = require('crypto');
/** teste unitario se aplica a esse tipo de função isolada */
function generateUniqueId(){
  return crypto.randomBytes(4).toString('HEX');

}

module.exports = generateUniqueId