// Lab 11: Primary-secondary replication demonstration
// Configure three mongod instances with the same replSet name before running:
// mongod --replSet rs0 --port 27017 --dbpath <path1>
// mongod --replSet rs0 --port 27018 --dbpath <path2>
// mongod --replSet rs0 --port 27019 --dbpath <path3>
// Then connect to port 27017 and run rs.initiate() with members matching your host/ports.
rs.initiate({_id:"rs0",members:[
 {_id:0,host:"localhost:27017"},
 {_id:1,host:"localhost:27018"},
 {_id:2,host:"localhost:27019"}
]});
// After the replica set becomes healthy:
use("ReplicationLab");
db.students.insertOne({studentId:1,name:"Aarav"});
db.students.find();
rs.status();
// To read from a secondary in mongosh, connect directly to the secondary and run:
// rs.secondaryOk(); db.getSiblingDB("ReplicationLab").students.find();
// Primary failover requires a majority of voting members to be available.
