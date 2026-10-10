"""Lab 9: Application-level query-by-data using stored JSON values.

This demo stores JSON-like records in a Python dictionary to show the application
logic. Riak KV itself is primarily key-based; server-side secondary-index/search
features depend on Riak version and configuration.
"""
import json

users = {
    "U101": {"name": "Aarav", "city": "Roorkee", "age": 22, "preferences": ["analytics", "design"]},
    "U102": {"name": "Diya", "city": "Dehradun", "age": 21, "preferences": ["music", "design"]},
    "U103": {"name": "Kabir", "city": "Roorkee", "age": 23, "preferences": ["databases", "analytics"]},
}

print("Stored user JSON values:")
for key, value in users.items():
    print(key, json.dumps(value))

city = "Roorkee"
print(f"\nUsers in {city}:")
for key, value in users.items():
    if value.get("city") == city:
        print(key, value["name"])

print("\nUsers aged 22 or older who like analytics:")
for key, value in users.items():
    if value.get("age", 0) >= 22 and "analytics" in value.get("preferences", []):
        print(key, value["name"])
