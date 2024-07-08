import React, { useState } from "react";



export default function Counter(){
    // let count = 0

    // const handlePlus = () => {
    //     count++
    //     console.log(count);
    // }

    const [count, setCount] = useState(0)

    const handlePlus = () => {
    setCount(prev => prev + 1)

    }

    const handleMinus = () => {
        setCount(prev => prev - 1)
    
        }




    return(
        <div className="lesson-container">
            <h4>Counter</h4>
            <div> 
            <button onClick={handleMinus}>-</button>
            <span>{count}</span>
            <button onClick= {handlePlus}>+</button>
            </div>
            <p>Mы не можем хранить изменяемые данные в React в классических
                переменных, потому что мы не будем видеть их изменения на странице: 
                Компонент не будет обновляться</p>
            <p>В каких случаях происходит обновление данных?</p>
            <ol>
                <li>Изменение состояния (state)</li>
                <li>Изменения props</li>
            </ol>
        </div>
    );
}