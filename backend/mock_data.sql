-- Drop table if it exists
DROP TABLE IF EXISTS game;

-- Create table
CREATE TABLE game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insert example data
INSERT INTO game (title, description) VALUES
  ('The Legend of Zelda: A Link to the Past', 'Embark on a legendary adventure to save Hyrule from the clutches of evil. Explore dungeons, solve puzzles, and wield the power of the Master Sword.'),
  ('Hollow Knight', 'Descend into the hauntingly beautiful world of Hallownest. Uncover ancient secrets, battle fearsome creatures, and discover your true purpose.'),
  ('Prince of Persia', 'Experience the classic tale of a prince embarking on a journey to save his kingdom and rescue his beloved princess. Master the art of acrobatics and combat.'),
  ('Yoshi Island', 'Join Yoshi on a colorful and whimsical adventure to rescue Baby Mario. Flutter jump, eat enemies, and solve puzzles across multiple vibrant worlds.'),
  ('Castlevania: Symphony of the Night', 'Step into the role of Alucard, a vampire hunter, as you explore Dracula castle. Uncover hidden rooms, defeat powerful foes, and unlock mystical powers.');

-- Query example
SELECT * FROM game;
