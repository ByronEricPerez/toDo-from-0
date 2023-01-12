import React from "react";
import { useState } from "react";


const Input = () => {

    const [items, setItems] = useState([]);//guarda un array de los elementos agregados en el input.
    const [name, setName] = useState('')//guarda una cadena vacía que almacena el valor del input.
    const [isAdding, setIsAdding] = useState(false);//guarda un booleano con valor false.

    const addElement = () => {//agrega un nuevo objeto al estado items con el nombre del input del usuario.
        if(name.trim() !== ""){//comprueba que el input no sea una cadena vacía.
            const newItem = {name: name};
            setItems([...items, newItem]);
        }
    };

    window.onkeyup = keyup;

    function keyup(e) {//cuando se ejecuta esta función se actualiza el estado name con el valor del input.
        setName(e.target.value);
        if (e.keyCode === 13) {
            if(!isAdding){//comprueba si la variable "isAdding" es false
                setIsAdding(true);//establece el valor de "isAdding" en true lo que indica que se está agregando un nuevo elemento.
                addElement();
                e.target.value = '';
            }   
        }else{
            setIsAdding(false);
        }
    };

    //solucionar!! se rompe al momento de llamar a esta funciona.
    function deleteItemComplete(items){
        console.log(items,'0') //corre funcion.
        for (let i = 0; i < items.length; i++){
            console.log(items,'1') //ya no corre.
            if(items[i].isUnderlined){
                items.splice(i,1);
                //console.log(items,'2')
            }
        }
        setItems(items)
    };

    function showIncomplete(){
        const itemsUnderlined = items.filter(item => !item.isUnderlined);//filtra solo los elementos del array donde el atributo isUnderlined es false.
        setItems(itemsUnderlined);
    };

    function showComplete(){
        const todoIncomplete = items.filter(item => item.isUnderlined);//filtra solo los elementos del array donde el atributo isUnderlined es true.
        setItems(todoIncomplete);
    };

    return (
        <div>
            <div>
                <input type="text" placeholder="Que quieres anotar?"/>
            </div>
            <ul className="flex flex-col mt-5 text-center">
                {/* <TodoList /> */}
                {items.map((item, index) => (//itera sobre el estado items, que es un arreglo de objetos que contiene el nombre y el estado de tachado para cada elemento.
                    <li //se crea un li para cada elemento del estado items.
                    onClick={() => {//
                        const newItems = [...items];//Se crea una copia del estado actual de los items.
                        newItems[index].isUnderlined = !newItems[index].isUnderlined;// se cambia el estado tachado del item actual.
                        setItems(newItems);//y luego se actualiza el estado con la copia de los items actualizada para que el estado tachado del elemento se invierta.
                    }} 
                    style={{textDecoration: item.isUnderlined //establece en función del estado del item, si es true se tacha el texto si no se remueve el tachado.
                        ? 'line-through'
                        : 'none'}} //operador ternario.
                    >
                    {item.name}
                    </li>
                ))}
            </ul>
            <div className="flex space-x-4 text-center">

                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
                        onClick={deleteItemComplete}
                    >Borrar Completados</button>

                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={showIncomplete}
                    >Faltantes</button>

                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={showComplete}
                    >Completados</button>

            </div>
        </div>
    )
}

export { Input };
