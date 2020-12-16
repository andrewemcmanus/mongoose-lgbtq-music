const router = require('express').Router();

const models = require('../models');

router.get('/', (req, res) => {
  models.Music.find().then((foundMusics) => {
    res.status(200).json({ musics: foundMusics })
    // mongoose should be sent as json
  }
)})

router.get('/:id', (req, res) => {
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
  // how to refer to attributes embedded in sub-schemas?
  models.Music.update({ title: req.params.title } { $set: { genre.description: req.body } }).then((music) => {
    res.status(201).json({ music })
  }).catch((err) => { res.send(err) })
  // OR:
  // models.Music.updateAll({ artist: req.params.artist } { $set: {genre.descrition: req.body} })
})

router.delete('/:artist', (req, res) => {
  models.Music.remove({ artist: req.params.artist }).then((music) => {
    res.status(201).json({ music })
  }).catch((err) => { res.send(err) })
  // OR:
  // models.Music.removeMany({ year: { $lt: 1900 }})
})

module.exports = router;
