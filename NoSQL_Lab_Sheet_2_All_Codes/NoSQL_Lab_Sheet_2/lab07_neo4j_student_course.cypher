// Lab 7: Student-Course graph
CREATE CONSTRAINT student_id IF NOT EXISTS FOR (s:Student) REQUIRE s.student_id IS UNIQUE;
CREATE CONSTRAINT course_id IF NOT EXISTS FOR (c:Course) REQUIRE c.course_id IS UNIQUE;
UNWIND [
 {id:'S1',name:'Aarav'},{id:'S2',name:'Diya'},{id:'S3',name:'Kabir'},
 {id:'S4',name:'Meera'},{id:'S5',name:'Reyansh'}
] AS row
MERGE (:Student {student_id:row.id,name:row.name});
UNWIND [
 {id:'C1',name:'BCA'},{id:'C2',name:'BSc'},{id:'C3',name:'BCom'}
] AS row
MERGE (:Course {course_id:row.id,name:row.name});
MATCH (s:Student {student_id:'S1'}),(c:Course {course_id:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {student_id:'S2'}),(c:Course {course_id:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {student_id:'S3'}),(c:Course {course_id:'C2'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {student_id:'S4'}),(c:Course {course_id:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {student_id:'S5'}),(c:Course {course_id:'C3'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student) RETURN s;
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'}) RETURN s.name;
MATCH (:Student {name:'Aarav'})-[:ENROLLED_IN]->(c:Course) RETURN c.name;
// Add then remove a relationship
MATCH (s:Student {student_id:'S1'}),(c:Course {course_id:'C2'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {student_id:'S1'})-[r:ENROLLED_IN]->(c:Course {course_id:'C2'}) DELETE r;
