// Lab 14: Real-Time Order Tracking with status history
use("NoSQL_Lab3");
db.orderTracking.deleteMany({});
db.orderTracking.insertOne({
 orderId:"O1001",customerId:"C1",currentStatus:"Placed",
 history:[{status:"Placed",time:ISODate("2026-10-10T09:00:00Z")}]
});
db.orderTracking.updateOne({orderId:"O1001"},{$set:{currentStatus:"Confirmed"},$push:{history:{status:"Confirmed",time:ISODate("2026-10-10T09:05:00Z")}}});
db.orderTracking.updateOne({orderId:"O1001"},{$set:{currentStatus:"Shipped"},$push:{history:{status:"Shipped",time:ISODate("2026-10-10T10:00:00Z")}}});
db.orderTracking.updateOne({orderId:"O1001"},{$set:{currentStatus:"Delivered"},$push:{history:{status:"Delivered",time:ISODate("2026-10-10T15:00:00Z")}}});
print("Current order status"); printjson(db.orderTracking.findOne({orderId:"O1001"},{orderId:1,currentStatus:1}));
print("Complete status history"); printjson(db.orderTracking.findOne({orderId:"O1001"},{history:1,_id:0}));
