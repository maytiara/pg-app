const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pg-app-v1',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
module.exports = mongoose.connection;
