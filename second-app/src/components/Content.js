import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'One half pound bag of Cocoa Covered Almonds Unsalted'
        },
        {
            id: 2,
            checked: false,
            item: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'Item 3'
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

        setItems(listItems);

        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);

        setItems(listItems);
        localStorage.setItem('shopping', JSON.stringify(listItems));
    }

    return (
        <main>
            <section>
                <header>
                    <h2>Groceries List</h2>
                </header> 
                {
                    items.length > 0 ? ( <ul>{ items.map((item) => (
                        <li className="item" key={item.id}>
                            <input type="checkbox" 
                            onChange={() => handleCheck(item.id)} cheked={item.checked} />
                            <label>{item.item}</label>
                            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0"/>
                        </li>)) 
                    }</ul>) : (
                        <p style={{ marginTop: '2rem' }}>Your list is empty!</p>
                    )
                }
            </section>
        </main>
    );
}

export default Content;
