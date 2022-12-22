create database Ecommerce1;
use Ecommerce1;

CREATE TABLE customers(
    id INT(11) PRIMARY KEY auto_increment,
    Name VARCHAR(50) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Industry_type VARCHAR(50) NOT NULL);

CREATE TABLE salespersons(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Age INT(50) NOT NULL,
    Salary INT(50) NOT NULL
);
CREATE TABLE orders(
    Number INT(11) AUTO_INCREMENT,
    order_date DATE NOT NULL,
    cust_id INT(11) NOT NULL,
    salesperson_Id INT(11) NOT NULL,
    PRIMARY KEY(Number),
    FOREIGN KEY(cust_id) REFERENCES customers(id), 
    FOREIGN KEY(salesperson_id) REFERENCES salespersons(id)
);

select Name from salespersons
inner join orders ON salespersons.id=orders.salesperson_id AND orders.Amount>1400;