// Lab 10: MongoDB sharding demo (run only on a configured sharded cluster mongos)
// A sharded cluster must first be configured with config servers, shard replica sets, and mongos.
// Run these commands in mongosh connected to mongos, not a standalone mongod.
sh.enableSharding("ShardingLab");
db = db.getSiblingDB("ShardingLab");
db.largeDataset.createIndex({studentId:"hashed"});
sh.shardCollection("ShardingLab.largeDataset",{studentId:"hashed"});
for (let i=1; i<=25; i++) {
  db.largeDataset.insertOne({studentId:i,name:"Student"+i,marks:60+(i%40)});
}
print("Inserted record count: " + db.largeDataset.countDocuments());
printjson(db.largeDataset.find().sort({studentId:1}).toArray());
print("Distribution metadata (exact output depends on MongoDB version/topology):");
printjson(db.largeDataset.getShardDistribution());
