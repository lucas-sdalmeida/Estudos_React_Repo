import './App.css';
import { useState, useEffect } from 'react';

import PageHeader from "../pageheader/PageHeader";
import ContentBody from '../contentbody/ContentBody';

import apiRequest from "../../apiRequest";

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [listOfItems, setListOfItems] = useState([]);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fecthItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok)
          throw new Error("Dados não recebidos!");

        const listItems = await response.json();
        setListOfItems(listItems);
        setFetchError(null);
      }
      catch (err) {
        setFetchError(err.message);
      }
    }

    fecthItems();
  }, []);

  async function changeCheckItem(itemId) {
    const updatedList = listOfItems.map((item) => {
      if (item.id === itemId)
        item.checked = !item.checked;
      return item;
    });

    setListOfItems(updatedList);

    const updatingItem = listOfItems.filter(item => item.id === itemId);

    const pacthOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: updatingItem[0].checked})
    }

    const result = await apiRequest(`${API_URL}/${itemId}`, pacthOptions);

    if (result)
      setFetchError(result);
  }

  async function deleteItem(itemId) {
    const updatedList = listOfItems.filter((item) => item.id !== itemId);

    setListOfItems(updatedList);

    const deleteOptions = { method: "DELETE" };
    
    const result = await apiRequest(`${API_URL}/${itemId}`, deleteOptions);

    if (result)
      setFetchError(result)
  }

  async function addItem(item) {
    const id = listOfItems.length ? 
                listOfItems[listOfItems.length - 1].id + 1 
                : 1;

    const addingItem = {
      id: id,
      checked: false,
      item: item
    };

    const updatedList = [...listOfItems, addingItem];

    setListOfItems(updatedList);

    const postOptions = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addingItem)
    }

    const result = await apiRequest(API_URL, postOptions);

    if (result) 
      setFetchError(result);
  }

  return (
    <div className="App">
      <PageHeader pageTitle={"4º React App do Gato Pianista"} />
      <main>
        {
          fetchError && 
            <p 
              style={{color: "red"}}
            >
              {`Erro: ${fetchError}`}
            </p> 
        }
        { !fetchError &&
          <ContentBody itemsList={listOfItems}
                      newItem={newItem}
                      setNewItem={setNewItem}
                      search={search}
                      setSearch={setSearch}
                      onItemCheckChange={changeCheckItem} 
                      onItemDelete={deleteItem} 
                      onItemAdding={addItem}
          />
        }
      </main>
    </div>
  );
}

export default App;
