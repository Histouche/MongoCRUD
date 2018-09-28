
var express = require('express');
var app = express();
var arbreRoutes = express.Router();

// Require Item model in our routes module
var Arbre = require('../models/Arbre');

// Defined store route
arbreRoutes.route('/add').post(function (req, res) {
  var arbre = new Arbre(req.body);
   arbre.save()
    .then(item => {
    res.status(200).json({'arbre': 'Arbre added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
arbreRoutes.route('/').get(function (req, res) {
   Arbre.find(function (err, arbres){
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  }).limit(100);
});

// get arbres by filtre
arbreRoutes.route('/filtre/:genre/:espece/:arrondissement/:emplacement').get(function(req, res){
  Arbre.find( { "fields.genre" : req.params.genre, "fields.espece" : req.params.espece, "fields.arrondissement" : req.params.arrondissement, "fields.typeemplacement" : req.params.emplacement},function(err, arbres){
    console.log(req.params.a)
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  }).limit(200);
});

// get especes
arbreRoutes.route('/especes').get(function(req, res){
  Arbre.aggregate([{$group : {_id : "$fields.espece",}}] ,function(err, arbres){
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  })
});

// get genres
arbreRoutes.route('/genre').get(function(req, res){
  Arbre.aggregate([{$group : {_id : "$fields.genre",}}] ,function(err, arbres){
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  })
});
// get arrondissements
arbreRoutes.route('/arrondissement').get(function(req, res){
  Arbre.aggregate([{$group : {_id : "$fields.arrondissement"}}] ,function(err, arbres){
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  })
});

// get type emplacement
arbreRoutes.route('/emplacement').get(function(req, res){
  Arbre.aggregate([{$group : {_id : "$fields.typeemplacement"}}] ,function(err, arbres){
    if(err){
      console.log(err);
    }
    else {
      res.json(arbres);
    }
  })
});

// Defined edit route
arbreRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Arbre.findById(id, function (err, arbre){
      res.json(arbre);
  });
});

//  Defined update route
arbreRoutes.route('/update/:id').post(function (req, res) {
   Arbre.findById(req.params.id, function(err, arbre) {
    if (!arbre)
      return next(new Error('Could not load Document'));
    else {
      arbre.name = req.body.name;
      arbre.price = req.body.price;

      arbre.save().then(arbre => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
arbreRoutes.route('/delete/:id').get(function (req, res) {
   Arbre.findByIdAndRemove({_id: req.params.id}, function(err, arbre){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = arbreRoutes;