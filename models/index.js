require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/mongooseLgbtqMusic`);

module.exports = {
  Music: require('./Music')
}
