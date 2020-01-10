var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // Get all messages from the model
      // Pass in a callback that invokes models.messages.get
      // Have the callback return what we got back from the db
      // Send back in a response
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body.username);
      res.end();
    }
  }
};