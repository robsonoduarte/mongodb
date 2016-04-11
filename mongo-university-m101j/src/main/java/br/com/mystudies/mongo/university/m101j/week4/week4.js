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


//Index Creation Option Unique

db.stuff.insert({thing:'apple'})
db.stuff.insert({thing:'pear'})
db.stuff.insert({thing:'apple'})
db.stuff.find()
db.stuff.createIndex({thing:1})
db.stuff.dropIndex({thing:1})
db.stuff.createIndex({thing:1},{unique:true})
db.stuff.remove({thing: 'apple'}, {justOne: true})




// Index creation, Sparse
var e1 = {
    employye_id: 1,
    name: 'Robson Duarte',
    cell: '123 345 567'
}

var e2 = {
    employye_id: 2,
    name: 'Ana Mara',
    cell: '123 345 563'
}

var e3 = {
    employye_id: 3,
    name: 'Aparecida'
}


var e4 = {
    employye_id: 4,
    name: 'Antonio',
}


db.employyes.insert(e1)
db.employyes.insert(e2)
db.employyes.insert(e3)
db.employyes.insert(e4)


db.employyes.find()

db.employyes.createIndex({employye_id:1})
db.employyes.createIndex({cell:1},{unique:true, sparse : true})


db.employyes.getIndexes()
db.employyes.find().sort({employye_id:1})
db.employyes.find().sort({employye_id:-1})
db.employyes.explain().find().sort({employye_id:-1})
db.employyes.explain().find().sort({cell:-1})


// Index Creation, Background
db.students.getIndexes()
db.students.dropIndex({'scores.socre':1})
db.students.createIndex({'scores.socre':1}, {background:true})



// Explain

for(i=0; i<100; i++){
	for(j=0; j<100; j++){
  		x = [];
  		for(k=0; k<100; k++){
  			x.push({a: i, b: j, c:k , _id: (100* 100* i + 100 * j + k)});
		}
		db.example.insert(x)
	}
}


db.example.count()
db.example.find()
db.example.createIndex({a:1, b:1})
db.example.createIndex({b:1})



// many forms to take the explain
db.example.explain().find({a:17, b:55}).sort({b:-1})


var exp = db.example.explain()
exp.help()
exp.find({a:17, b:55}).sort({b:-1})
exp.find({c:10})

var cursor = db.example.find({a:99})
cursor.explain()


// Explain Verbosity

db.example.find()
db.example.getIndexes()
db.example.dropIndex({a:1, b:1})

var exp = db.example.explain('executionStats')
exp.find({a: 17, b: 55})

db.example.createIndex({a:1, b:1})
var exp = db.example.explain('allPlansExecution')
exp.find({a: 17, b: 55})

// Covered Queries

for(i=0; i<100; i++){
	for(j=0; j<100; j++){
  		x = [];
  		for(k=0; k<100; k++){
  			x.push({i: i, j: j, k:k});
		}
		db.numbers.insert(x)
	}
}

db.numbers.find()
db.numbers.getIndexes()
db.numbers.createIndex({i:1, j:1, k:1})

var exp = db.numbers.explain('executionStats')
exp.find({i:45, j:23})
exp.find({i:45, j:23},{_id:0 , i:1, j:1, k:1})


// How Large is your Index

db.students.find()
db.students.getIndexes()
db.students.stats()
db.students.totalIndexSize()


// Geospatial indexes

var s1 = {
	name: 'Rubys',
	type: 'Barber',
	location: [
		40,
		74
	]

}

var s2 = {
	name: 'ACE Hardware',
	type: 'hardware',
	location: [
		40.232,
		-7.3434
	]

}

var s3 = {
	name: 'Tickle Candy',
	type: 'Food',
	location: [
		41.232,
		-75.343
	]

}

db.stores.insert(s1)
db.stores.insert(s2)
db.stores.insert(s3)

db.stores.find()
db.stores.ensureIndex({location:'2d', type:1})
db.stores.getIndexes()

db.routes.find({location:{$near:[50,50]}})


// Geospation Spherical

var p1 = {
  	name: 'My Home',
  	city: 'São Paulo',
  	type: 'House',
  	location :{
  	  type: 'Point',
  	  coordinates:[
  	  	-46.515915,
  	  	-23.5695488
  	  ]
  	}
}




var p2 = {
  	name: 'Bar do Simpático ( Clodo )',
  	city: 'São Paulo',
  	type: 'Pub',
  	location :{
  	  type: 'Point',
  	  coordinates:[
  	  	-46.5157957,
  	  	-23.5692151
  	  ]
 	}
}



var p3 = {
  	name: 'Shopping Leste Aricanduva',
  	city: 'São Paulo',
  	type: 'SuperMakert',
  	location :{
  	  type: 'Point',
  	  coordinates:[
  	  	-46.5190455,
  	  	-23.570798
  	  ]
  	}
}



var p4 = {
  	name: 'Cemitério Municipal Vila Formosa',
  	city: 'São Paulo',
  	type: 'Cemetery',
  	location :{
  	  type: 'Point',
  	  coordinates:[
  	  	-46.517953,
  	  	-23.5669875
  	  ]
  	}
}




var p5 = {
  	name: 'Santuário do Bom Jesus da Lapa',
  	city: 'Bahia',
  	type: 'Church',
  	location :{
  	  type: 'Point',
  	  coordinates:[
  	  	-43.4170571,
  	  	-13.2534846
  	  ]
  	}
}







db.places.insert(p1)
db.places.insert(p2)
db.places.insert(p3)
db.places.insert(p4)
db.places.insert(p5)

db.places.find()
db.places.ensureIndex({location:'2dsphere'})
db.places.getIndexes()

db.places.find({
  	location:{
  	  	$near:{
  	  	  $geometry:{
  	  	    	type: 'Point',
  	  	    	"coordinates" : [-46.515915, -23.5695488]
  	  	  },
  	  	  $maxDistance:100
  	  	}
}})

