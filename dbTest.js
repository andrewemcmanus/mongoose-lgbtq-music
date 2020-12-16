require('dotenv').config()

const models = require('./models/');

models.Music.create({
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
},
{
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
},
{
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
},
{
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
}).then(() => console.log('complete'));
