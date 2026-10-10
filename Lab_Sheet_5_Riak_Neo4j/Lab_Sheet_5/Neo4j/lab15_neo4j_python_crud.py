"""
Lab 15: Python CRUD with Neo4j.

Install: pip install neo4j
Set environment variables:
  Windows PowerShell:
    $env:NEO4J_URI="bolt://localhost:7687"
    $env:NEO4J_USERNAME="neo4j"
    $env:NEO4J_PASSWORD="your_password"
Run: python lab15_neo4j_python_crud.py
"""
import os
from neo4j import GraphDatabase

URI = os.getenv("NEO4J_URI", "bolt://localhost:7687")
USERNAME = os.getenv("NEO4J_USERNAME", "neo4j")
PASSWORD = os.getenv("NEO4J_PASSWORD")
if not PASSWORD:
    raise SystemExit("Set NEO4J_PASSWORD before running this script.")

driver = GraphDatabase.driver(URI, auth=(USERNAME, PASSWORD))

def create_person(tx, person_id, name, city):
    tx.run(
        "MERGE (p:Person {person_id: $person_id}) "
        "SET p.name = $name, p.city = $city",
        person_id=person_id, name=name, city=city
    )

def read_person(tx, person_id):
    result = tx.run(
        "MATCH (p:Person {person_id: $person_id}) "
        "RETURN p.person_id AS id, p.name AS name, p.city AS city",
        person_id=person_id
    )
    return [record.data() for record in result]

def update_person(tx, person_id, city):
    tx.run(
        "MATCH (p:Person {person_id: $person_id}) SET p.city = $city",
        person_id=person_id, city=city
    )

def delete_person(tx, person_id):
    tx.run(
        "MATCH (p:Person {person_id: $person_id}) DETACH DELETE p",
        person_id=person_id
    )

with driver.session() as session:
    session.execute_write(create_person, "P001", "Aarav", "Roorkee")
    print("After CREATE:", session.execute_read(read_person, "P001"))
    session.execute_write(update_person, "P001", "Dehradun")
    print("After UPDATE:", session.execute_read(read_person, "P001"))
    session.execute_write(delete_person, "P001")
    print("After DELETE:", session.execute_read(read_person, "P001"))

driver.close()
