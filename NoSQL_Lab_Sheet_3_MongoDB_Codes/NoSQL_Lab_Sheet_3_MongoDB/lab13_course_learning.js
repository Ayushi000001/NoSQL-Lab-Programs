// Lab 13: Course Learning Platform
use("NoSQL_Lab3");
db.learningProgress.deleteMany({});
db.learningProgress.insertMany([
 {studentId:"S1",studentName:"Aarav",course:"MongoDB",instructor:"Dr. Mehta",modules:[{name:"Basics",complete:true},{name:"Queries",complete:true},{name:"Aggregation",complete:false}],progress:67,completed:false},
 {studentId:"S2",studentName:"Diya",course:"MongoDB",instructor:"Dr. Mehta",modules:[{name:"Basics",complete:true},{name:"Queries",complete:true},{name:"Aggregation",complete:true}],progress:100,completed:true},
 {studentId:"S3",studentName:"Kabir",course:"Neo4j",instructor:"Ms. Rao",modules:[{name:"Graph Basics",complete:true}],progress:40,completed:false}
]);
print("Students with progress >= 60"); printjson(db.learningProgress.find({progress:{$gte:60}}).toArray());
print("Completed courses"); printjson(db.learningProgress.find({completed:true}).toArray());
