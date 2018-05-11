DROP TABLE IF EXISTS houser;

CREATE TABLE houser (
id serial PRIMARY KEY,
name varchar(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip integer,
img text,
mortgage decimal,
rent decimal
);


INSERT INTO houser
(name, address, city, state, zip)
VALUES
('Santa Cruz', '199 Palm Beach Dr', 'Los Angeles', 'CA', 90210);