//db.test.people.find({c: 'Robson Duarte'},{a : true, _id : false})

/*
for(i = 0; i < 1000; i++){    
 names = ['exam', 'essay', 'quiz'];
    for(j=0; j < 3; j++){
            var student = {'student' : i, 'type' : names[j], score: Math.round(Math.random() * 100 )}
            db.scores.insert(student);
    }       
}    
*/

//db.scores.find({type: 'essay', score: 50}, {student: true, _id : false})
//db.scores.find({score : { $gt : 95 , $lte : 98 }, type : 'essay' } )

/*
db.people.insert({name : 'Robson'})
db.people.insert({name : 'Ana'})
db.people.insert({name : 'Cibele'})
db.people.insert({name : 'Antonio'})
db.people.insert({name : 'Aparecida'})
db.people.insert({name : 'Maria'})
db.people.insert({name : 'Joao'})
*/

/*
db.people.insert({name : 'Joao', profession: 'pescador'})
db.people.insert({name : 'Pedro', profession: 'Motorista'})
db.people.insert({name : 'China', age: 30 ,  profession: 'Motorista'})
*/



db.people.find()

















