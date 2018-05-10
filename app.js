const connect=require('./conexion.js').connect;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./rutas/index.js');

// settings
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// rutas
app.use(routes);

app.get('*',(req,res)=>{
  res.end("pagina no encontrada");
  });

connect(()=>{
  app.listen(3000, () => {console.log('Ejemplo abrir en el puerto 3000!');
  });
});

/*const insertDocuments = function(db, callback) {

//Obtener la colección de documentos
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
*/