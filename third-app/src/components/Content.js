import ItemList from './ItemList';

function Content ({ listOfItems, handleCheckChange, deleteItem }) {
    return (
        <main>
            <section>
                <header>
                    <h2>Lista de Produtos</h2>
                </header>

                <div>
                { 
                    listOfItems.length > 0 ? (
                        <ItemList listOfItems={listOfItems} handleCheckChange={handleCheckChange} deleteItem={deleteItem} />
                    ) : (
                        <p>Sua Lista está vazia!</p>
                    )
                }
                </div>

            </section>
        </main>
    );
}

export default Content;
