const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 
// Connection URL
const url = 'mongodb://localhost:27017'; 
// Database Name
const dbName = 'eysenck';

const state = {
  db: null
};

function connect (cb){
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    state.db = client.db(dbName);
    cb();
    
  });
};
//buscando mis documentos de mi websites
const findDocuments = function(db, callback) {
 
    const collection = db.collection('websites');

    collection.find({url: req.params.url}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("imprimir registros...");
      console.log(docs);
      callback(docs);
    });
  }

function get(){
  return state.db;
}

module.exports = {
  connect,
  get
}