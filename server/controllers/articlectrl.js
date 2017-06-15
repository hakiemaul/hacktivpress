var Article = require('../models/article')
var User = require('../models/user')

var get = function (req, res) {
  Article.find({})
  .populate('author')
  .exec(function (err, articles) {
    res.send(err ? err : articles)
  })
}

var getOne = function (req, res) {
  Article.findById(req.params.id)
  .populate('author')
  .exec(function (err, article) {
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
  Article.findOneAndRemove({ _id: req.params.id}, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
}

var findBySomething = function (req, res) {
  let cat = req.params.some
  if (cat == 'category' ) {
    Article.find({ category: req.params.search}, (err, articles) => {
      if (err) {
        res.send(err)
      } else {
        res.send(articles)
      }
    })
  } else {
    User.find({ username: req.params.search}, (err, user) => {
      Article.find({ author: user._id }, (err, articles) => {
        res.send(articles)
      })
    })
  }
}

module.exports = {
  get, getOne, create, update, remove, findBySomething
}