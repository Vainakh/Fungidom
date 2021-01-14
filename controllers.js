let {save} = require('./db/index.js');

const postData = (data, callback) => {
  save(data, (err, res) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, res);  
      }
  });
};

module.exports = {
    postData 
};
