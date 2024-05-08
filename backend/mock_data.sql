DROP TABLE IF EXISTS game;
CREATE TABLE game (
  id bigint PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO game (title) VALUES ('Game 1'), ('Game 2'), ('Game 3');
