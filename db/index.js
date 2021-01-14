const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/auth`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', ()=> {
    console.log('Error connecting to mongo database')
});
db.once('open', ()=> {
    console.log('Success connecting to mongo database')
});

const inputSchema = mongoose.Schema({
    username: String,
    password: String
});

const Model = new mongoose.model('db', inputSchema);

const save = (data, callback) => {
    let model = Model({
        username: data.username,
        password: data.password
    });

    model.save((err, res) => {
        console.log(res.username, res.password); 
        if (err) {
            callback(err);
        } else {
            callback(null, res)
        }
    }); 
    
};

module.exports = {
save
};

