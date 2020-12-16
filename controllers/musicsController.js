const router = require('express').Router();

const models = require('../models');

router.get('/', (req, res) => {
  // res.send('hello from GET /bounties')
  models.Music.find().then((foundMusics) => {
    res.status(200).json({ musics: foundMusics })
    // mongoose should be sent as json
  }
)})

router.get('/:genre', (req, res) => {
  // res.send('hello from GET bounties/:id')
  // remember that _id and its unique string are how Mongo accesses the record!
  models.Music.findOne({primary: req.params.genre}).then((music) => {
    res.status(200).json({ music })
  })
})

router.post('/', (req, res) => {
  // res.send('hello from POST ')
  // CREATE A NEW BOUNTY
  // we need middleware to receive req.body
  models.Music.create(req.body).then((bounty) => {
    res.status(201).json({ bounty })
  }).catch((err) => { res.send(err) })
})

router.put('/:id', (req, res) => {
  // res.send('hello from PUT ')
  models.Music.update()
  // using $set?
})

router.delete('/:id', (req, res) => {
  models.Music.remove()
  // res.send('hello from DELETE ')
})

module.exports = router;
