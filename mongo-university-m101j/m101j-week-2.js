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


// cursors
var cur = db.people.find()

cur.sort({name: -1}).limit(4).skip(2)

while(cur.hasNext()){
    print(cur.next())
}    


// counting results
db.scores.count({type: 'essay', score: { $gt: 90 }})


//examples of update
db.people.update({name: 'Robson Duarte'}, { name: 'Robson Duarte', job: 'Engineer'})
db.people.find()

// using $set 
db.people.update({name: 'Robson Duarte'}, { $set : { job: 'Engineer Sotfware'}})
db.people.update({name: 'Robson Duarte'}, { $set : { age: 39}})
db.people.update({name: 'Robson Duarte'}, { $inc : { age: 1}})

db.users.find()

db.users.update({username: 'splunker'}, { $set : { country : 'RU'}})
db.users.update({username: 'jimmy'}, { $unset : { interests : 1}})

// Example $push , $pop, $pull, $pushAll, $pullAll, $addToSet

db.arrays.insert({_id: 0, a: [ 1,2,3,4] })

db.arrays.find()



db.arrays.update({_id: 0 }, { $set: { 'a.2' : 5 } })
db.arrays.update({_id: 0 }, { $push: { a : 6 } })
db.arrays.update({_id: 0 }, { $pop: { a : 1 } })
db.arrays.update({_id: 0 }, { $pushAll: { a : [7,9,10] } })
db.arrays.update({_id: 0 }, { $pull: { a : 2 } })
db.arrays.update({_id: 0 }, { $pullAll: { a : [3,4] } })
db.arrays.update({_id: 0 }, { $addToSet: { a : 10 } })


db.friends.insert({ _id : "Mike", interests : [ "chess", "botany" ] })
db.friends.update( { _id : "Mike" }, { $push : { interests : "skydiving" } } );
db.friends.update( { _id : "Mike" }, { $pop : { interests : -1 } } );
db.friends.update( { _id : "Mike" }, { $addToSet : { interests : "skydiving" } } );
db.friends.update( { _id : "Mike" }, { $pushAll: { interests : [ "skydiving" , "skiing" ] } } );

db.friends.find()


// example of upsert
db.people.update({name: 'Antonio Rodrigues Duarte'}, {$set: { age: 65 }}, {upsert: true})
db.people.find({name: 'Antonio Rodrigues Duarte'})


db.foo.update( { username : 'bar' }, { '$set' : { 'interests': [ 'cat' , 'dog' ] } } , { upsert : true } )
db.foo.find()


// example of multi update
db.people.update({}, { $set : { nationality: 'Brazilian'}}, {multi: true})
db.people.find()





db.scores.find({score: {$lt : 70 }})
db.scores.update({score: {$lt : 70 }}, { $inc : { score: 20}}, {multi: true})


