const conn = require("../conexion.js");

const index = (req, res, next) => {
	const db = conn.get();
	db.collection('websites').findOne({url:req.params.url})
	//db.findDocuments(db, function() {}) --->esto funcion esta definida en la app.js
		res.render('index', {
			 title:"buscando" , mensaje:db.collection('websites').findOne({url:req.params.url}),
			 busco: "algo"
			});
	};

const cuerpo = (req, res, next) => {
	res.render('cuerpo', {
		title: 'cuerpo',mensaje:"lista"
		//url:
		//content:
	});
};

const agregaProducto = (req, res) => {

	var newItem = req.body.newItem;
	console.log(newItem);

	items.push({
		id: items.length + 1,
		name: newItem
	});

	res.redirect('/products');
};

module.exports = {
  index,
  cuerpo,
  agregaProducto
};