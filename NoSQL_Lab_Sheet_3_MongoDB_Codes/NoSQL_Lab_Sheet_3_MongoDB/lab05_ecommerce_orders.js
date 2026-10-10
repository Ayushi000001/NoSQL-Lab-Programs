// Lab 5: E-Commerce Order Management
use("NoSQL_Lab3");
db.customers.deleteMany({});
db.products.deleteMany({});
db.orders.deleteMany({});
db.customers.insertMany([{customerId:"C1",name:"Aarav"},{customerId:"C2",name:"Diya"}]);
db.products.insertMany([{productId:"P1",name:"Mouse",price:799},{productId:"P2",name:"Keyboard",price:1299}]);
db.orders.insertMany([
 {orderId:"O1",customerId:"C1",items:[{productId:"P1",name:"Mouse",price:799,quantity:2},{productId:"P2",name:"Keyboard",price:1299,quantity:1}],status:"Delivered",orderDate:ISODate("2026-10-01")},
 {orderId:"O2",customerId:"C2",items:[{productId:"P2",name:"Keyboard",price:1299,quantity:1}],status:"Shipped",orderDate:ISODate("2026-10-05")}
]);
print("Customer C1 purchase history"); printjson(db.orders.find({customerId:"C1"}).toArray());
print("Order totals"); printjson(db.orders.aggregate([
 {$unwind:"$items"},{$group:{_id:"$orderId",customerId:{$first:"$customerId"},total:{$sum:{$multiply:["$items.price","$items.quantity"]}}}}
]).toArray());
