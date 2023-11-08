const Card = ({ click, name }) => {
    return (
        <div id="box">
            <button onClick={click}>x</button>

            <img src={`https://source.unsplash.com/400x400/?${name}`} alt="picture" />
            <div className="container">
                <p>{name}</p>
                <button id="buttonMinus"><span className="material-symbols-outlined">
                    heart_minus
                </span>
                </button>
                <button id="buttonPlus"><span className="material-symbols-outlined">
                    heart_plus
                </span>
                </button>
            </div>
        </div>
    );
}

export default Card;