// Lab 9: Product Review and Rating System
use("NoSQL_Lab3");
db.reviews.deleteMany({});
db.reviews.insertMany([
 {productId:"P1",customer:"Aarav",rating:5,review:"Excellent"},
 {productId:"P1",customer:"Diya",rating:4,review:"Good"},
 {productId:"P2",customer:"Kabir",rating:3,review:"Average"},
 {productId:"P2",customer:"Meera",rating:4,review:"Nice"}
]);
print("Average rating and review count per product"); printjson(db.reviews.aggregate([
 {$group:{_id:"$productId",averageRating:{$avg:"$rating"},reviewCount:{$sum:1}}},{$sort:{_id:1}}
]).toArray());
