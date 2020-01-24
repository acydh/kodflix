const MongoClient = require('mongodb').MongoClient;
const url = process.env.NODE_ENV === 'production' ?
    process.env.DB_URL_PRD :
    process.env.DB_URL_DEV;

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