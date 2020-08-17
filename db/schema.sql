-- DROP DATABASE
DROP DATABASE IF EXISTS rg_13th;

-- CREATE DATABASE
CREATE DATABASE rg_13th;

----use database
--USE rg_13th;
--
---- create tables
--CREATE TABLE category(
--    id INT AUTO_INCREMENT NOT NULL,
--    category_name VARCHAR(30) NOT NULL,
--    PRIMARY KEY (id)
--);
--
--CREATE TABLE product(
--    id INT AUTO_INCREMENT NOT NULL,
--    product_name VARCHAR(30) NOT NULL,
--    price DECIMAL NOT NULL,
--    stuck INT NOT NULL DEFAULT 10,
--    category_id INT,
--    PRIMARY KEY (id),
--    FOREIGN KEY (category_id) REFERENCES category(id)
--);
--
--CREATE TABLE tag(
--    id INT AUTO_INCREMENT NOT NULL,
--    tag_name VARCHAR(30),
--    PRIMARY KEY (id)
--);
--
--CREATE TABLE productTag (
--    id INT AUTO_INCREMENT NOT NULL,
--    product_id INT,
--    tag_id INT,
--    PRIMARY KEY (id),
--    FOREIGN KEY (product_id) REFERENCES product(id),
--    FOREIGN KEY (tag_id) REFERENCES tag(id)
--);