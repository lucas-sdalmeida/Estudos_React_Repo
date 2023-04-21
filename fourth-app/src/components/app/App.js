import './App.css';
import { useState } from 'react';

import PageHeader from "../pageheader/PageHeader";
import ContentBody from '../contentbody/ContentBody';

function App() {
  const [listOfItems, setListOfItems] = useState(
    JSON.parse(localStorage.getItem("shopping"))
  );

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  function updateListOfItems(newList) {
    setListOfItems(newList);

    localStorage.setItem("shopping", JSON.stringify(newList));
  }

  function changeCheckItem(itemId) {
    const updatedList = listOfItems.map((item) => {
      if (item.id === itemId)
        item.checked = !item.checked;
      return item;
    });

    updateListOfItems(updatedList);
  }

  function deleteItem(itemId) {
    const updatedList = listOfItems.filter((item) => item.id !== itemId);

    updateListOfItems(updatedList);
  }

  function addItem(item) {
    const id = listOfItems.length ? 
                listOfItems[listOfItems.length - 1].id + 1 
                : 1;

    const addingItem = {
      id: id,
      checked: false,
      item: item
    };

    const updatedList = [...listOfItems, addingItem];

    updateListOfItems(updatedList);
  }

  return (
    <div className="App">
      <PageHeader pageTitle={"4º React App do Gato Pianista"} />
      <ContentBody itemsList={listOfItems}
                   newItem={newItem}
                   setNewItem={setNewItem}
                   search={search}
                   setSearch={setSearch}
                   onItemCheckChange={changeCheckItem} 
                   onItemDelete={deleteItem} 
                   onItemAdding={addItem}
      />
    </div>
  );
}

export default App;
