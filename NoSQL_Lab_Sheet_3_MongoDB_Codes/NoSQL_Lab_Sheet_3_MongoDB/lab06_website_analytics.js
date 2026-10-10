// Lab 6: Website Analytics with aggregation
use("NoSQL_Lab3");
db.pageVisits.deleteMany({});
db.pageVisits.insertMany([
 {page:"/home",userId:"U1",device:"mobile",browser:"Chrome",location:"Roorkee",timestamp:ISODate("2026-10-10T09:00:00Z")},
 {page:"/home",userId:"U2",device:"desktop",browser:"Edge",location:"Delhi",timestamp:ISODate("2026-10-10T09:05:00Z")},
 {page:"/products",userId:"U1",device:"mobile",browser:"Chrome",location:"Roorkee",timestamp:ISODate("2026-10-10T09:10:00Z")},
 {page:"/home",userId:"U3",device:"tablet",browser:"Safari",location:"Dehradun",timestamp:ISODate("2026-10-10T09:20:00Z")},
 {page:"/products",userId:"U4",device:"mobile",browser:"Chrome",location:"Haridwar",timestamp:ISODate("2026-10-10T09:25:00Z")}
]);
print("Most visited pages"); printjson(db.pageVisits.aggregate([{$group:{_id:"$page",visits:{$sum:1}}},{$sort:{visits:-1}}]).toArray());
print("Common devices"); printjson(db.pageVisits.aggregate([{$group:{_id:"$device",count:{$sum:1}}},{$sort:{count:-1}}]).toArray());
