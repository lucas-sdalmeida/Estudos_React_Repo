import "./Square.css"

function Square({ squareColor, hexValue }) {
    return (
        <div 
            className="Square"
            style={ 
                { 
                    backgroundColor: squareColor ? 
                        squareColor : "inherit"
                } 
            }
        >
            <p>{ squareColor ? squareColor : "Cor não definida" }</p>
            <p>{ hexValue ? hexValue : null }</p>
        </div>
    )
}

export default Square;
