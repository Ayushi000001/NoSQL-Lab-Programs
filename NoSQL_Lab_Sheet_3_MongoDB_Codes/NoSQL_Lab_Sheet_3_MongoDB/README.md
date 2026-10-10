# NoSQL Database Design — Lab Sheet 3 (MongoDB)

Contains 15 MongoDB `mongosh` scripts, one per lab question.

## Requirements
- MongoDB Server running locally (default `mongodb://127.0.0.1:27017`)
- MongoDB Shell (`mongosh`)
- Use a test database named `NoSQL_Lab3`.

## How to run
Open a terminal in this folder and run an individual lab, for example:
`mongosh "mongodb://127.0.0.1:27017/NoSQL_Lab3" --file lab01_student_activity.js`

Run the scripts one at a time. Most scripts create/replace sample documents and may clear their own collection first, so use a practice database, not production data.

Lab 11 uses MongoDB transactions, which require a replica set or sharded cluster; standalone MongoDB does not support multi-document transactions.
