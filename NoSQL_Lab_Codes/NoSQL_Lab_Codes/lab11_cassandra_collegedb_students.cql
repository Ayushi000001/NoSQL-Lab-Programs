-- Lab 11: CollegeDB keyspace and Students table
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    student_id int PRIMARY KEY,
    name text,
    course text,
    semester int,
    city text
);

INSERT INTO Students (student_id, name, course, semester, city) VALUES (1, 'Aarav Sharma', 'BCA', 6, 'Roorkee');
INSERT INTO Students (student_id, name, course, semester, city) VALUES (2, 'Diya Verma', 'BCA', 6, 'Dehradun');
INSERT INTO Students (student_id, name, course, semester, city) VALUES (3, 'Kabir Singh', 'BSc', 4, 'Haridwar');
INSERT INTO Students (student_id, name, course, semester, city) VALUES (4, 'Meera Joshi', 'BCA', 4, 'Rishikesh');
INSERT INTO Students (student_id, name, course, semester, city) VALUES (5, 'Reyansh Gupta', 'BCom', 2, 'Delhi');

SELECT * FROM Students;
