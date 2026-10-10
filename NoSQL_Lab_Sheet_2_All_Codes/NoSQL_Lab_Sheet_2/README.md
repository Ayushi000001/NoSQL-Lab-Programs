# NoSQL Database Design — Lab Sheet 2

This ZIP contains code/examples for all 15 lab questions:
- MySQL: Lab 1 comparison
- MongoDB: Labs 1–3, 8–10, 14
- Redis: Lab 4
- Cassandra: Labs 5, 8, 12
- HBase: Lab 6
- Neo4j: Labs 7–8
- Replication/sharding architecture notes and commands: Labs 9–13 and 15

## Before running
Install the relevant database and client tools first. These scripts are for practice environments.
Some labs require multi-node infrastructure:
- MongoDB sharding and replica sets require multiple configured MongoDB instances.
- Cassandra peer-to-peer replication requires multiple Cassandra nodes.
- HBase region distribution requires an HBase installation; multiple RegionServers need a cluster.
- Neo4j scripts run in Neo4j Browser or cypher-shell.
- Redis commands run in `redis-cli`.
- Cassandra commands run in `cqlsh`.
- HBase commands run in `hbase shell`.
- MongoDB JavaScript scripts run with `mongosh`.

Run each lab separately and review destructive commands before executing. Some examples clear their own collections or create configuration resources.
