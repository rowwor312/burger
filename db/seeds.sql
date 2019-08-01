-- Creating new rows containing initial burger data
INSERT INTO burgers (burger_name, devoured)
VALUES ("Bison Burger",true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("All American Burger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Double Cheeseburger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Turkey Cheeseburger",true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Mushroom Burger",false);

-- Verifying that the data was inserted in the table by pulling everything from it
SELECT * FROM burgers;