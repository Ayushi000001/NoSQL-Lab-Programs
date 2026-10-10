# NoSQL Lab Codes — Apache HBase and Apache Cassandra

This folder contains command scripts for the 15 NoSQL lab questions:
- Labs 1–10: Apache HBase (`.hbase`)
- Labs 11–15: Apache Cassandra (`.cql`)

## Important
These are database-shell scripts, not ordinary Python programs.
- HBase files run in the HBase shell.
- Cassandra files run in `cqlsh`.
- Review commands before running them on a real database. Some labs drop/recreate tables or keyspaces.
- The exact installation commands vary by OS and installed Java/Hadoop versions.

## Run HBase scripts
1. Install Java and a compatible Apache Hadoop/HBase version for your OS.
2. Configure HBase according to the official documentation. For a local standalone setup, configure `hbase.rootdir` and ensure Java is supported by your HBase release.
3. Start HBase using your installation's startup command, commonly:
   `start-hbase.sh`
4. Open the shell:
   `hbase shell`
5. At the HBase prompt, run one script's commands by copying/pasting its contents, or use the shell's supported script input option for your version.

## Run Cassandra scripts
1. Install a compatible Apache Cassandra release and start the Cassandra service.
2. Open the CQL shell:
   `cqlsh`
3. Run a lab file by copying/pasting its contents, or from a terminal use:
   `cqlsh -f lab11_collegedb_students.cql`
   (adjust the filename/path as needed).

## Lab list
1. HBase Student table (five records)
2. HBase Employee CRUD
3. HBase event logging
4. HBase CMS CRUD
5. HBase blogging platform
6. HBase column-family model
7. HBase WebsiteCounter
8. HBase sessions with TTL
9. HBase row-key strategy / scaling
10. HBase regions and RegionServers (configuration-dependent demonstration)
11. Cassandra CollegeDB Students
12. Cassandra Employees CRUD
13. Cassandra event logging by user/time
14. Cassandra consistency levels
15. Cassandra column-oriented application (event logging example)

## Notes on labs 8 and 10
- TTL expiry is asynchronous; expired cells are no longer returned after the configured TTL and cleanup/compaction behavior may vary.
- Region splits and placement depend on HBase version/configuration and cluster setup. Lab 10 includes split-key creation and commands to inspect regions; a single-node local install will not demonstrate high availability.
