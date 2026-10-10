#!/usr/bin/env bash
# Lab 7: Create records across multiple logical buckets.
# Requires curl and a running Riak HTTP API at localhost:8098.
set -e
BASE="http://127.0.0.1:8098"
for bucket in customers orders products; do
  for i in $(seq 1 100); do
    key="${bucket}_${i}"
    payload="{\"id\":${i},\"bucket\":\"${bucket}\",\"note\":\"sample record ${i}\"}"
    curl -sS -X PUT "${BASE}/buckets/${bucket}/keys/${key}" \
      -H 'Content-Type: application/json' -d "${payload}" >/dev/null
  done
done
echo "Inserted 300 sample records into customers, orders, and products."
echo "Riak distributes data across the cluster's partitions/vnodes; multiple buckets alone do not prove physical distribution."
