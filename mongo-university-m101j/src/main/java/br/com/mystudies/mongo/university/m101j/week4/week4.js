// Creating Indexes

db = db.getSiblingDB("school");
db.students.drop();

types = [ 'exam', 'quiz', 'homework', 'homework' ];

// 1 million students
for (i = 0; i < 1000000; i++) {
	// take 10 classes
	for (class_counter = 0; class_counter < 10; class_counter++) {
		scores = []
		// and each class has 4 grades
		for (j = 0; j < 4; j++) {
			scores.push({
				'type' : types[j],
				'score' : Math.random() * 100
			});
		}
		// there are 500 different classes that they can take
		class_id = Math.floor(Math.random() * 501); // get a class id between 0
													// and 500
		record = {
			'student_id' : i,
			'scores' : scores,
			'class_id' : class_id
		};
		db.students.insert(record);
	}

}




db.students.findOne()

// before cretead index spend more or less 30s
db.students.findOne({student_id:5})

// search full collection
db.students.explain().find({student_id:5})


// after cretead index the query is immediate
db.students.createIndex({student_id:1})

// search in 10 documents
db.students.explain(true).find({student_id:5})



// Discovering and Deleting Indexes
db.students.getIndexes()
db.students.dropIndex({student_id:1})


// Multikey Indexes
db.foo.insert({a:1, b:2})
db.foo.find()
db.foo.createIndex({a:1, b:1})

//  "isMultiKey" : true
db.foo.explain().find({a:1, b:1})

// test  "isMultiKey" : true,
db.foo.insert({a:3, b:[ 3,5,7]})
db.foo.find({a:3, b:3})

db.foo.getIndexes()

// try insert too arrays --> "errmsg" : "cannot index parallel arrays [b] [a]"
db.foo.insert({a:[3,5,7], b:[ 3,5,7]})

// try insert transversal array --> WriteResult({ "nInserted" : 1 })
db.foo.insert({a:[3,5,7], b:8})
db.foo.find({a:3, b:8 })




// Dot Notation and Multikey

/db.students.createIndex({'scores.score':1})
db.students.getIndexes()

db.students.explain().find({'scores.score': {$gt: 99}})

// use the index scores.score to filter the scores to aply the filter exam
db.students.find({scores:{$elemMatch:{type: 'exam', score : { $gt: 99.8 }}}}).count()

// see the total documents examined
db.students.explain(true).find({scores:{$elemMatch:{type: 'exam', score : { $gt: 99.8 }}}})

// is exact of the this number
db.students.find({'scores.score': {$gt: 99.8}}).count()

// this query don't work because the $and operator no match type: exam with score: gt 99.8
db.students.find({$and:[{'scores.type': 'exam'}, {'scores.score':{$gt:99.8}}]})
db.students.explain().find({$and:[{'scores.type': 'exam'}, {'scores.score':{$gt:99.8}}]})
