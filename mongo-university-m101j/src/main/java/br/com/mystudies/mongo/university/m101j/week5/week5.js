

//simple aggregation example

db.products.insert({'name':'iPad 16GB Wifi', 'manufacturer':"Apple",'category':'Tablets','price':499.00})
db.products.insert({'name':'iPad 32GB Wifi', 'category':'Tablets','manufacturer':"Apple",'price':599.00})
db.products.insert({'name':'iPad 64GB Wifi', 'category':'Tablets','manufacturer':"Apple",'price':699.00})
db.products.insert({'name':'Galaxy S3', 'category':'Cell Phones','manufacturer':'Samsung','price':563.99})
db.products.insert({'name':'Galaxy Tab 10', 'category':'Tablets','manufacturer':'Samsung','price':450.99})
db.products.insert({'name':'Vaio', 'category':'Laptops','manufacturer':"Sony",'price':499.00})
db.products.insert({'name':'Macbook Air 13inch', 'category':'Laptops','manufacturer':"Apple",'price':499.00})
db.products.insert({'name':'Nexus 7', 'category':'Tablets','manufacturer':"Google",'price':199.00})
db.products.insert({'name':'Kindle Paper White', 'category':'Tablets','manufacturer':"Amazon",'price':129.00})
db.products.insert({'name':'Kindle Fire', 'category':'Tablets','manufacturer':"Amazon",'price':199.00})

db.products.aggregate([
	{$group:
	  	{
	  	  _id:'$manufacturer',
	  	  num_products:{$sum:1}
	  	}
	 }
])


// simple example Expanded ( quiz )

db.stuff.insert({a:1, b:1, c:1})
db.stuff.insert({a:2, b:2, c:1})
db.stuff.insert({a:3, b:3, c:1})
db.stuff.insert({a:3, b:3, c:2})
db.stuff.insert({a:3, b:5, c:3})

db.stuff.aggregate([{$group:{_id: '$c'}}])


db.products.aggregate([
	{$group:
	  	{
	  	  _id:'$category',
	  	  num_products:{$sum:1}
	  	}
	 }
])



// Compound Grouping

db.products.aggregate([{
  		$group: { _id: {
	  		  		maker: '$manufacturer',
		  		  	category: '$category'},
		  		  num_products: {$sum:1 }
		  		 }
  		}
 ])


 // compound ids

 // for mongo the real requirement for _id is that it be unique
 // if you try insert once documents you can seyy the duplicate key error.
 db.foo.insert({_id:{name:'Robson', class:'m101'}, hometown: 'SP'})



 // using $sum

 db.products.aggregate([
	{$group:
	  	{
	  	  _id: {
	  	    	maker: '$manufacturer'},
	  	    	sum_prices: {$sum:'$price'}
	  	 }
	  }
])

// quiz

db.zips.aggregate([
	{$group:{
	  	_id:'$state',
	  	population:{$sum:'$pop'}
	  }
	}
])



// using $avg

db.products.aggregate([{
  	$group:{
  	  	_id : {
  	  	  category: '$category'},
  	  	  avg:{$avg:'$price'}}
  	}
])


// quiz
db.zips.aggregate([
	{$group:
	  	{_id:'$state',
	  	  avg:{$avg:'$pop'}
	  	}
	}
])


// using  $addToSet

db.products.aggregate([
	{$group:{
	  _id: { maker: '$manufacturer'},
	  category: {$addToSet:'$category'}
	  }
 }])


 // quiz
 db.zips.aggregate([
	{$group:
	  {_id:'$city',
	    postal_codes:{$addToSet:'$_id'}
	   }
	 }
])



// Using $Push

db.products.aggregate([{
  	$group:{
  	  	_id:{maker:'$manufacturer'},
  	  	categories:{$push:'$category'}
  	  }
}])



// Using $max and $min

db.products.aggregate([{
  	$group:{
  	  	_id:{maker:'$manufacturer'},
  	  	categories:{$max:'$price'}
  	  }
}])


