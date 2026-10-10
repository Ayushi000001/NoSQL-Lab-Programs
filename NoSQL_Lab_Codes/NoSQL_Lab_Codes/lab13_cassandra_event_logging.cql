-- Lab 13: Event logging by user and time period
CREATE KEYSPACE IF NOT EXISTS EventDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE EventDB;

CREATE TABLE IF NOT EXISTS UserEvents (
    user_id text,
    event_time timestamp,
    event_id uuid,
    event_type text,
    status text,
    PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id ASC);

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U101', '2026-10-10 10:00:00+0000', 11111111-1111-4111-8111-111111111111, 'LOGIN', 'SUCCESS');
INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U101', '2026-10-10 10:15:00+0000', 22222222-2222-4222-8222-222222222222, 'PURCHASE', 'SUCCESS');
INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U102', '2026-10-10 10:20:00+0000', 33333333-3333-4333-8333-333333333333, 'LOGIN', 'FAILED');

-- Retrieve a particular user's events in a time range (partition-key equality required)
SELECT * FROM UserEvents
WHERE user_id = 'U101'
AND event_time >= '2026-10-10 09:00:00+0000'
AND event_time <= '2026-10-10 11:00:00+0000';
