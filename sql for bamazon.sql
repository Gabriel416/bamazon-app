CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
	ID int NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price decimal,
    stock_quantity int,
    primary key(ID)
);


SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pillow", "home_goods", 24.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("legos", "toys", 15.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fallout 3", "videogames", 60.00, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sneakers", "apparel", 75.00, 84);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cards", "toys", 2.50, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("trampoline", "recreation", 250.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("printing paper", "office supplies", 29.99, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dress shirt", "apparel", 20.00, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuffed animal", "toys", 15.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rug", "home_goods", 120.00, 61);
