// Lab 3: Embedded Orders
use("CollegeDB");
db.Orders.deleteMany({});
db.Orders.insertMany([
 {orderId:"O1",customer:{id:"C1",name:"Aarav"},products:[{id:"P1",name:"Mouse",qty:2,price:500},{id:"P2",name:"Keyboard",qty:1,price:1200}]},
 {orderId:"O2",customer:{id:"C2",name:"Diya"},products:[{id:"P3",name:"Headphones",qty:1,price:1800}]},
 {orderId:"O3",customer:{id:"C1",name:"Aarav"},products:[{id:"P4",name:"USB",qty:3,price:200}]},
 {orderId:"O4",customer:{id:"C3",name:"Kabir"},products:[{id:"P2",name:"Keyboard",qty:2,price:1200}]},
 {orderId:"O5",customer:{id:"C2",name:"Diya"},products:[{id:"P1",name:"Mouse",qty:1,price:500}]}
]);
print("Orders for C1"); printjson(db.Orders.find({"customer.id":"C1"}).toArray());
db.Orders.updateOne({orderId:"O1","products.id":"P1"},{$set:{"products.$.qty":4}});
print("Order totals"); printjson(db.Orders.aggregate([
 {$unwind:"$products"},{$group:{_id:"$orderId",customer:{$first:"$customer.name"},total:{$sum:{$multiply:["$products.qty","$products.price"]}}}}
]).toArray());
print("Orders above 1000"); printjson(db.Orders.aggregate([
 {$unwind:"$products"},{$group:{_id:"$orderId",total:{$sum:{$multiply:["$products.qty","$products.price"]}}}},
 {$match:{total:{$gt:1000}}}
]).toArray());
