const router = require('express').Router();

const models = require('../models');

router.get('/', (req, res) => {
  models.Music.find().then((foundMusics) => {
    res.status(200).json({ musics: foundMusics })
    // mongoose should be sent as json
  }
)})

router.get('/:id', (req, res) => {
  // res.send('hello from GET bounties/:id')
  models.Music.findOne({_id: req.params.id}).then((music) => {
    res.status(200).json({ music })
  })
})

router.post('/', (req, res) => {
  models.Music.create(req.body).then((music) => {
    res.status(201).json({ music })
  }).catch((err) => { res.send(err) })
})

router.put('/:title', (req, res) => {
  models.Music.update({ title: req.params.title } { $set: { genre.description: req.body }, }).then((music) => {
    res.status(201).json({ music })
  }).catch((err) => { res.send(err) })
})

router.delete('/:artist', (req, res) => {
  models.Music.remove({artist: req.params.artist}).then((music) => {
    res.status(201).json({ music })
  }).catch((err) => { res.send(err) })
})

module.exports = router;
