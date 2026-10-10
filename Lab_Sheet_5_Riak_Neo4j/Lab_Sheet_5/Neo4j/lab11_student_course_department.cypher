// Lab 11: Student, Course, Department graph
CREATE CONSTRAINT student_id IF NOT EXISTS FOR (s:Student) REQUIRE s.student_id IS UNIQUE;
CREATE CONSTRAINT course_id IF NOT EXISTS FOR (c:Course) REQUIRE c.course_id IS UNIQUE;
CREATE CONSTRAINT dept_id IF NOT EXISTS FOR (d:Department) REQUIRE d.dept_id IS UNIQUE;

MERGE (d:Department {dept_id:'D01', name:'Computer Applications'});
MERGE (c1:Course {course_id:'C01', name:'BCA'});
MERGE (c2:Course {course_id:'C02', name:'MCA'});
MERGE (s1:Student {student_id:'S01', name:'Aarav Sharma'});
MERGE (s2:Student {student_id:'S02', name:'Diya Verma'});
MERGE (s1)-[:ENROLLED_IN]->(c1);
MERGE (s2)-[:ENROLLED_IN]->(c1);
MERGE (c1)-[:OFFERED_BY]->(d);
MERGE (c2)-[:OFFERED_BY]->(d);

MATCH (s:Student)-[r]->(n) RETURN s,r,n;
