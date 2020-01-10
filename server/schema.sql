CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  friend BOOLEAN DEFAULT false
);

-- CREATE TABLE rooms (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   roomname VARCHAR(100)
-- );

-- CREATE TABLE messages (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   content VARCHAR(300),
--   user_id INTEGER,
--   room_id INTEGER,
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (room_id) REFERENCES rooms(id)
-- );

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(300),
  content VARCHAR(300),
  roomname VARCHAR(100)
)

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

