// QUESTION 1
// query for reference
db.messages.find({$and:[ {'headers.From' : 'andrew.fastow@enron.com'}, {'headers.To' : 'john.lavorato@enron.com'}]}).count()
// the query of question
db.messages.find({$and:[ {'headers.From' : 'andrew.fastow@enron.com'}, {'headers.To' : 'jeff.skilling@enron.com'}]}).count()






// QUESTION 2
db.messages.aggregate([
	{$unwind: '$headers.To'},
	{$group:
	  {
	    _id:{id: '$_id', from: '$headers.From', to: '$headers.To'},
	    to:{$addToSet:'$headers.To'}
	  }
	},
	{
	   $unwind:'$to'
 	},
	{$group:
	  {
	    _id:{from: '$_id.from', to: '$_id.to'},
	    count:{$sum:1}
	  }
	},
	{$sort:{count:-1}},
	{$limit:10}
],
{allowDiskUse: true}
)




// QUESTION 3

db.messages.find({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'})
db.messages.update({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'}, {$addToSet:{'headers.To': 'mrpotatohead@mongodb.com'}})



// QUESTION 4

// example update
db.posts.update({permalink : 'cxzdzjkztkqraoqlgcru'}, { $inc : { 'comments.2.num_likes': 1}})

// with java drive
 String num_likes = "comments." + ordinal + ".num_likes";
postsCollection.updateOne(eq("permalink", permalink), inc(num_likes, 1));


// QUESTION 5

for(i=0; i<100; i++){
	for(j=0; j<100; j++){
  		x = [];
  		for(k=0; k<100; k++){
  			x.push({a: i, b: j, c:k , _id: (100* 100* i + 100 * j + k)});
		}
		db.stuff.insert(x)
	}
}



db.stuff.createIndex({a:1, b:1})
db.stuff.createIndex({a:1, c:1})
db.stuff.createIndex({c:1})
db.stuff.createIndex({a:1, b:1, c:-1})

db.stuff.getIndexes()


db.stuff.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1}).explain('allPlansExecution')

