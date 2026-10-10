-- Lab 15: Column-oriented NoSQL application — Event Logging
CREATE KEYSPACE IF NOT EXISTS EventAppDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE EventAppDB;

CREATE TABLE IF NOT EXISTS EventsByUser (
    user_id text,
    event_time timestamp,
    event_id timeuuid,
    event_type text,
    status text,
    details text,
    PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id DESC);

-- Create / insert
INSERT INTO EventsByUser (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-10 10:00:00+0000', 11111111-1111-1111-1111-111111111111, 'LOGIN', 'SUCCESS', 'Mobile login');

INSERT INTO EventsByUser (user_id, event_time, event_id, event_type, status, details)
VALUES ('U101', '2026-10-10 10:30:00+0000', 22222222-2222-2222-2222-222222222222, 'PURCHASE', 'SUCCESS', 'Order placed');

-- Read/query
SELECT * FROM EventsByUser WHERE user_id = 'U101';

-- Update
UPDATE EventsByUser
SET status = 'REVIEWED'
WHERE user_id = 'U101'
AND event_time = '2026-10-10 10:00:00+0000'
AND event_id = 11111111-1111-1111-1111-111111111111;

SELECT * FROM EventsByUser WHERE user_id = 'U101';

-- Delete one row using its full primary key
DELETE FROM EventsByUser
WHERE user_id = 'U101'
AND event_time = '2026-10-10 10:30:00+0000'
AND event_id = 22222222-2222-2222-2222-222222222222;

SELECT * FROM EventsByUser WHERE user_id = 'U101';

-- Design notes:
-- Consistency: configurable per request (e.g., ONE, QUORUM, ALL).
-- Availability: depends on reachable replicas and the chosen consistency level.
-- Transactions: lightweight transactions (IF conditions) are available but cost more;
-- ordinary writes are upserts, not multi-row ACID transactions.
-- Querying: model tables around query patterns and primary keys; avoid unrestricted scans.
-- Scaling: partition key distributes data; add nodes to expand capacity.
