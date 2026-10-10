-- Lab 1 Part A: RDBMS Student table (MySQL)
CREATE DATABASE IF NOT EXISTS CollegeRelational;
USE CollegeRelational;
CREATE TABLE IF NOT EXISTS Student (
  Student_ID INT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Course VARCHAR(50),
  Semester INT,
  Marks DECIMAL(5,2)
);
INSERT INTO Student VALUES
(1,'Aarav Sharma','BCA',6,86.50),
(2,'Diya Verma','BCA',6,91.00),
(3,'Kabir Singh','BSc',4,78.00),
(4,'Meera Joshi','BCA',4,88.00),
(5,'Reyansh Gupta','BCom',2,82.50);
SELECT * FROM Student;
