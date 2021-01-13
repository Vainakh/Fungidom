const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/newdb`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', ()=> {
    console.log('Error connecting to mongo database')
});
db.once('open', ()=> {
    console.log('Success connecting to mongo database')
});

const inputSchema = mongoose.Schema({
    input: String,
});

const Model = new mongoose.model('db', inputSchema);

const save = (data, callback) => {
    let model = Model({
        input: data
    });

    model.save((err, res) => {
        if (err) {
            callback(err);
        } else {
            callback(null, res)
        }
    }); 
    console.log(`Step4 in, ${data} saved in database`) 
};

module.exports = {
save
};

