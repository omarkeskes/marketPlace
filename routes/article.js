var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://omar:omar@ds159926.mlab.com:59926/market_place', function(err) {
  if (err) { throw err; }
});

var articleSchema = Schema({
    _id: Schema.Types.ObjectId,
  titre   : String,
  description  : String,
  prix : Number,
  quantite :Number,
  date:Date,
  etat: String,
  marque :String,
  categorie :String,
  provenance: String,
  note : String,
  photo : String,
  type :String,
  acheteurs:[{ type: Schema.Types.ObjectId, ref: 'Member' }],
  vendeur : { type: Schema.Types.ObjectId, ref: 'Member' },
  commentaires:[{ type: Schema.Types.ObjectId, ref: 'Commentaire' }]

});

var memberSchema = Schema({
    _id: Schema.Types.ObjectId,
  name   : String,
  login  : String,
  mail : String,
  adresse: String,
  password :String,
  tel: String,
  achats:[{ type: Schema.Types.ObjectId, ref: 'Article' }],
  boutique : [{ type: Schema.Types.ObjectId, ref: 'Article' }]

});

var commentaireSchema= Schema({
    _id: Schema.Types.ObjectId,
    text:String,
    date:Date,
    member : { type: Schema.Types.ObjectId, ref: 'Member' },
    article: { type: Schema.Types.ObjectId, ref: 'Article' },

});
// Création du Model pour les commentaires
var Article  = mongoose.model('Article', articleSchema);
var Member  = mongoose.model('Member', memberSchema);
var Commentaire  = mongoose.model('Commentaire', commentaireSchema);

// Get All Tasks
router.get('/articles', function(req, res, next){
    Article.find(function(err, articles){
        if(err){
            res.send(err);
        }
        res.json(articles);
    });
});

router.get('/articles/:categorie', function(req, res, next){
    Article.find({categorie:req.params.categorie},function(err, articles){
        if(err){
            res.send(err);
        }
        res.json(articles);
    });
});

router.get('/boutique/articles/:login', function(req, res, next){
    Member.
    findOne({ login:req.params.login}).
    populate('boutique'). // only works if we pushed refs to children
    exec(function (err, member) {
            if (err) return handleError(err);
            res.json(member.boutique);
    });
});


router.get('/article/:id', function(req, res, next){
    Article.findOne({_id:req.params.id}).
                populate('commentaires'). // only works if we pushed refs to children
            exec(function (err, article) {
                    if (err) return handleError(err);
                    res.json(article);
            });;
});

router.post('/login',function(req,res,next){
    Member.findOne({login:req.body.login, password:req.body.password},function(err,member){
        if(err){
            res.send(err);
        }
        res.json(member);

    });
});

router.post('/article/add',function(req,res,next){
      var article = new Article({
            _id: new mongoose.Types.ObjectId(),
            titre: req.body.titre,
            description: req.body.description,
            quantite: parseInt(req.body.quantite),
            provenance: req.body.provenance,
            etat: req.body.etat,
            date:Date.now(),
            categorie: req.body.categorie,
            prix: parseInt(req.body.prix),
            marque: req.body.marque,
            photo: "model6.jpg",
            vendeur: req.body.vendeur   
  });
  article.save(function(err){
    if (err) return handleError(err);
    Member.findOne({_id:req.body.vendeur},function(err,member){
        member.boutique.push(article);
        member.save();
    });
    res.json(article);
  });
});

router.delete('/article/delete/:id',function(req,res,next){
     var memberId;
    Article.findOne({_id:req.params.id},function(err,article){
        Article.remove({_id:req.params.id},function(err){
            Member.
            findOne({ _id:article.vendeur}).
            populate('boutique'). // only works if we pushed refs to children
            exec(function (err, member) {
                    if (err) return handleError(err);
                    res.json(member.boutique);
            });
    });
    });
});

router.get('/commentaires/:id',function(req,res,next){
    Commentaire.find({article:req.params.id}).
    populate('member'). // only works if we pushed refs to children
    exec(function (err, commentaires) {
            if (err) return handleError(err);
            res.json(commentaires);
    });;
});

router.post('/commentaire/add',function(req,res,next){
      var commentaire = new Commentaire({
            _id: new mongoose.Types.ObjectId(),
            text: req.body.text,
            date:Date.now(),
            member: req.body.member,  
           article: req.body.article, 
  });
  commentaire.save(function(err){
    if (err) return handleError(err);
        res.json(commentaire);
  });
});

router.post('/achat/add',function(req,res,next){
    Article.findOne({_id:req.body.article},function(err,article){   
            Member.findOne({ _id:req.body.member},function(err,member){
                member.achats.push(article);
                member.save();
                res.json(member);
            }); 

    });
});

router.get('/achats/:id',function(req,res,next){
    Member.
    findOne({ _id:req.params.id}).
    populate('achats'). // only works if we pushed refs to children
    exec(function (err, member) {
            if (err) return handleError(err);
            res.json(member.achats);
    });
});


module.exports = router;