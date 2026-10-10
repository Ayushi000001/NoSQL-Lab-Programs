// Lab 12: Social network
MERGE (a:Person {name:'Aarav'});
MERGE (b:Person {name:'Diya'});
MERGE (c:Person {name:'Kabir'});
MERGE (co:Company {name:'Example Tech'});
MERGE (a)-[:FRIENDS_WITH]->(b);
MERGE (b)-[:FRIENDS_WITH]->(c);
MERGE (a)-[:FOLLOWS]->(c);
MERGE (b)-[:FOLLOWS]->(a);
MERGE (a)-[:WORKS_AT]->(co);
MERGE (b)-[:WORKS_AT]->(co);

// Aarav's friends
MATCH (:Person {name:'Aarav'})-[:FRIENDS_WITH]-(friend:Person)
RETURN DISTINCT friend.name AS friend;

// People who follow Aarav
MATCH (follower:Person)-[:FOLLOWS]->(:Person {name:'Aarav'})
RETURN follower.name AS follower;
