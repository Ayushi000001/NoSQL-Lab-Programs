// Lab 7: Content Management System
use("NoSQL_Lab3");
db.content.deleteMany({});
db.content.insertMany([
 {title:"Intro to NoSQL",author:"Aarav",category:"Education",tags:["database"],status:"published",publishedAt:ISODate("2026-10-01")},
 {title:"Draft: Indexes",author:"Diya",category:"Technology",tags:["mongodb","indexes"],status:"draft"},
 {title:"Aggregation Guide",author:"Kabir",category:"Education",tags:["mongodb","aggregation"],status:"published",publishedAt:ISODate("2026-10-05")}
]);
print("Published education content"); printjson(db.content.find({status:"published",category:"Education"}).toArray());
print("Unpublished content"); printjson(db.content.find({status:{$ne:"published"}}).toArray());
print("Published articles tagged mongodb"); printjson(db.content.find({status:"published",tags:"mongodb"}).toArray());
