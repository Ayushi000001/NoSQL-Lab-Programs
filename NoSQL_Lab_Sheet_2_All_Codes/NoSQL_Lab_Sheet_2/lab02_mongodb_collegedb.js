// Lab 2: CollegeDB Students CRUD
use("CollegeDB");
db.Students.deleteMany({});
db.Students.insertMany([
 {Student_ID:1,Name:"Aarav Sharma",Course:"BCA",Semester:6,Marks:86},
 {Student_ID:2,Name:"Diya Verma",Course:"BCA",Semester:6,Marks:91},
 {Student_ID:3,Name:"Kabir Singh",Course:"BSc",Semester:4,Marks:78},
 {Student_ID:4,Name:"Meera Joshi",Course:"BCA",Semester:4,Marks:88},
 {Student_ID:5,Name:"Reyansh Gupta",Course:"BCom",Semester:2,Marks:82}
]);
print("All students"); printjson(db.Students.find().toArray());
print("BCA students"); printjson(db.Students.find({Course:"BCA"}).toArray());
db.Students.updateOne({Student_ID:3},{$set:{Marks:81}});
print("Updated student"); printjson(db.Students.findOne({Student_ID:3}));
db.Students.deleteOne({Student_ID:5});
print("Student count"); print(db.Students.countDocuments());
