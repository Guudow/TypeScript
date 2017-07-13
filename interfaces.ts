/*
function showTodo(todo: {title: string, Text: string}){
    console.log(todo.title+': '+todo.Text);
}

let myTodo = {title:'Trash', text: 'Take out trash'}

showTodo(myTodo); */

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo){
    console.log(todo.title+': '+todo.text);
}
let myTodo = {title:'Trash', text: 'Take out trash'}
showTodo(myTodo);