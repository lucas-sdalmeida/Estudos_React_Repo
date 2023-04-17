import { useState } from 'react';

function Main() {
    const [name, setName] = useState('Dave');

    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Lucas', 'Kevin', 'Iedro', 'Dave'];
        const name = Math.floor(Math.random() * 4);

        setName(names[name]);
    }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    const handleClick2 = (name) => {
        console.log(count);
    };
    
    return (
        <main>
            <p>Hello World!</p>

            <p>Hello {name}!</p>

            <button onClick={handleNameChange}>Clique aqui</button>

            <button onClick={handleClick}>Clique aqui 2</button>
            
            <button onClick={handleClick2}>Clique aqui 3</button>
        </main>
    );
}

export default Main;
