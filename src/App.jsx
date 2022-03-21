import React, {useState, useEffect, useRef} from 'react';
import styles from './styles/app.scss'
import {useDispatch, useSelector} from "react-redux";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import './styles/app.scss'


function App() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const completedTodo = (id) => {
        dispatch({type: 'completed', payload: id})
    }

    return (
        <div className="App">
            <TodoAdd />
            <div>
                <TodoList
                    title="Todo"
                    todoList={state.todo}
                    completed={false}
                    hundleCompleted={completedTodo}
                />
            </div>
            <div>
                <TodoList
                    title="Completed"
                    todoList={state.todo}
                    completed={true}
                    hundleCompleted={completedTodo}
                />
            </div>
        </div>
    );
}

export default App;
