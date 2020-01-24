const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

function connect(dbName) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                reject(err)
            } else {
                const dbo = client.db(dbName)
                resolve(dbo)
            }
        })
    })
}


module.exports = { connect };