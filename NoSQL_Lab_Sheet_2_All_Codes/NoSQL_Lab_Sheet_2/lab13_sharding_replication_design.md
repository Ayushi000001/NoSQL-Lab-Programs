# Lab 13: Sharding + Replication architecture

A practical MongoDB implementation uses a sharded cluster where each shard is itself a replica set.

```text
Applications
    |
   mongos
    |
  Config Server Replica Set
    |
    +-------------------+
    |                   |
Shard A Replica Set   Shard B Replica Set
Primary + 2 secondaries  Primary + 2 secondaries
    |                   |
Partition A data       Partition B data
```

## Setup outline
1. Start a config-server replica set.
2. Start at least two shard replica sets, each with a primary and one or more secondaries.
3. Start `mongos` with the config-server connection string.
4. Add shards using `sh.addShard("shardA/hostA:port,hostB:port")` and corresponding command for shard B.
5. Enable sharding for a database and shard a collection using an indexed shard key.
6. Insert at least 20 records, then inspect distribution with `db.collection.getShardDistribution()`.

## Explanation
- Sharding splits data ranges/chunks across shards for horizontal capacity and throughput.
- Replica sets copy each shard's data to secondary members for redundancy and failover.
- Failure: a shard primary can be replaced by an eligible secondary; sharding does not itself replace replication.
- Limitation: setup and operations are more complex; shard-key choice affects distribution and query efficiency.
