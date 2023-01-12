import React from "react";
import { useState } from "react";


const Input = () => {

    const [items, setItems] = useState([]);//guarda un array de los elementos agregados en el input
    const [name, setName] = useState('')//guarda una cadena vacía que almacena el valor del input

    const addElement = () => {//agrega un nuevo objeto al estado items con el nombre del input del usuario.
        if(name.trim() !== ""){//comprueba que el input no sea una cadena vacía
            const newItem = {name: name};
            setItems([...items, newItem]);
        }
    };

    window.onkeyup = keyup;


    function keyup(e) {//cuando se ejecuta esta función se actualiza el estado name con el valor del input
        setName(e.target.value);
        if (e.keyCode === 13) {
            addElement();
            e.target.value = '';
        }
    }
    
    return (
        <h2>
                <input type="text" placeholder="Que quieres anotar?"/>
            <ul className="flex flex-col mt-5 text-center">
                {/* <TodoList /> */}
                {items.map((item, index) => (//itera sobre el estado items, que es un arreglo de objetos que contiene el nombre y el estado de tachado para cada elemento.
                    <li //se crea un li para cada elemento del estado items.
                    onClick={() => {//
                        const newItems = [...items];//Se crea una copia del estado actual de los items,
                        newItems[index].isUnderlined = !newItems[index].isUnderlined;//, se cambia el estado tachado del item actual, 
                        setItems(newItems);//y luego se actualiza el estado con la copia de los items actualizada para que el estado tachado del elemento se invierta.
                    }} 
                    style={{textDecoration: item.isUnderlined //establece en función del estado del item, si es true se tacha el texto si no se remueve el tachado.
                        ? 'line-through'
                        : 'none'}} //operador ternario
                    >
                    {item.name}
                    </li>
                ))}
            </ul>
        </h2>
    )
}

export { Input };