db.products.aggregate([{
  	$group:{
  	  	_id:{maker:'$manufacturer'},
  	  	categories:{$min:'$price'}
  	  }
}])



// quiz
db.zips.aggregate([
	{$group:
	  	{	_id:'$state',
	  	  pop:{$max:'$pop'}
	  	  }
	 }
])








// Double $group stages

// class 30
s1 ={'student_id' : 1,'score' : 10,'class_id' : 30,'type': 'homework'};
s2 ={'student_id' : 1,'score' : 20,'class_id' : 30,'type': 'quiz'};
s3 ={'student_id' : 1,'score' : 50,'class_id' : 30,'type': 'final test'};
s4 ={'student_id' : 2,'score' : 100,'class_id' : 30,'type': 'exam'};
s5 ={'student_id' : 2,'score' : 10,'class_id' : 30,'type': 'homework'};
s6 ={'student_id' : 2,'score' : 20,'class_id' : 30,'type': 'quiz'};
s7 ={'student_id' : 2,'score' : 50,'class_id' : 30,'type': 'final test'};
s8 ={'student_id' : 2,'score' : 100,'class_id' : 30,'type': 'exam'};

db.students.insert(s1);
db.students.insert(s2);
db.students.insert(s3);
db.students.insert(s4);


// class 31
s1 ={'student_id' : 1,'score' : 10,'class_id' : 31,'type': 'homework'};
s2 ={'student_id' : 1,'score' : 20,'class_id' : 31,'type': 'quiz'};
s3 ={'student_id' : 1,'score' : 50,'class_id' : 31,'type': 'final test'};
s4 ={'student_id' : 2,'score' : 100,'class_id' : 31,'type': 'exam'};
s5 ={'student_id' : 2,'score' : 10,'class_id' : 31,'type': 'homework'};
s6 ={'student_id' : 2,'score' : 20,'class_id' : 31,'type': 'quiz'};
s7 ={'student_id' : 2,'score' : 50,'class_id' : 31,'type': 'final test'};
s8 ={'student_id' : 2,'score' : 100,'class_id' : 31,'type': 'exam'};


db.students.insert(s1);
db.students.insert(s2);
db.students.insert(s3);


//single group
db.students.aggregate([{$group:{_id:{class_id:'$class_id', student_id:'$student_id'}, average:{$sum:'$score'}}}])
// double group
db.students.aggregate([{$group:{_id:{class_id:'$class_id', student_id:'$student_id'}, average:{$sum:'$score'}}},{$group:{_id:'$_id.class_id', average:{$avg:'$average'}}}])


// quiz

db.fun.insert({ "_id" : 0, "a" : 0, "b" : 0, "c" : 21 })
db.fun.insert({ "_id" : 1, "a" : 0, "b" : 0, "c" : 54 })
db.fun.insert({ "_id" : 2, "a" : 0, "b" : 1, "c" : 52 })
db.fun.insert({ "_id" : 3, "a" : 0, "b" : 1, "c" : 17 })
db.fun.insert({ "_id" : 4, "a" : 1, "b" : 0, "c" : 22 })
db.fun.insert({ "_id" : 5, "a" : 1, "b" : 0, "c" : 5 })
db.fun.insert({ "_id" : 6, "a" : 1, "b" : 1, "c" : 87 })
db.fun.insert({ "_id" : 7, "a" : 1, "b" : 1, "c" : 97 })


db.fun.aggregate([{$group:{_id:{a:"$a", b:"$b"}, c:{$max:"$c"}}}])
db.fun.aggregate([{$group:{_id:{a:"$a", b:"$b"}, c:{$max:"$c"}}}, {$group:{_id:"$_id.a", c:{$min:"$c"}}}])



