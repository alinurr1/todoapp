import React from 'react';

import { TodoListProps } from './interfaces';

const TodoList: React.FC<TodoListProps> = props => {
    if (props.todos.length === 0) return <h4>No tasks yet.</h4>

    return(
        <ul>
            {props.todos.map(todo => {
                const classes: string[] = ["todo"];
                if(todo.completed) classes.push("completed");

                return (
                <li className={classes.join(' ')} key={todo.id}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={props.onToggle.bind(null, todo.id)}
                        >
                        </input>
                        <span>{todo.title}</span>
                        <i 
                            className="material-icons red-text" 
                            onClick={() => props.onRemove(todo.id)}>
                        delete</i>
                    </label>
                </li>);
            })}
        </ul>
    )
}

export default TodoList;