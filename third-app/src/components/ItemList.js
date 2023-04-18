import LineItem from './LineItem'

function ItemList({ listOfItems, handleCheckChange, deleteItem }) {
    return (
        <ul>{ 
            listOfItems.map((item) => (
                <LineItem key={item.id} item={item} handleCheckChange={handleCheckChange} deleteItem={deleteItem} />
            ))
        }</ul>
    );
}

export default ItemList;
