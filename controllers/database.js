var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://shahpur2004:Allahpak1@ds153015.mlab.com:53015/heroku_j30dwghp';

module.exports.getAllRoutes =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {
        if(err) throw err;

        var order = db.collection('ORDERS');

        order.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllRoutes', {results: docs});

        });


        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function
