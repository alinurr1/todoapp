import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props){
    let todos = props.todos.filter((todo) => {
        if(props.displayType === "ACTIVE" && todo.completed === false) return todo;
        if(props.displayType === "COMPLETED" && todo.completed === true) return todo;
        else if(props.displayType === "ALL") return todo;
        return null;
    })

    todos = todos.map((todo, index) => {
        return <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    index={index}
                    type={props.type}
                    onChange={props.onToggle}
                />
    });

    return (
        <ul className="list-group" style={styles.ul}>
            {todos}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;