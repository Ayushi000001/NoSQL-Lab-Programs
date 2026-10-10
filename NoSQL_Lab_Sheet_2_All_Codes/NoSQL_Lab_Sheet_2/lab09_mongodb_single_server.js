// Lab 9: MongoDB single-server CRUD verification
use("SingleServerLab");
db.devices.deleteMany({});
db.devices.insertMany([{id:1,name:"Laptop"},{id:2,name:"Phone"},{id:3,name:"Camera"}]);
print("CREATE/INSERT"); printjson(db.devices.find().toArray());
print("READ"); printjson(db.devices.findOne({id:1}));
db.devices.updateOne({id:2},{$set:{name:"Smartphone"}});
print("UPDATE"); printjson(db.devices.findOne({id:2}));
db.devices.deleteOne({id:3});
print("DELETE + verification"); printjson(db.devices.find().toArray());
