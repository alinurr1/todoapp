import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue);

    return{
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('');

    function submitHandler(event){
        event.preventDefault();
        if(input.value().trim()){
            onCreate(input.value());
            input.clear();
            //setValue('');
        }
    }

    return(
        <form className="input-group mb-3" style={{marginTop: "1rem"}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button className="btn btn-success" type="submit">Add Todo</button>
        </form>
    )    
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;