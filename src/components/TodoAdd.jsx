import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import MyTitile from "./MyComponents/MyTitile";
import MyButton from "./MyComponents/MyButton";

const TodoAdd = () => {
    const [item, setItem] = useState({id: "", name: ""});
    const dispatch = useDispatch();

    const add = () => {
        const newItem = {
            ...item,
            id: Date.now(),
            completed: false
        };
        dispatch({type: 'add', payload: newItem});
        setItem({id: "", name: ""})
    };


    return (
        <div>
            <MyTitile
                title="Add Item"
            />
            <hr/>
            <div className="header flex">
                <input className="input" onChange={e => setItem({...item, name: e.target.value})} type="text"
                       value={item.name}/>
                <MyButton
                    hundleClick={add}
                    name="add"
                />
            </div>
        </div>
    );
};

export default TodoAdd;