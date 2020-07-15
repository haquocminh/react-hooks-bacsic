import React from 'react';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    todos:PropTypes.array,
    onTodoClick: PropTypes.func,
};

ListItem.defaultProps = {
    todos : [],
    onTodoClick : null
}

function ListItem(props) {
    const {todos, onTodoClick} = props;

    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    }

    return (
        <div>
            <ul className="todo-list">
                {todos.map( todo => (
                    <li
                        key={todo.id}
                        onClick={ ()=> handleClick(todo) } 
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListItem;

