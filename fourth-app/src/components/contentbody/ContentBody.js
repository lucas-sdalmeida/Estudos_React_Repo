import ItemsList from "../itemslist/ItemsList";
import AddItem from "../additem/AddItem";
import SearchItem from "../searchitem/SearchItem"

function ContentBody({ itemsList, 
                       newItem, 
                       setNewItem, 
                       search,
                       setSearch,
                       onItemCheckChange, 
                       onItemDelete, 
                       onItemAdding }) {
    function onItemSubmit(e) {
        e.preventDefault()

        if (!newItem)
            return;

        onItemAdding(newItem);

        setNewItem('');
    }

    return (
        <main>
            <section>
                <header>
                    <h2>
                        Adicionar Item
                    </h2>
                </header>

                <AddItem 
                    newItem={newItem}
                    setNewItem={setNewItem}
                    onItemSubmit={onItemSubmit} 
                />

            </section>

            <section>
                <header>
                    <h2>Filtrar Item</h2>
                </header>

                <SearchItem 
                    search={search} 
                    setSearch={setSearch}
                />

            </section>

            <section>
                <header>
                    <h2>Lista de Itens</h2>
                </header>

                <ItemsList 
                    itemsList={search ? 
                        itemsList.filter((item) => 
                            item.item
                                .toLowerCase()
                                .includes(
                                    search.toLowerCase()
                                )
                        ) :
                        itemsList
                    }
                    onItemCheckChange={onItemCheckChange}
                    onItemDelete={onItemDelete}
                />

            </section>
        </main>
    );
}

export default ContentBody;
