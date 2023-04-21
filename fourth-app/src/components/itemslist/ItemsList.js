import LineItem from "./LineItem";

function ItemsList({ itemsList, onItemCheckChange, onItemDelete }) {
    function hasItems() {
        return itemsList.length > 0;
    }

    return (<>
        { hasItems() ? (
                <ul>{ 
                    itemsList.map((item) => (
                        <LineItem key={item.id} 
                                  item={item} 
                                  onItemCheckChange={onItemCheckChange}
                                  onItemDelete={onItemDelete}
                        />
                    )) 
                }</ul>
            ) : (
                <p>Não há items na lista</p>
            )
        }
    </>);
}

export default ItemsList;
