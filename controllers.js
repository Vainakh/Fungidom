let {save} = require('./db/index.js');

const postData = (data, callback) => {
  save(data, (err, res) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, res);  
      }
  });
  console.log("Step3 in, controller here");
};

module.exports = {
    postData 
};
