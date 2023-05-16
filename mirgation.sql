DROP TABLE IF EXISTS todo;

CREATE TABLE todo(
  id SERIAL PRIMARY KEY ,
  text TEXT
);

INSERT INTO todo VALUES ('Mow the lawn');
INSERT INTO todo VALUES ('Do the dishes');
INSERT INTO todo VALUES ('Mop the floor');