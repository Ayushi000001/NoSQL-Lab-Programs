// Lab 1: Student Activity Tracking System
use("NoSQL_Lab3");
db.studentActivity.deleteMany({});
db.studentActivity.insertMany([
 {studentId:"S101",name:"Aarav",courses:["BCA","DBMS"],attendance:88,skills:["Python","MongoDB"],recentActivities:[{type:"quiz",score:90,date:ISODate("2026-10-01")},{type:"project",score:85,date:ISODate("2026-10-05")}]},
 {studentId:"S102",name:"Diya",courses:["BCA"],attendance:72,skills:["HTML","CSS"],recentActivities:[{type:"quiz",score:65,date:ISODate("2026-10-02")}]},
 {studentId:"S103",name:"Kabir",courses:["BSc","DBMS"],attendance:95,skills:["Python","SQL"],recentActivities:[{type:"project",score:92,date:ISODate("2026-10-06")}]}
]);
print("Students with attendance >= 80"); printjson(db.studentActivity.find({attendance:{$gte:80}}).toArray());
print("Students who completed a project"); printjson(db.studentActivity.find({"recentActivities.type":"project"}).toArray());
print("Students with Python skill"); printjson(db.studentActivity.find({skills:"Python"}).toArray());
