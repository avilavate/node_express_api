const express = require('express');
const adminRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://avilavate:avilavate123@ps-library-mongodb-cluster-drotv.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    console.dir(err);
    const collection = client.db("LibraryDB").collection("books");
    // perform actions on the collection object
    // collection.insertMany([
    //     {
    //         title: 'War and pease',
    //         genre: 'Hostorical Fiction',
    //         Author: 'Lov Tolstoy',
    //         read: 'false',
    //     },
    //     {
    //         title: 'Time Machine',
    //         genre: 'Science Fiction',
    //         Author: 'H. W. Wales',
    //         read: 'false',
    //     },
    //     {
    //         title: 'The Intelligent Investor',
    //         genre: 'Finance',
    //         Author: 'Graham Bell',
    //         read: 'false',
    //     },
    //     {
    //         title: 'A Monk Who Sold His Ferrari',
    //         genre: 'Spirituality',
    //         Author: 'Deepak Chopra',
    //         read: 'false',
    //     }]
    // );
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