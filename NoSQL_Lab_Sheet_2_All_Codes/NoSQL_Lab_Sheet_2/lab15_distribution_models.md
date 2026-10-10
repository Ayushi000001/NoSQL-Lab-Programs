# Lab 15: Database distribution models

## 1. Single server
```text
Application -> One database server -> Local storage
```
- Distribution: all data on one server.
- Failure handling: server outage makes database unavailable unless backups/recovery are used.
- Advantage: simple and inexpensive.
- Limitation: limited scale and single point of failure.
- Use: student project or small application.

## 2. Sharding
```text
Application -> Router -> Shard A | Shard B | Shard C
```
- Distribution: different data partitions live on different shards.
- Failure handling: depends on whether each shard is replicated.
- Advantage: horizontal storage and throughput scaling.
- Limitation: shard-key design and operations add complexity.
- Use: very large catalog or event dataset.

## 3. Primary-secondary replication
```text
Application -> Primary -> Secondary 1
                       -> Secondary 2
```
- Distribution: copies of the same data on multiple servers.
- Failure handling: eligible secondary may be elected primary.
- Advantage: redundancy and read scaling in suitable configurations.
- Limitation: replication alone does not split total data volume.
- Use: business database requiring failover.

## 4. Peer-to-peer replication
```text
Node A <----> Node B
   ^             |
   +---- Node C <-+
```
- Distribution: nodes can accept requests; replicas are coordinated by the distributed database.
- Failure handling: remaining replicas can serve requests if consistency level permits.
- Advantage: horizontal scaling and no single permanent master.
- Limitation: consistency/conflict and operational considerations.
- Use: distributed telemetry or high-write workloads.

## 5. Sharding + replication
```text
Router -> Shard A (Primary + replicas)
       -> Shard B (Primary + replicas)
```
- Distribution: partitions across shards; each shard has replicated copies.
- Failure handling: replica failover within a shard.
- Advantage: scalability plus fault tolerance.
- Limitation: highest deployment/maintenance complexity.
- Use: large e-commerce or multi-tenant application.
