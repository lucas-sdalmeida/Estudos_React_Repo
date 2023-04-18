import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [listOfItems, setListOfItems] = useState([
    {
        id: 1,
        checked: false,
        description: 'Item 1'
    },
    {
        id: 2,
        checked: true,
        description: 'Item 2'
    },
    {
        id: 3,
        checked: true,
        description: 'Item 3'
    }
  ]);

  function handleCheckChange(id) {
    const newList = listOfItems.map((item) => {
        if (item.id !== id) return item;

        const newItem = item;
        newItem.checked = !item.checked;

        return newItem;
    });

    setListOfItems(newList);

    localStorage.setItem("shopping", JSON.stringify(newList));
  }

  function deleteItem(id) {
      const newList = listOfItems.filter((item) => item.id !== id);

      setListOfItems(newList);

      localStorage.setItem("shopping", JSON.stringify(newList));
  }

  return (
    <div className="App">
      <Header title="Loja do Gato Pianista" />
      <Content listOfItems={listOfItems} handleCheckChange={handleCheckChange} deleteItem={deleteItem} />
      <Footer length={listOfItems.length} />
    </div>
  );
}

export default App;
