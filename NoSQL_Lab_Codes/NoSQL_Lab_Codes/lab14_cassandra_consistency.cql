-- Lab 14: Consistency levels ONE, QUORUM, ALL
CREATE KEYSPACE IF NOT EXISTS ConsistencyDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
USE ConsistencyDB;

CREATE TABLE IF NOT EXISTS ConsistencyDemo (
    id int PRIMARY KEY,
    message text
);

-- Set consistency before the write/read to observe acknowledgement requirements.
CONSISTENCY ONE;
INSERT INTO ConsistencyDemo (id, message) VALUES (1, 'Written at ONE');
SELECT * FROM ConsistencyDemo WHERE id = 1;

CONSISTENCY QUORUM;
INSERT INTO ConsistencyDemo (id, message) VALUES (2, 'Written at QUORUM');
SELECT * FROM ConsistencyDemo WHERE id = 2;

CONSISTENCY ALL;
INSERT INTO ConsistencyDemo (id, message) VALUES (3, 'Written at ALL');
SELECT * FROM ConsistencyDemo WHERE id = 3;

-- Note: RF=3 requires a cluster with 3 replicas to meaningfully compare ONE/QUORUM/ALL.
-- With a single-node setup, ALL may fail because only one replica is available/configured.
