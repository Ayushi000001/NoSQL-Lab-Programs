// Lab 10: Inventory Monitoring and restocking
use("NoSQL_Lab3");
db.inventory.deleteMany({});
db.inventory.insertMany([
 {productId:"P1",name:"Mouse",stock:4,minStock:10,supplier:"TechSupply",restockDate:ISODate("2026-10-15")},
 {productId:"P2",name:"Keyboard",stock:25,minStock:8,supplier:"KeyWorld",restockDate:ISODate("2026-11-01")},
 {productId:"P3",name:"USB Cable",stock:2,minStock:5,supplier:"CableHub",restockDate:ISODate("2026-10-12")}
]);
print("Products requiring restocking"); printjson(db.inventory.find({$expr:{$lte:["$stock","$minStock"]}}).toArray());
print("Urgent: zero or very low stock"); printjson(db.inventory.find({stock:{$lte:3}}).toArray());
