// Lab 15: Flexible News Database with variable document structures
use("NoSQL_Lab3");
db.news.deleteMany({});
db.news.insertMany([
 {title:"Campus Tech Fest",author:"Aarav",location:"Roorkee",category:"Education",tags:["campus","technology"],images:["fest1.jpg"],sources:["University"],published:true},
 {title:"City Weather Update",location:"Dehradun",category:"Local",tags:["weather"],source:"News Desk",published:true},
 {title:"New AI Research",author:{name:"Dr. Rao",organization:"Research Lab"},category:"Technology",tags:["AI","research"],published:false}
]);
print("Search by category"); printjson(db.news.find({category:"Technology"}).toArray());
print("Search by tag"); printjson(db.news.find({tags:"technology"}).toArray());
print("Articles with location regardless of other optional fields"); printjson(db.news.find({location:{$exists:true}}).toArray());
print("Published news"); printjson(db.news.find({published:true}).toArray());
