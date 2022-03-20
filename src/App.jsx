import React, {useState, useEffect, useRef} from 'react';
import styles from './styles/app.scss'
import {useDispatch, useSelector} from "react-redux";


function App() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [item, setItem] = useState({id: "", name: ""});
    const [checkbox, setCheckbox] = useState([]);
    const [editing, setEditing] = useState([]);
    const refElem = useRef([]);

    // useEffect(() => {
    //     console.log(state)
    // }, [state]);

    const add = () => {
        const newItem = {
            ...item,
            id: Date.now(),
        };
        dispatch({type: 'add', payload: newItem});
        setItem({id: "", name: ""})
    };

    const changeCheckbox = (id) => {
        setCheckbox(!checkbox.includes(id)
            ? [...checkbox, id]
            : [...checkbox.filter(item => item !== id)])
    };

    const editItem = (id) => {
        if (!editing.includes(id)) {
            setEditing([...editing, id])
        } else {
            setEditing([...editing.filter(item => item !== id)]);
            dispatch({type: "edit", payload: {id: id, name: refElem.current[id].innerText}})
        }
    };

    const removeItem = (id) => {
        dispatch({type: "delete", payload: id})
    };


    return (
        <div className="App">
            <div>
                <h1>ADD ITEM</h1>
                <hr/>
                <input onChange={e => setItem({...item, name: e.target.value})} type="text" value={item.name}/>
                <button onClick={add}>Add</button>
            </div>
            <div>
                <h1>Todo</h1>
                <hr/>
                <ul>
                    {state.todo.map((item) =>
                            <li key={item.id}>
                                <div>
                                    <input type="checkbox" onChange={() => changeCheckbox(item.id)} value={checkbox}/>
                                    <span ref={(el) => refElem.current[item.id] = el} contentEditable={editing.includes(item.id)}>{item.name}</span>
                                </div>
                                <div>
                                    <button onClick={() => editItem(item.id)}>edit</button>
                                    <button onClick={() => removeItem(item.id)}>delete</button>
                                </div>
                            </li>

                    )}
                </ul>
            </div>
            <div>
                <h1>Completed</h1>
                <hr/>
            </div>
        </div>
    );
}

export default App;
