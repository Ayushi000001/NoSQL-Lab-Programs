-- Lab 12: Employees CRUD
CREATE KEYSPACE IF NOT EXISTS CompanyDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE CompanyDB;

CREATE TABLE IF NOT EXISTS Employees (
    employee_id int PRIMARY KEY,
    name text,
    department text,
    salary decimal
);

INSERT INTO Employees (employee_id, name, department, salary) VALUES (101, 'Riya Sharma', 'Analytics', 25000);
INSERT INTO Employees (employee_id, name, department, salary) VALUES (102, 'Aman Verma', 'HR', 22000);
SELECT * FROM Employees;
UPDATE Employees SET salary = 28000 WHERE employee_id = 101;
SELECT * FROM Employees WHERE employee_id = 101;
DELETE FROM Employees WHERE employee_id = 102;
SELECT * FROM Employees;
