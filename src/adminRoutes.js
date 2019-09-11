const express = require('express');
const adminRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://avilavate:avilavate123@ps-library-mongodb-cluster-drotv.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    console.dir(err);
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    collection.insert({ 'deviceId': 1, 'name': 'test device' });
    collection.findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
    });
});


function adminRouterFunction(nav) {
    adminRouter.route('/').get((req, res) => {
        res.send('Inserting book!!');
    });
    return adminRouter;
}

module.exports = adminRouterFunction;