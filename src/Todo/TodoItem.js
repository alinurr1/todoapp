import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: ".5 rem 1 rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: ".5rem"

    },
    input : {
        marginRight: "1rem"
    }
}

function TodoItem ({todo, index, onChange}){
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(todo.completed) classes.push("done");

    return (
    <li className="list-group-item" style={styles.li}>
        <span className={classes.join(' ')}>
            <input checked={todo.completed}
                style={styles.input} 
                type="checkbox" 
                onChange={() => onChange(todo.id)}
            />
            <strong>{index+1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className="close" onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;