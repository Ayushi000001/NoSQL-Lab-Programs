// Lab 8: Embedded-document Shopping Cart
use("NoSQL_Lab3");
db.carts.deleteMany({});
db.carts.insertOne({userId:"U101",items:[{productId:"P1",name:"Mouse",price:799,quantity:1},{productId:"P2",name:"Keyboard",price:1299,quantity:1}]});
print("Initial cart"); printjson(db.carts.findOne({userId:"U101"}));
// Add product
db.carts.updateOne({userId:"U101"},{$push:{items:{productId:"P3",name:"USB Cable",price:199,quantity:2}}});
// Change quantity
db.carts.updateOne({userId:"U101","items.productId":"P1"},{$set:{"items.$.quantity":3}});
// Remove product
db.carts.updateOne({userId:"U101"},{$pull:{items:{productId:"P2"}}});
print("Updated cart"); printjson(db.carts.findOne({userId:"U101"}));
print("Cart total"); printjson(db.carts.aggregate([
 {$match:{userId:"U101"}},{$unwind:"$items"},
 {$group:{_id:"$userId",total:{$sum:{$multiply:["$items.price","$items.quantity"]}}}}
]).toArray());
