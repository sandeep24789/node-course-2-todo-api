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
    // db.collection('Todos').find({_id:new ObjectID('5b40fb6c907874d5e2dcdaf1')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=> {
    //     console.log('Unable to fetch todos',err);
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=> {
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name:'Sandeep C'}).toArray().then((docs) => {
        // console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=> {
        console.log('Unable to fetch Users',err);
    });
//client.close();
});