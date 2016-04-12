db.posts.createIndex({date:-1})
db.posts.find().sort({date:-1}).limit(10).explain("executionStats")

db.posts.createIndex({tags:1})
db.posts.find({tags:{$in:['rate']}}).sort({data:-1}).limit(10).explain("executionStats")

db.posts.createIndex({permalink:1})
db.posts.find({permalink:'cxzdzjkztkqraoqlgcru'}).explain("executionStats")

