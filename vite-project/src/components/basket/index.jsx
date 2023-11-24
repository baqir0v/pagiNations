import React from 'react'
import useFetching from '../../hooks/fetching'
import useDarkMode from '../../hooks/darkmode';
import "./basket.scss"

function Basket() {
    const [darkmode, changeDarkTheme] = useDarkMode()
    const data = useFetching();
    console.log(data);
    return (
        <div className='adder'>
            <button onClick={changeDarkTheme}>Theme</button>
            <div className={`salamlar ${darkmode ? "dark" : ""}`}>
                {data && data.map((item) => (
                    <ul key={item.id}>
                        <img src={item.image} alt="" />
                        <li>{item.manufacturer}</li>
                        <li>{item.category}</li>
                        <li>{item.model}</li>
                        <li>{item.price}</li>
                        <button>Add Basket</button>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Basket