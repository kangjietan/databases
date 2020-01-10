var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // Get all messages
      db.query('SELECT * FROM messages;', function (error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log(results);
        }
      });
      // Return all messages
    }, // a function which produces all the messages
    post: function (data) {
      console.log(data);
      db.query(`INSERT INTO messages (username, content, roomname) VALUES ("${data.username}", "${data.message}", "${data.roomname}");`, function (error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log('Success');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      db.query(`INSERT INTO users (username) VALUES ("${data}");`, function (error, results, fields) {
        if (error) {
          throw error;
        }
      });
      // db.connection.end();
    }
  }
};


// { username: 'Valjean',
// message: 'In mercy\'s name, three days is all I need.',
// roomname: 'Hello' },