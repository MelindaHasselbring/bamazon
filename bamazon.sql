-- Author: Melinda Hasselbring
-- File: bamazon.js
-- Date 07-08-17
-- bamazon

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;


-- create table courses
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

-- ============== edu

INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES  ("Advance Fondant Technique", "edu", 75, 30),
        ("Cupcake Designs", "edu", 75, 25),
        ("Lambeth Method", "edu", 75, 18),
        ("Creative Cake Pops", "edu", 75, 30),
        ("Sugar Flowers",  "edu", 75, 12);
                


-- ============== books

INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("Les Petits Macarons", "books", 11.99, 17),
         ("Gourmet French Macarons", "books", 11.99, 10),
         ("The Contemporary Cake Decorating Bible", "books", 11.99, 24),
         ("Miette", "books", 11.99, 57),
         ("Simply Modern Wedding Cakes", "books", 11.99, 56);
  
  
  
  -- ============== gourmetSweets 

INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("hand made french macaroons, 6 ct", "gourmetSweets ", 12.99, 130),
         ("hand made french macaroons, 12 ct", "gourmetSweets ", 24.99, 145),
         ("designer cupcakes, 6 ct", "gourmetSweets ",  22.50, 120),
         ("designer cupcakes, 12 ct", "gourmetSweets ",  43.50, 85),
         ("extra Ordinary cake, 6", "gourmetSweets ",  48.50, 12),
         ("extra Ordinary cake, 8", "gourmetSweets ",  58.50, 12);
  
SELECT * FROM products;