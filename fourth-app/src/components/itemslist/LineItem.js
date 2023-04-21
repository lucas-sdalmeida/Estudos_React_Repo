import { FaTrashAlt } from "react-icons/fa";

function ListItem({ item, onItemCheckChange, onItemDelete }) {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={item.checked} 
                onChange={() => onItemCheckChange(item.id)}
            />

            <label>{item.item}</label>

            <FaTrashAlt 
                role="button"
                onClick={() => onItemDelete(item.id)}
                tabIndex="0"
            />
        </li>
    )
}

export default ListItem;
