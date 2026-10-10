// Lab 14: Transaction-like sequence in Neo4j Browser.
// Run the statements together as one selection/transaction where supported by your client.
CREATE (p:Product {product_id:'P99', name:'Sample Product', stock:10});
MATCH (p:Product {product_id:'P99'})
SET p.stock = p.stock - 1
RETURN p;
MATCH (p:Product {product_id:'P99'})
SET p.status = 'updated'
RETURN p;
MATCH (p:Product {product_id:'P99'})
RETURN p;
MATCH (p:Product {product_id:'P99'})
DELETE p;

// Explanation: Neo4j transactions provide ACID semantics for grouped operations when
// executed within the same transaction. Separate Browser submissions are separate transactions.
// Availability and clustering depend on deployment/edition and cluster configuration.
