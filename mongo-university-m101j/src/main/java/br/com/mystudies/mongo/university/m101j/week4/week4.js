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

