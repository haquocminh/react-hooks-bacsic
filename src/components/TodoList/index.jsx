import React, { useState } from 'react';
import ListItem from './ListItem';
import FormItem from './FormItem';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! 😍 ' },
        { id: 2, title: 'We love Easy Frontend! 🥰 ' },
        { id: 3, title: 'They love Easy Frontend! 🚀 ' },
        ]);

    function handleTodoClick(todo){
        const index = todoList.findIndex ( x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList]; // clone mot mang moi tu todoList
        newTodoList.splice(index,1);
        setTodoList(newTodoList);
    }

    function handleSubmit(items){
        const newTodo = {
            id: todoList.length + 1,
            ...items
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <div className="app">
            <h1>React Hook - Todolist</h1>
            <FormItem onSubmit={handleSubmit}/>
            <ListItem todos={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoList;