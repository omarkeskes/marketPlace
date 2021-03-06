var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
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
  date:Date,
  provenance: String,
  note : String,
  photo : String,
  type :String,
  vendeur : { type: Schema.Types.ObjectId, ref: 'Member' }

});

var memberSchema = Schema({
    _id: Schema.Types.ObjectId,
  name   : String,
  prenom   : String,
  login  : String,
  mail : String,
  campany:String,
  adresse: String,
  ville: String,
  pays: String,
  poste: String,
  password :String,
  tel: String,
  fax: String,
  achats:[{ type: Schema.Types.ObjectId, ref: 'Article' }],
  boutique : [{ type: Schema.Types.ObjectId, ref: 'Article' }]

});
// Création du Model pour les commentaires
var Article  = mongoose.model('Article', articleSchema);
var Member  = mongoose.model('Member', memberSchema);
var hash = bcrypt.hashSync('0000',10);
var member = new Member({
  _id: new mongoose.Types.ObjectId(),
  name   : 'Omar',
  prenom   : 'Keskes',
  login  : 'omarkeskes',
  mail : 'Keskes.om@gmail.com',
  adresse: '25 Rue Ibn Moataz Ariana',
  pays:'Tunisie',
  ville:'Tunis',
  poste:'2083',
  password :hash,
  tel: '+216 20 661 383',
  fax:'(00 216) 71 860 635'
});

member.save(function (err) {
  if (err) return handleError(err);
  
  var article1 = new Article({
    _id: new mongoose.Types.ObjectId(),
    titre: "Pull Homme",
    description: "PEPE-JEANS-Pull-coton-chine-bleu-homme-YUAN-Navy-PM700957",
    quantite: 2,
    provenance: "Tunis",
    etat: "Neuf",
    categorie: "Vêtements, accessoires",
    prix: 30,
    date:Date.now(),
    marque: "Pepe Jeans",
    photo: "model6.jpg",
    vendeur: member._id    
  });

    var article2 = new Article({
    _id: new mongoose.Types.ObjectId(),
    titre: "Robe Femme",
    description: "COOL GREEN DRESS WITH RED BELL",
    quantite: 3,
    provenance: "Tunis",
    etat: "Neuf",
    date:Date.now(),
    categorie: "Vêtements, accessoires",
    prix: 45,
    marque: "Chanel",
    photo: "model1.jpg",
    vendeur: member._id    
  });
  
  article1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
      member.boutique.push(article1);
  });
    article2.save(function (err) {
    if (err) return handleError(err);
    // thats it!
      member.boutique.push(article2);
      member.save();
  });


});


