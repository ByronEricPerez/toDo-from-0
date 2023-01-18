import { useState } from "react";

const Input = () => {

    const [items, setItems] = useState([]);//guarda un array de los elementos agregados en el input.
    const [name, setName] = useState('')//guarda una cadena vacía que almacena el valor del input.
    const [isAdding, setIsAdding] = useState(false);//guarda un booleano con valor false.
    const [filtro, setfiltro] = useState('todos');
    const copiaListado = [...items];

    const addElement = () => {//agrega un nuevo objeto al estado items con el nombre del input del usuario.   
        if(name.split(' ').join('') || !/^\s/.test(name)){//comprueba que el input no sea una cadena vacía.
            let newItem = {name: name};
            if(!copiaListado.some((item) => item.name === newItem.name)){
                copiaListado.push(newItem);
                setItems([...items, newItem]);
            }
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
        
    function incompletos(){
        setfiltro('incompletos')
    }

    function completos(){
        setfiltro('completados')
    }

    function borrarCompletos(){
        setfiltro('borrarCompletados')
    }

    function todos(){
        setfiltro('todos')
    }

    function obtenerTodoCompletados(){
        let todoCompletados = [];
        for(let i = 0; i < items.length; i ++){
            if(items[i].isUnderlined){
                todoCompletados.push(items[i])
            }
        }
        return todoCompletados;
    };

    function obtenerTodoIncompletos(){
        let todoIncompletos = [];
        for(let i = 0; i < items.length; i ++){
            if(!items[i].isUnderlined){
                todoIncompletos.push(items[i])
            }
        }
        return todoIncompletos;
    };

    function eliminarElementosCompletados(){
        for(let i = 0; i < items.length; i ++){
            if(items[i].isUnderlined){   
                items.splice( i , 1 );
            }
        }
        return items;
    };

    let todoAMostrar = [];
    if(filtro === 'completados'){
        todoAMostrar = obtenerTodoCompletados();
    }
    if(filtro === 'incompletos'){
        todoAMostrar = obtenerTodoIncompletos();
    }
    if(filtro ==='borrarCompletados'){
        todoAMostrar = eliminarElementosCompletados();
    }
    if(filtro === 'todos'){
        todoAMostrar = items;
    }

    return (
        <div>
            <div>
                <input type="text" className="appearance-none block w-full bg-orange-200 text-orange-600 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Que quieres anotar?"/>
            </div>
            <ul className="flex flex-col mt-5 text-center bg-orange-200 border border-green-300 rounded mt-7 mb-9">
                {/* <TodoList /> */}
                {todoAMostrar.map((item, index) => (//itera sobre el estado items, que es un arreglo de objetos que contiene el nombre y el estado de tachado para cada elemento.
                    <li className="border border-green-300"//se crea un li para cada elemento del estado items.
                    onClick={() => {//
                        const newItems = [...items];//Se crea una copia del estado actual de los items.
                        newItems[index].isUnderlined = !newItems[index].isUnderlined;// se cambia el estado tachado del item actual.
                        setItems(newItems);//y luego se actualiza el estado con la copia de los items actualizada para que el estado tachado del elemento se invierta.
                    }} 
                    style={{textDecoration: item.isUnderlined //establece en función del estado del item, si es true se tacha el texto si no se remueve el tachado.
                    ? 'line-through'
                    : 'none',
                background: item.isUnderlined
                    ? '#E4C988'
                    : 'none'
                }} //operador ternario.
                >
                    {item.name}
                    </li>
                ))}
            </ul>
            
            <div className="flex space-x-4 text-center grid justify-items-center mb-5">

                    <button 
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded rounded-full" 
                        onClick={todos}
                        //btn encargado de eliminar los objetos que cumplen la condicion (item.isUnderlined)
                    >Todos</button>

            </div>

            <div className="flex space-x-4 text-center">

                    <button 
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded" 
                        onClick={borrarCompletos}
                        //btn encargado de eliminar los objetos que cumplen la condicion (item.isUnderlined)
                    >Borrar Completados</button>

                    <button
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded"
                        onClick={incompletos}
                        //btn encargado de mostrar los objetos que cumplen la condicion (!item.isUnderlined)
                    >Faltantes</button>

                    <button
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded"
                        onClick={completos}
                        //btn encargado de mostrar los objetos que cumplen la condicion (item.isUnderlined)
                    >Completados</button>

            </div>
        </div>
    )
}

export { Input };
