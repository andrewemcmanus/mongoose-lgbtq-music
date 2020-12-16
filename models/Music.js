const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  username: String,
  description: String
})

const instrumentSchema = new mongoose.Schema({
  instrument1: String,
  instrument2: String,
  instrument3: String,
  instrument4: String
})

const genreSchema = new mongoose.Schema({
  primary: String,
  secondary: String,
  description: [descriptionSchema]
})

const mediaSchema = new mongoose.Schema({
  voice: Boolean,
  ensemble: [instrumentSchema]
})


const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: [genreSchema],
  media: [mediaSchema],
  year: Number
})

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;
