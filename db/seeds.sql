INSERT INTO department (id, department_name)
VALUES  (100, "Management"),
        (200, "Dining Room"),
        (300, "Kitchen");

INSERT INTO position (id, title, salary, department_id)
VALUES  (101, "General Manager", 80,000.00, 100),
        (102, "Dining Room Manager", 55,000.00, 100),
        (103, "Kitchen Manager", 65,000.00, 100),
        (201, "Host", 12.00, 200),
        (202, "Server", 2.13, 200),
        (203, "Bartender", 2.13, 200),
        (301, "Prep", 18.00, 200),
        (302, "Line-Cook", 22.00, 200);

INSERT INTO employee (id, first_name, last_name, position_id, manager_id)
VALUES  (1011, "Terrence", "Majors", 101, 1011),
        (1021, "Christine", "Sanders", 102, 1011),
        (1031, "Michael", "Barsconi", 103, 1011),
        (2011, "Kelsey", "Roth", 201, 1021),
        (2021, "Jesse", "Kranston", 202, 1021),
        (2031, "Grayson", "Anderson", 203, 1021),
        (3011, "Josiah", "Shaw", 301, 1031),
        (3021, "Keenan", "McKellan", 302,1031);
                
       
       
