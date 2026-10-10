// Lab 2: Event Logging and failed-login analysis
use("NoSQL_Lab3");
db.eventLogs.deleteMany({});
db.eventLogs.insertMany([
 {userId:"U1",event:"login",time:ISODate("2026-10-10T09:00:00Z")},
 {userId:"U1",event:"failed-login",time:ISODate("2026-10-10T09:01:00Z")},
 {userId:"U1",event:"failed-login",time:ISODate("2026-10-10T09:02:00Z")},
 {userId:"U1",event:"failed-login",time:ISODate("2026-10-10T09:03:00Z")},
 {userId:"U2",event:"file-upload",time:ISODate("2026-10-10T09:10:00Z")},
 {userId:"U2",event:"password-change",time:ISODate("2026-10-10T09:15:00Z")},
 {userId:"U1",event:"logout",time:ISODate("2026-10-10T10:00:00Z")}
]);
print("Repeated failed logins (3 or more)"); printjson(db.eventLogs.aggregate([
 {$match:{event:"failed-login"}},{$group:{_id:"$userId",failedAttempts:{$sum:1}}},
 {$match:{failedAttempts:{$gte:3}}}
]).toArray());
print("Event frequency"); printjson(db.eventLogs.aggregate([
 {$group:{_id:"$event",count:{$sum:1}}},{$sort:{count:-1}}
]).toArray());
