const db = require("../models")

module.exports = {
    findAll: function(req, res){
        db.Book
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    save: function(req, res){
        console.log("This is saving", req.body)
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    delete: function(req, res){
        db.Book
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    }
    
}