let mongoose = require('mongoose');
//put your database string  in line 4 to connect to database
let connectDB = async () => {
    let conn = await mongoose.connect('mongodb+srv://node_db:Node1@cluster1.osfoa.mongodb.net/testing', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDb connected to ${conn.connection.host}`);
}
module.exports = connectDB;
