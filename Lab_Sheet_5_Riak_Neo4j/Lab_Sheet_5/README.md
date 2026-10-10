# NoSQL Database Design — Lab Sheet 5
## Riak KV and Neo4j (Labs 1–15)

This package contains runnable examples and lab notes for all 15 questions:
- Labs 1–10: Riak KV
- Labs 11–15: Neo4j

## Important setup notes
- Riak KV and some Riak-related features vary by version/distribution. The Riak KV open-source distribution is legacy; check compatibility and availability before installing on a current Linux distribution.
- The `.sh` files are Linux shell commands. Review before running.
- The `.http` files use HTTP requests to Riak's HTTP API and can be run with `curl` commands or an HTTP client. Default local Riak HTTP port is commonly 8098.
- The `.cypher` files run in Neo4j Browser or cypher-shell.
- The Python application uses the Neo4j Python driver. Install with `pip install neo4j`, set environment variables, and ensure Neo4j is running.
- Riak CRDT sets and quorum options depend on bucket type/configuration and server version. Labs include illustrative API requests and notes where behavior is version-dependent.
- For coursework, include screenshots of successful commands/results from your own environment; example scripts do not imply that the database has been installed or executed.

## Run Riak examples
1. Install/start a compatible Riak KV version on Linux according to its official documentation.
2. Verify the node is running using the command supported by your release (commonly `riak ping`).
3. Use the `.http` files as a request reference, or copy their `curl` commands into a terminal.
4. HTTP API examples assume `http://127.0.0.1:8098`.

## Run Neo4j examples
1. Install Neo4j Desktop/Server or use a Neo4j Aura instance.
2. Open Neo4j Browser.
3. Run the `.cypher` scripts section by section.
4. For Lab 15, install Python 3 and run `pip install neo4j`; set `NEO4J_URI`, `NEO4J_USERNAME`, and `NEO4J_PASSWORD` environment variables.

## Lab index
1. Riak students bucket CRUD
2. Riak user sessions
3. Riak user profiles and preferences
4. Riak shopping cart
5. Riak value types (string, JSON, list)
6. Riak quorum consistency
7. Riak buckets and scaling demonstration
8. Riak multi-operation shopping scenario
9. Riak application-level query by data
10. Riak set operations (version-dependent CRDT example)
11. Neo4j Student/Course/Department graph
12. Neo4j social network
13. Neo4j shopping/e-commerce graph
14. Neo4j transactions and consistency
15. Neo4j Python CRUD application

## Riak API request convention
Examples use `curl -i -X PUT` with `Content-Type` and URL-encoded bucket/key path components. If your Riak release uses a different API/configuration, adapt to its documentation.
