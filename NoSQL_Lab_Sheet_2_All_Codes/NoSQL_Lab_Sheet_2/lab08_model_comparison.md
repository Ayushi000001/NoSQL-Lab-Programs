# Lab 8: Same student dataset in MongoDB, Cassandra, and Neo4j

## MongoDB
```javascript
use("StudentCompare");
db.students.insertMany([
 {studentId:1,name:"Aarav",course:"BCA",semester:6,marks:86},
 {studentId:2,name:"Diya",course:"BCA",semester:6,marks:91}
]);
db.students.find({course:"BCA"});
```

## Cassandra
```sql
CREATE KEYSPACE IF NOT EXISTS StudentCompare
WITH replication={'class':'SimpleStrategy','replication_factor':1};
USE StudentCompare;
CREATE TABLE IF NOT EXISTS students_by_course (
 course text, student_id int, name text, semester int, marks double,
 PRIMARY KEY (course, student_id)
);
INSERT INTO students_by_course (course,student_id,name,semester,marks)
VALUES ('BCA',1,'Aarav',6,86);
SELECT * FROM students_by_course WHERE course='BCA';
```

## Neo4j
```cypher
MERGE (s:Student {student_id:1,name:'Aarav'});
MERGE (c:Course {name:'BCA'});
MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student)-[:ENROLLED_IN]->(:Course {name:'BCA'}) RETURN s;
```

## Comparison
- Data model: MongoDB documents; Cassandra partitioned wide-column tables; Neo4j nodes and relationships.
- Storage: BSON documents; partition-key/clustered rows; graph nodes/edges/properties.
- Queries: Mongo query/aggregation; CQL based on primary-key query patterns; Cypher graph patterns.
- Scaling: MongoDB sharding; Cassandra horizontal peer-to-peer scaling; Neo4j scaling/cluster options depend on edition and deployment.
- Use cases: flexible records; high-volume distributed event/time-series workloads; relationship-heavy data.
