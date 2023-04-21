import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

function AddItem({ newItem, setNewItem, onItemSubmit }) {
    const inputRef = useRef();

    return (
        <form className="add-form" onSubmit={onItemSubmit}>
            <div className="input-field">
                <label htmlFor="add-item">
                    Item:
                </label>
                <input 
                    autofocus
                    ref={inputRef}
                    id="add-item"
                    type="text"
                    placeholder="Adicione um item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    autoFocus
                    required
                />
                <button
                    type="submit"
                    className="plus-sign"
                    aria-label="Adicionar item"
                    onClick={() => inputRef.current.focus() }
                >
                    <FaPlus/>
                </button>
            </div>
        </form>
    )
}

export default AddItem;
