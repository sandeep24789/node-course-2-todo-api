const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name:'Sandeep',age:29};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');
    
// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b41ef0f907874d5e2dce273')
// },{
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b41f22c907874d5e2dce39f')
    },{
        $set: {
            name: 'Sandeep'
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    });

//client.close();
});