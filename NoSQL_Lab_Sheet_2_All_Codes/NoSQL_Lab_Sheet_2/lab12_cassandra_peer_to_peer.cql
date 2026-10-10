-- Lab 12: Cassandra peer-to-peer replication
-- Run on a Cassandra cluster with at least 3 nodes.
CREATE KEYSPACE IF NOT EXISTS PeerToPeerLab
WITH replication = {'class':'NetworkTopologyStrategy','datacenter1':3};
USE PeerToPeerLab;
CREATE TABLE IF NOT EXISTS Students (student_id int PRIMARY KEY, name text, course text);
INSERT INTO Students (student_id,name,course) VALUES (1,'Aarav','BCA');
INSERT INTO Students (student_id,name,course) VALUES (2,'Diya','BCA');
SELECT * FROM Students;
-- Check node status from a terminal using: nodetool status
-- RF=3 means three replicas in datacenter1, provided the cluster has enough nodes.
