import { TodoList } from "../todoList/TodoList";
import React from "react";
import { useState } from "react";


const Input = () => {

    const [items, setItems] = useState([]);
    const [name, setName] = useState('')

    const addElement = () => {
        const newItem = {name: name};
        setItems([...items, newItem]);
    };

    window.onkeyup = keyup;


    function keyup(e) {
        setName(e.target.value);
        if (e.keyCode == 13) {
            addElement();
        }
    }

    
    return (
        <h2>
            <input type="text"  placeholder="Que quieres anotar?"/>
            <ul>
                <TodoList item={items}/>
                {items.map((item, index) => (<li key={index}>{item.name}</li>))}
            </ul>
        </h2>
    )
}

export { Input };
