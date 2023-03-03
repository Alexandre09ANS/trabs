const mongoose = require("mongoose");
const banco =
  "mongodb://AlexandreANS:deco2004@ac-hnfbcha-shard-00-00.6fb7jjy.mongodb.net:27017,ac-hnfbcha-shard-00-01.6fb7jjy.mongodb.net:27017,ac-hnfbcha-shard-00-02.6fb7jjy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2h0gnx-shard-0&authSource=admin&retryWrites=true&w=majority";
// const banco = "mongodb://AlexandreANS:09092004@ac-hnfbcha-shard-00-00.6fb7jjy.mongodb.net:27017,ac-hnfbcha-shard-00-01.6fb7jjy.mongodb.net:27017,ac-hnfbcha-shard-00-02.6fb7jjy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2h0gnx-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
