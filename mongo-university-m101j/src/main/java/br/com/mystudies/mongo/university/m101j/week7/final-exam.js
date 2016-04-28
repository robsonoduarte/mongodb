// question 1
// query for reference
db.messages.find({$and:[ {'headers.From' : 'andrew.fastow@enron.com'}, {'headers.To' : 'john.lavorato@enron.com'}]}).count()

// the query of question
db.messages.find({$and:[ {'headers.From' : 'andrew.fastow@enron.com'}, {'headers.To' : 'jeff.skilling@enron.com'}]}).count()

