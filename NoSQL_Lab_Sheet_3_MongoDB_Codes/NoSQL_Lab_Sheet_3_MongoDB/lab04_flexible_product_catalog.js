// Lab 4: Flexible Product Catalog
use("NoSQL_Lab3");
db.catalog.deleteMany({});
db.catalog.insertMany([
 {productId:"L1",name:"Laptop Pro",category:"laptop",price:65000,attributes:{ramGB:16,storageGB:512,processor:"i7"}},
 {productId:"M1",name:"Mobile X",category:"mobile",price:28000,attributes:{ramGB:8,storageGB:256,has5G:true}},
 {productId:"C1",name:"Camera Z",category:"camera",price:42000,attributes:{megapixels:24,lensMount:"Z-mount",video4k:true}}
]);
print("Laptops with RAM >= 16 GB"); printjson(db.catalog.find({category:"laptop","attributes.ramGB":{$gte:16}}).toArray());
print("5G mobiles"); printjson(db.catalog.find({category:"mobile","attributes.has5G":true}).toArray());
print("Cameras with 4K video"); printjson(db.catalog.find({category:"camera","attributes.video4k":true}).toArray());
