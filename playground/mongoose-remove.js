const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( (result)=> {
// console.log(result);
// });

Todo.findByIdAndRemove('5b4600fa907874d5e2de5ee8').then((todo)=>{
    console.log(todo);
});