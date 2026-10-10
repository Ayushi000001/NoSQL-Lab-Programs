// Lab 12: User Notification System
use("NoSQL_Lab3");
db.notifications.deleteMany({});
db.notifications.insertMany([
 {userId:"U1",type:"message",text:"New message",read:false,createdAt:ISODate("2026-10-10T09:00:00Z")},
 {userId:"U1",type:"order-update",text:"Order shipped",read:false,createdAt:ISODate("2026-10-10T09:10:00Z")},
 {userId:"U1",type:"system-alert",text:"Password updated",read:true,createdAt:ISODate("2026-10-10T09:15:00Z")}
]);
print("Unread notifications"); printjson(db.notifications.find({userId:"U1",read:false}).toArray());
db.notifications.updateMany({userId:"U1",read:false},{$set:{read:true,readAt:new Date()}});
print("After marking as read"); printjson(db.notifications.find({userId:"U1"}).toArray());
