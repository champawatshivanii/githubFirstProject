let mongoose = require('mongoose');
let connectDB = async () => {
    let conn = await mongoose.connect('mongodb+srv://node_db:Node@cluster0.osfoa.mongodb.net/testing', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDb connected to ${conn.connection.host}`);
}
module.exports = connectDB;