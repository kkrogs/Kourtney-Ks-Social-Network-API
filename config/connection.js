const { connect, connection } = require('mongoose');

// connects to the database
connect('mongodb://localhost/userThoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
