const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const Music = require('./models/Music.js');
// mongoose.connect(`mongodb://127.0.0.1:27017`);
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
mongoose.connect(`mongodb://localhost/mongooseLgbtqMusic`);
const db = mongoose.connection;

// console.log(db);

db.once('open', () => {
  console.log(`Connection to MongoDB on ${db.host}:${db.port}`);
})

db.on('error', (err) => {
  console.log(`Error`, err);
})

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from root');
})

app.get('/', (req, res) => {
  res.send('Home Route, Backend');
})

app.get('/loadmusic', (req, res) => {

  const firstEntry = new Music({
    title: 'Sensational',
    artist: 'Brendan Maclean',
    genre: [{
      primary: 'pop',
      secondary: 'disco'
    }],
    media: [{
      voice: true,
      ensemble: [
        {instrument1: 'guitar',
        instrument2: 'bass',
        instrument3: 'synth',
        instrument4: 'drums'}]
    }],
    year: 2020
  });
  firstEntry.save();
  const secondEntry = new Music({
    title: `Symphony No. 6 in b minor, Op. 74, "Pathétique"`,
    artist: 'Pyotr Ilyich Tchaikovsky',
    genre: [{
      primary: 'classical',
      secondary: 'Romantic'
    }],
    media: [{
      voice: false,
      ensemble: [{
        instrument1: 'full orchestra'
      }]
    }],
    year: 1893
  })
  secondEntry.save();
  const thirdEntry = new Music({
    title: 'Creep City',
    artist: 'Jake Shears',
    genre: [{
      primary: 'rock',
      secondary: 'cabaret'
    }],
    media: [{
      voice: true,
      ensemble: [
        {instrument1: 'piano',
          instrument2: 'trumpet, saxophone',
          instrument3: 'guitar, strings',
          instrument4: 'drums'
        }]
    }],
    year: 2018
  });
  thirdEntry.save();
  const fourthEntry = new Music({
    title: 'Heart to Break',
    artist: 'Kim Petras',
    genre: [{
      primary: 'pop',
      secondary: 'electronic'
    }],
    media: [{
      voice: true,
      ensemble: [{
        instrument1: 'synth',
        instrument2: 'synth drums'}]
    }],
    year: 2018
  })
  fourthEntry.save();
  res.send('Music posted');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Home Route, Backend');
})
