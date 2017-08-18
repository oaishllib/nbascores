var mongoose = require ('mongoose');
var db = mongoose.connection;
mongoose.promise = Promise;

mongoose.connect('mongodb://localhost/nbascores');


db.once('open', () => console.log(`connection successful ${db.host}:${db.port}`));