// using $project
db.products.aggregate([{
  	$project:{
  	  	_id:0,
  	  	maker:{$toLower:'$manufacturer'},
  	  	details:{category:'$category', price:{$multiply:['$price',10]}},
  	  	item: '$name'
  	  }
  	}
 ])


// quiz
 db.zips.aggregate([{
  	$project:{
  	  	_id:0,
  	  	city:{$toLower:'$city'},
  	  	pop:1,
  	  	state:1,
  	  	zip: '$_id'
  	  }
  	}
 ])

 // using $match

 db.zips.aggregate([
	{$match:
	  {
	    state:'CA'
	   }
	},
	{$group:
	  	{
	  	  _id:'$city',
	  	  pop: {$sum:'$pop'},
	  	  zip_codes:{$addToSet:'$_id'}
	  	 }
	 },
	 {$project:
	   	{
	   	  _id:0,
	   	  city:'$_id',
	   	  pop:1,
	   	  zip_codes:1
	   	}
	 }
])

// quiz
db.zips.aggregate([{$match:{pop:{$gt:100000}}}])



// using $sort

db.zips.aggregate([
	{$match:
	  {
	    state:'NY'
	   }
	 },
	 {$group:
	   {
	     _id:'$city',
	     pop:{$sum:'$pop'}
	   }
	 },
	 {$project:
	   {
	     _id:0,
	     city: '$_id',
	     pop:1
	   }
	 },
	 {$sort:
	   {
	     pop:-1
	   }
	 }
])

// quiz
db.zips.aggregate([{$sort:{state:1, city:1}}])




// using $limit and $skip
db.zips.aggregate([
	{$match:
	  {
	    state:'NY'
	   }
	 },
	 {$group:
	   {
	     _id:'$city',
	     pop:{$sum:'$pop'}
	   }
	 },
	 {$project:
	   {
	     _id:0,
	     city: '$_id',
	     pop:1
	   }
	 },
	 {$sort:
	   {
	     pop:-1
	   }
	 },
	 {$skip:10},
	 {$limit:5}
])


// revisiting $first and $last

db.zips.aggregate([
	{$group:
	  	{
	  	  _id:{state:'$state', city:'$city'},
	  	  pop:{$sum:'$pop'}
	  	 }
	 },
	 {$sort:
	   {
	     '_id.state':1,
	     pop:-1
	   }
	  },
	  {$group:
	    {
	      _id:'$_id.state',
	      city:{$first:'$_id.city'},
	      pop:{$first:'$pop'}
	    }
	  },
	  {$sort:
	    {
	      _id:1
	    }
	  }
])


// using $unwind

db.posts.aggregate([
	{$unwind:'$tags'},

	{$group:
	  {
	    _id:'$tags',
	    count:{$sum:1}
	  }
	},
	{$sort:{count:-1}},
	{$limit:10},
	{$project:
	  {
	    _id:0,
	    tag:'$_id',
	    count:1
	  }
	}
])



// double $unwind

db.inventory.aggregate([
	{$unwind:'$sizes'},
	{$unwind:'$colors'},
	{$group:
	  {
	    _id:{size:'$sizes', color:'$colors'},
	    count:{$sum:1}
	  }
	}
])


// reverse double unwind

db.inventory.aggregate([
	{$unwind:'$sizes'},
	{$unwind:'$colors'},
	{$group:
	  {
	    _id:{name:'$name', size:'$sizes'},
	    colors:{$push:'$colors'}
	  }
	},
	{$group:
	  	{
	  	  _id:{name:'$_id.name', colors: '$colors'},
		   sizes:{$push: '$_id.size'}
		}
	},
	{$project:
	  {
	    _id:0,
	    name:'$_id.name',
	    sizes:1,
	    colors: '$_id.colors'
	  }
	}
])


// homework 5.1


db.small_posts.aggregate([
	{$unwind:'$comments'},
	{$group:
	  {
	    _id: '$comments.author',
	    count:{$sum:1}
	   }
	 },
	 {$sort:{count:-1}}
])



