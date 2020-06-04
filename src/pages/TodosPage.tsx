import React, { useState, useEffect } from 'react';

import { ITodo } from '../components/interfaces';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
        prev.map(todo => {
        if (todo.id === id) {
            return {
            ...todo,
            completed: !todo.completed
            }
        }
        return todo
        }))
    }

    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
            <TodoForm onAdd={addHandler}/>
        </>
    );
}

export default TodosPage;