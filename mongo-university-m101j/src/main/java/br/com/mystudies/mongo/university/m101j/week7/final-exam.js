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

