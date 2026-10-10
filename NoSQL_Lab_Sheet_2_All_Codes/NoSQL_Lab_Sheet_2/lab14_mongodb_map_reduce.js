// Lab 14: MapReduce by course (MapReduce is deprecated/removed in some newer MongoDB versions).
// If your MongoDB version does not support db.collection.mapReduce(), use the aggregation alternative below.
use("MapReduceLab");
db.students.deleteMany({});
db.students.insertMany([
 {Student_ID:1,Name:"Aarav",Course:"BCA",Marks:86},
 {Student_ID:2,Name:"Diya",Course:"BCA",Marks:91},
 {Student_ID:3,Name:"Kabir",Course:"BSc",Marks:78},
 {Student_ID:4,Name:"Meera",Course:"BCA",Marks:88},
 {Student_ID:5,Name:"Reyansh",Course:"BSc",Marks:82}
]);
var mapFunction = function () { emit(this.Course, {count:1,total:this.Marks}); };
var reduceFunction = function (key, values) {
  var result = {count:0,total:0};
  values.forEach(function(v){result.count += v.count; result.total += v.total;});
  return result;
};
// Legacy MapReduce API (may not be available):
// db.students.mapReduce(mapFunction, reduceFunction, {out:"courseStats"});
// db.courseStats.find();
print("Aggregation alternative: course count and average marks");
printjson(db.students.aggregate([
 {$group:{_id:"$Course",studentCount:{$sum:1},averageMarks:{$avg:"$Marks"}}},
 {$sort:{_id:1}}
]).toArray());
