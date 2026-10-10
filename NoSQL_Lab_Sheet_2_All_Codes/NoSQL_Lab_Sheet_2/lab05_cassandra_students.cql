-- Lab 5: Cassandra CollegeDB Students
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE CollegeDB;
CREATE TABLE IF NOT EXISTS Students (
 Student_ID int PRIMARY KEY, Name text, Course text, Semester int, Marks double
);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES (1,'Aarav Sharma','BCA',6,86);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES (2,'Diya Verma','BCA',6,91);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES (3,'Kabir Singh','BSc',4,78);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES (4,'Meera Joshi','BCA',4,88);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES (5,'Reyansh Gupta','BCom',2,82);
SELECT * FROM Students;
-- Cassandra requires query-driven schema; create a separate table for course queries:
CREATE TABLE IF NOT EXISTS StudentsByCourse (
 Course text, Student_ID int, Name text, Semester int, Marks double,
 PRIMARY KEY (Course, Student_ID)
);
INSERT INTO StudentsByCourse (Course,Student_ID,Name,Semester,Marks) VALUES ('BCA',1,'Aarav Sharma',6,86);
INSERT INTO StudentsByCourse (Course,Student_ID,Name,Semester,Marks) VALUES ('BCA',2,'Diya Verma',6,91);
INSERT INTO StudentsByCourse (Course,Student_ID,Name,Semester,Marks) VALUES ('BSc',3,'Kabir Singh',4,78);
INSERT INTO StudentsByCourse (Course,Student_ID,Name,Semester,Marks) VALUES ('BCA',4,'Meera Joshi',4,88);
INSERT INTO StudentsByCourse (Course,Student_ID,Name,Semester,Marks) VALUES ('BCom',5,'Reyansh Gupta',2,82);
SELECT * FROM StudentsByCourse WHERE Course='BCA';
UPDATE Students SET Marks=80 WHERE Student_ID=3;
DELETE FROM Students WHERE Student_ID=5;
