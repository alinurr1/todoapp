import React, {useEffect} from 'react';
import TodoList from '../Todo/TodoList';
import Context from '../context';
import Loader from '../loader';
import Modal from '../Modal/Modal';
import Jumbotron from '../Jumbotron/Jumbotron';
import TypeTodo from '../Todo/TypeTodo';

const AddTodo = React.lazy(() => import('../Todo/AddTodo'));

export default function Main(){
    const [todos, setTodos] = React.useState([]);
    const [type, setType] = React.useState("ALL");
    const [loading, setLoading] = React.useState(true);

    function toggleTodo(id){
        setTodos(todos.map(todo => {
        if(todo.id === id) todo.completed = !todo.completed;
        return todo;
        }));
    }

    function changeType(type){
        setType(type);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
        setTimeout(()=>{
            setTodos(todos);
            setLoading(false);
        }, 1000);
        })
    }, []);

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
        todos.concat([
            {
            title,
            id: Date.now(),
            completed: false
            }
        ])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>

        <Jumbotron />

        <div className="row">
        <div class="col">
            {loading && <Loader />}
            {todos.length ? (<><TodoList todos={todos} displayType={type} onToggle={toggleTodo}/>
                            <TypeTodo changeType={changeType}/></>) 
                        : loading ? null : (<Modal />)}
            <React.Suspense fallback={<p>Loading...</p>}>
            <AddTodo  onCreate={addTodo}/>
            </React.Suspense>
        </div>
        </div>

        </Context.Provider>
    );

}