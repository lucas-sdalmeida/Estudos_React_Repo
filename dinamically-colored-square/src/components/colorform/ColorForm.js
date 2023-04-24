import colorNames from "colornames";
import "./ColorForm.css"

import { useRef } from "react";

function Form({ setColor, setHexValue }) {
    const focusRef = useRef();

    function handleFormSubmit(e) {
        e.target.preventDefault();

        focusRef.current.focus();
    };

    return (
        <form className="ColorForm" onSubmit={ handleFormSubmit }>
            <input 
                type="text" 
                placeholder="Informe a cor do quadrado"
                autoFocus
                ref={ focusRef }
                onChange={ (e) => {
                    setColor(e.target.value)
                    setHexValue(
                        colorNames(e.target.value)
                        );
                } }
            />
        </form>
    );
}

export default Form;
