import React, { useRef } from "react";
            
// Hook useRef Crea un objeto que se mantiene consistente entre los diferentes renderizados del componente
// Cuando se utiliza useRef puedo acceder al valor que tengo ahora en mi componente, en este caso mi input
// El control useRef es más limitado, se utiliza para manejar el foco, para inicializar animaciones de manera interactiva, integrar con librerias estandar
const FormNoControlado = () => {

    const inputRef = useRef();

    const onClickButton = () => {
        console.log(inputRef.current.value);  //Obtengo el valor del input usando referencias
    }
    return (
        <div>
            <h1>Mi input</h1>
            <input ref={inputRef}/>
            <button onClick={onClickButton}>Continuar</button>
        </div>
    )
}

export default FormNoControlado;