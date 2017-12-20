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
  etat: String,
  marque :String,
  categorie :String,
  provenance: String,
  note : String,
  photo : String,
  type :String,
  vendeur : { type: Schema.Types.ObjectId, ref: 'Member' }

});

var memberSchema = Schema({
    _id: Schema.Types.ObjectId,
  name   : String,
  login  : String,
  mail : String,
  adresse: String,
  password :String,
  tel: String,
  boutique : [{ type: Schema.Types.ObjectId, ref: 'Article' }]

});
// Création du Model pour les commentaires
var Article  = mongoose.model('Article', articleSchema);
var Member  = mongoose.model('Member', memberSchema);

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
    Article.findOne({_id:req.params.id},function(err, article){
        if(err){
            res.send(err);
        }
        res.json(article);
    });
});


router.get('/tasks/:id',function(req,res,next){
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

router.post('/task',function(req,res,next){
    var task=req.body;
        if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task,function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    
    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;