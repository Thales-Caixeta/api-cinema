CREATE DATABASE IF NOT EXISTS cinema CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cinema;

CREATE TABLE IF NOT EXISTS filme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  genero VARCHAR(80) NOT NULL,
  classificacao VARCHAR(20) NOT NULL
);

INSERT INTO filme (titulo, genero, classificacao) VALUES
  ('Interestelar', 'Ficção Científica', '10 anos'),
  ('O Poderoso Chefão', 'Crime', '16 anos'),
  ('Toy Story', 'Animação', 'Livre');
