import React, { useState } from 'react';

import { ToDoFormProps } from './interfaces';

const TodoForm: React.FC<ToDoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const enterPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter"){
            props.onAdd(title);
            setTitle("");
        }
    }

    return(
        <div>
            <input
            onKeyPress={enterPressHandler}
            onChange={changeHandler} 
            value={title} 
            type="text" 
            id="title" 
            className="active input-field mt-15"
            />
            <label  htmlFor="title" className="active">Your task</label>
        </div>
    )
}

export default TodoForm;