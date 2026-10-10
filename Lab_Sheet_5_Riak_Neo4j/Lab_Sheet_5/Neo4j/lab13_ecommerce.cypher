// Lab 13: E-commerce graph
MERGE (cust:Customer {customer_id:'CU01', name:'Aarav'});
MERGE (p1:Product {product_id:'P01', name:'Wireless Mouse', price:799});
MERGE (p2:Product {product_id:'P02', name:'Keyboard', price:1299});
MERGE (cat:Category {name:'Accessories'});
MERGE (o:Order {order_id:'O100', order_date:date('2026-10-10')});
MERGE (cust)-[:PLACED]->(o);
MERGE (o)-[:CONTAINS {quantity:1}]->(p1);
MERGE (o)-[:CONTAINS {quantity:1}]->(p2);
MERGE (p1)-[:IN_CATEGORY]->(cat);
MERGE (p2)-[:IN_CATEGORY]->(cat);

// Products purchased by a particular customer
MATCH (:Customer {customer_id:'CU01'})-[:PLACED]->(:Order)-[:CONTAINS]->(p:Product)
RETURN DISTINCT p.name AS product, p.price AS price;
