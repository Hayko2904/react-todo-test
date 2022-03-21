import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import MyTitile from "./MyComponents/MyTitile";
import MyButton from "./MyComponents/MyButton";

const TodoList = ({todoList, completed, hundleCompleted, title}) => {
    const dispatch = useDispatch();
    const refElem = useRef([]);
    const [editing, setEditing] = useState([]);

    const editItem = (id) => {
        if (!editing.includes(id)) {
            setEditing([...editing, id])
        } else {
            setEditing([...editing.filter(item => item !== id)]);
            dispatch({type: "edit", payload: {...todoList.find(e => e.id === id), name: refElem.current[id].innerText}})
        }
    };

    const removeItem = (id) => {
        dispatch({type: "delete", payload: id})
    };

    return (
        <div>
            <MyTitile
                title={title}
            />
            <hr/>
            <ul>
                {todoList.filter(e => e.completed === completed).map((item) =>
                    <li key={item.id} className="flex">
                        <div>
                            <input checked={completed} type="checkbox" onChange={() =>
                                hundleCompleted(item.id)
                            }/>
                            <span className="title" ref={(el) =>
                                refElem.current[item.id] = el
                            }
                                  contentEditable={editing.includes(item.id)}
                            >
                                {item.name}
                            </span>
                        </div>
                        <div className="flex">
                            <MyButton
                                hundleClick={() => editItem(item.id)}
                                name="edit"
                            />
                            <MyButton
                                hundleClick={() => removeItem(item.id)}
                                name="delete"
                            />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

TodoList.prototype = {
    completed: Boolean,
    todoList: Array,
    hundleCompleted: Function,
    title: String
}

export default TodoList;