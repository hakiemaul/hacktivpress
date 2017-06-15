var Article = require('../models/article')

var get = function (req, res) {
  Article.find({})
  .populate('author')
  .exec(function (err, articles) {
    res.send(err ? err : articles)
  })
}

var getOne = function (req, res) {
  Article.findById(req.params.id, (err, article) => {
    res.send(err ? err : article)
  })
}

var create = function (req, res) {
  var newArticle = new Article({
    title: req.body.title,
    articleContent: req.body.articleContent,
    category: req.body.category,
    author: req.body.creator,
    createdAt: new Date()
  })
  newArticle.save((err, article) => {
    res.send(err ? err : article)
  })
}

var update = function (req, res) {
  Article.findById(req.params.id, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      console.log(req.body.creator)
      if (article.author == req.body.creator) {
        article.title = req.body.title || article.title
        article.articleContent = req.body.articleContent || article.articleContent
        article.category = req.body.category || article.category
        article.updatedAt = new Date()

        article.save((err, article) => {
          res.send(err ? err : article)
        })
      } else {
        res.send({ msg: 'Not authorized' })
      }
    }
  })
}

var remove = function (req, res) {
  Article.findById(req.params.id, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      if (article.author == req.body.creator) {
        Article.findOneAndRemove({_id: req.params.id}, (err, article) => {
          if(err) res.send(err)
          res.send(article)
        })
      } else {
        res.send({ msg: 'Not authorized' })
      }
    }
  })
}

module.exports = {
  get, getOne, create, update, remove
}