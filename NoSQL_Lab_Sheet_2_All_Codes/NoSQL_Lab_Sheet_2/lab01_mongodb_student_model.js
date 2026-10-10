// Lab 1 Part B: Equivalent MongoDB document model
use("CollegeDocument");
db.Students.deleteMany({});
db.Students.insertMany([
 {Student_ID:1,Name:"Aarav Sharma",Course:"BCA",Semester:6,Marks:86.50},
 {Student_ID:2,Name:"Diya Verma",Course:"BCA",Semester:6,Marks:91.00},
 {Student_ID:3,Name:"Kabir Singh",Course:"BSc",Semester:4,Marks:78.00},
 {Student_ID:4,Name:"Meera Joshi",Course:"BCA",Semester:4,Marks:88.00},
 {Student_ID:5,Name:"Reyansh Gupta",Course:"BCom",Semester:2,Marks:82.50}
]);
printjson(db.Students.find().toArray());
// Comparison: SQL uses fixed columns/typed schema and joins; MongoDB stores flexible BSON documents.
// SQL suits relational constraints/joins; MongoDB suits evolving records and embedded data.
