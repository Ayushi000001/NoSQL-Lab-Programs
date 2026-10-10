// Lab 11: Atomic wallet transfer using a MongoDB transaction
// REQUIREMENT: MongoDB must run as a replica set or sharded cluster; standalone mode will fail.
use("NoSQL_Lab3");
db.wallets.deleteMany({});
db.wallets.insertMany([{userId:"U1",balance:5000},{userId:"U2",balance:2000}]);

const session = db.getMongo().startSession();
const sdb = session.getDatabase("NoSQL_Lab3");
try {
  session.startTransaction();
  const debit = sdb.wallets.updateOne({userId:"U1",balance:{$gte:1000}},{$inc:{balance:-1000}});
  if (debit.modifiedCount !== 1) throw new Error("Insufficient balance or sender not found");
  const credit = sdb.wallets.updateOne({userId:"U2"},{$inc:{balance:1000}});
  if (credit.modifiedCount !== 1) throw new Error("Recipient not found");
  session.commitTransaction();
  print("Transfer completed atomically.");
} catch (e) {
  session.abortTransaction();
  print("Transfer aborted: " + e.message);
} finally {
  session.endSession();
}
printjson(db.wallets.find().toArray());
