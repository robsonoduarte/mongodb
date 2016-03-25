// MonogoDB University M101J Week 2 -> Mongo Shell, Query Operators, Update Operators and a Few Commands



for(i = 0; i < 1000; i++){    
 names = ['exam', 'essay', 'quiz'];
    for(j=0; j < 3; j++){
            var student = {'student' : i, 'type' : names[j], score: Math.round(Math.random() * 100 )}
            db.scores.insert(student);
    }       
} 


// examples of $gt, $lt and using field selection 
db.scores.find({type: 'essay', score: 50}, {student: true, _id : false})
db.scores.find({score : { $gt : 95 , $lte : 98 }, type : 'essay' } )



db.people.insert({name : 'Robson'})
db.people.insert({name : 'Ana'})
db.people.insert({name : 'Cibele'})
db.people.insert({name : 'Antonio'})
db.people.insert({name : 'Aparecida'})
db.people.insert({name : 'Maria'})
db.people.insert({name : 'Joao'})
db.people.insert({name : 'Joao', profession: 'pescador'})
db.people.insert({name : 'Pedro', profession: 'Motorista'})
db.people.insert({name : 'China', age: 30 ,  profession: 'Motorista'})
db.people.insert({name : 23, profession: 'pescador'})
db.people.insert({name : true, profession: 'pescador'})





// examples of $regex $exists $type
db.people.find({ profession: { $exists: true }})
db.people.find({ name: { $type: 1 }})
db.people.find({ name: { $regex: 'a$' }})
db.people.find({ name: { $regex: 'a' }, profession: { $exists: true }})



// exaples or $or
db.people.find({$or : [{name: {$regex: 'a$'}}, {age : { $exists: true }} ] } )
db.scores.find({$or: [ { score: {$lt: 50}}, { score: { $gt: 90}} ] } )

// exmpale of $and
db.people.find({$and : [{name: {$regex: 'a$'}}, {age : { $exists: true }} ] } )
db.people.find({name: {$regex:'a$'}, age: {$exists: true}}) // short form without $and
db.scores.find( { score : { $gt : 50 }, score : { $lt : 60 } } ); 




// query in array
db.accounts.insert( { name: 'Robson', favorites : [ 'ice cream', 'pretzels']})
db.accounts.insert( { name: 'Robson Duarte', favorites : [ 'Studies', 'Programmer']})
db.accounts.insert( { name: 'Ana', favorites : [ 'Beer', 'Cana', 'Party']})
db.accounts.insert( { name: 'Tamara', favorites : [ 'Beer', 'Cana', 'Party']})
db.accounts.insert( { name: 'Thiago', favorites : [ 'Beer', 'Beach', 'Party']})
db.accounts.insert( { name: 'Didi', favorites : [ 'Forro', 'Beer', 'Party']})
db.accounts.insert( { name: 'Gardenal', favorites : 'Gardneal' })
db.accounts.insert( { name: 'Gardenal', favorites : ['Gardneal'] })

db.accounts.find( {favorites: 'Gardneal'})


// examples of $in and $all
db.accounts.find( {favorites: { $in: [ 'Programmer', 'ice cream']}})



// queries with dot notation
var obj = { name : 'Robson Duarte', email : { work : 'rduarte@r3wa.com.br', personal : 'robson.o.d@gmail.com'}}
db.users.insert(obj)

//match the document because the filter have exactly the structure of embedded email document
db.users.find({email : { work : 'rduarte@r3wa.com.br', personal : 'robson.o.d@gmail.com'}})
//dont't match the document because the filter havent exactly the structure of embedded email document
db.users.find({email : { personal : 'robson.o.d@gmail.com',work : 'rduarte@r3wa.com.br'}})
db.users.find({email : {work : 'rduarte@r3wa.com.br'}})

// use the dot notation to access the attr of embedded document
db.users.find({'email.work' : 'rduarte@r3wa.com.br'})

var p1 = { product : "p1", 
  price : 9,
  reviews : [ { user : "fred", comment : "Great!" , rating : 5 },
              { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 4 } ]}

var p2 = { product : "p2", 
  price : 11,
  reviews : [ { user : "fred", comment : "Great!" , rating : 6 },
              { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 4 } ]}

var p3 = { product : "p3", 
  price : 12,
  reviews : [ { user : "fred", comment : "Great!" , rating : 5 },
              { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 4 } ]}

var p4 = { product : "p4", 
  price : 13,
  reviews : [ { user : "fred", comment : "Great!" , rating : 3 },
              { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 3 } ]}

db.catalog.insert(p1)
db.catalog.insert(p2)
db.catalog.insert(p3)
db.catalog.insert(p4)              


db.catalog.find({price: {$gt: 10}, 'reviews.rating' : {$gte: 5}})





