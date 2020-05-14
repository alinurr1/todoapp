import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './loader';
import NavBar from './Navigation/NavBar';
import Modal from './Modal/Modal';
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from './Footer/Footer';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    }));
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

      <NavBar />

      <div className="row">
        <div class="col">
          <Jumbotron />
          <hr></hr>
        </div>
      </div>
      
      <div className="row">
        <div class="col">
          {loading && <Loader />}
          {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}/>) 
                        : loading ? null : (<Modal />)}
          <React.Suspense fallback={<p>Loading...</p>}>
            <AddTodo  onCreate={addTodo}/>
          </React.Suspense>
        </div>
      </div>
      
      <div className="row">
        <div class="col">
          <br></br>
          <hr></hr>
          <Footer />
        </div>
      </div>

    </Context.Provider>
  );
}

export default App;
