import { useState } from "react";

const Input = () => {

    const [items, setItems] = useState([]);//guarda un array de los elementos agregados en el input.
    const [name, setName] = useState('')//guarda una cadena vacía que almacena el valor del input.
    const [isAdding, setIsAdding] = useState(false);//guarda un booleano con valor false.
    //const [originalItemsTodo, setOriginalItemsTodo] = useState([])

    // useEffect(() => {
    //     setOriginalItemsTodo([...items])
    //repasar useEffect
    // }, []);

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

    // function returnOriginalTodo() {
    //     setItems(originalItemsTodo)
    //funcion encargada de mantener los items originales ingresados por input , urgente!
    // };

    function deleteCompleteTodo(){
        const deleteComplete = items.filter(item => !item.isUnderlined);//filtra solo los elementos del array donde el atributo isUnderlined es false.
        setItems(deleteComplete);
    }

    function showIncompleteTodo(){
        let incomplete = [];
        for (let i = 0; i < items.length; i++){
            if(!items[i].isUnderlined){                
                incomplete.push(items[i])
            }
        }
        setItems(incomplete)
    };

    function showCompleteTodo(){
        let complete = [];
        for (let i = 0; i < items.length; i++){
            if(items[i].isUnderlined){                
                complete.push(items[i])
            }
        }
        setItems(complete)
    };

    return (
        <div>
            <div>
                <input type="text" className="appearance-none block w-full bg-orange-200 text-orange-600 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Que quieres anotar?"/>
            </div>
            <ul className="flex flex-col mt-5 text-center bg-orange-200 border border-green-300 rounded mt-7 mb-9">
                {/* <TodoList /> */}
                {items.map((item, index) => (//itera sobre el estado items, que es un arreglo de objetos que contiene el nombre y el estado de tachado para cada elemento.
                    <li className="border border-green-300"//se crea un li para cada elemento del estado items.
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
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded" 
                        onClick={deleteCompleteTodo}
                        //btn encargado de eliminar los objetos que cumplen la condicion (item.isUnderlined)
                    >Borrar Completados</button>

                    <button 
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded"
                        onClick={showIncompleteTodo}
                        //btn encargado de mostrar los objetos que cumplen la condicion (!item.isUnderlined)
                    >Faltantes</button>

                    <button 
                        className="bg-green-500 hover:bg-green-600 text-orange-300 font-bold py-2 px-4 border border-green-300 rounded"
                        onClick={showCompleteTodo}
                        //btn encargado de mostrar los objetos que cumplen la condicion (item.isUnderlined)
                    >Completados</button>

            </div>
        </div>
    )
}

export { Input };
