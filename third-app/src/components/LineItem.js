import style from './LineItem.module.css'

function LineItem({ item, handleCheckChange, deleteItem }) {
    return (
        <li key={item.id} className={style.lineItem}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheckChange(item.id)} />

            <label>{item.description}</label>

            <button onClick={() => deleteItem(item.id)} className={style.delete}>Excluir</button>
        </li>
    );
}

export default LineItem;
