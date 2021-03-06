CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name, priority, description, deliverydate)
        VALUES('Make a Web App', 1, 'Using JS', '2021-06-01');

INSERT INTO projects(name, priority, description, deliverydate)
        VALUES('Make a App', 1, 'Using Dark', '2021-12-12');

INSERT INTO projects(name, priority, description, deliverydate)
        VALUES('Make a DesktopApp', 1, 'Using C++', '2021-11-11');

-- INSERT TASKS DATA

INSERT INTO tasks(name, done, projectID)
        VALUES('download VueJS', false,1);

INSERT INTO tasks(name, done, projectID)
        VALUES('Create UI Web', false,1);

INSERT INTO tasks(name, done, projectID)
        VALUES('Download Flutter', false,2);

INSERT INTO tasks(name, done, projectID)
        VALUES('Design UI', false,2);
