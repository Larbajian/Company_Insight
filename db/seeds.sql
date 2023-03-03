INSERT INTO department (department_name)
VALUES  ("Management"),
        ("Dining Room"),
        ("Kitchen");

INSERT INTO role (title, salary, department_id)
VALUES  ("General Manager", 80,000.00, 1),
        ("Dining Room Manager", 55,000.00, 1),
        ("Kitchen Manager", 65,000.00, 1),
        ("Host", 12.00, 2),
        ("Server", 2.13, 2),
        ("Bartender", 2.13, 2),
        ("Prep", 18.00, 3),
        ("Line-Cook", 22.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ( "Terrence", "Majors", 101, 1011),
        ( "Christine", "Sanders", 102, 1011),
        ( "Michael", "Barsconi", 103, 1011),
        ( "Kelsey", "Roth", 201, 1021),
        ( "Jesse", "Kranston", 202, 1021),
        ( "Grayson", "Anderson", 203, 1021),
        ( "Josiah", "Shaw", 301, 1031),
        (, "Keenan", "McKellan", 302,1031);
                
       
       
