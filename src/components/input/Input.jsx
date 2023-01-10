import { TodoList } from "../todoList/TodoList";
import React from "react";
import { useState } from "react";


const Input = () => {

    const [state, setState] = useState(initialState);

    const change = () => {
        setState(prevState => ({...prevState, todo:}));
    };


    // window.onkeyup = keyup;
    // let inputTextValue;
    // let lista = [];

    // function keyup(e) {
    //     inputTextValue = e.target.value;
    //     if (e.keyCode == 13) {
    //         setState.push(inputTextValue);
    //         console.log(setState);
    //     }
    // }

    
    return (
        <h2>
            <input type="text" placeholder="Que quieres anotar?"/>
        </h2>
    )
}

export { Input };
