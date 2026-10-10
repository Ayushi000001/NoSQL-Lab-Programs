// Lab 3: Mini Blogging Platform
use("NoSQL_Lab3");
db.blogs.deleteMany({});
db.blogs.insertMany([
 {title:"MongoDB Basics",author:"Aarav",category:"Database",tags:["mongodb","nosql"],comments:[{by:"Diya",text:"Helpful"}],published:true,publishedAt:ISODate("2026-09-20")},
 {title:"Web Design",author:"Diya",category:"Design",tags:["ui","css"],comments:[],published:true,publishedAt:ISODate("2026-09-25")},
 {title:"NoSQL Models",author:"Kabir",category:"Database",tags:["nosql","hbase"],comments:[{by:"Aarav",text:"Nice"}],published:false}
]);
print("Database category"); printjson(db.blogs.find({category:"Database"}).toArray());
print("Blogs tagged nosql"); printjson(db.blogs.find({tags:"nosql"}).toArray());
print("Database category AND nosql tag"); printjson(db.blogs.find({category:"Database",tags:"nosql"}).toArray());
print("Blogs with both nosql and hbase tags"); printjson(db.blogs.find({tags:{$all:["nosql","hbase"]}}).toArray());
