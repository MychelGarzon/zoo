const Card = (props) => {
    return (
        <div id="box">
            <button id="buttonClose">X
            </button>
            <img src="https://source.unsplash.com/random" alt="unsplash random image" />
            <div class="container">
                <h3>{props.name}</h3>
                <button id="buttonPlus">+
                </button>
                <button id="buttonMinus">-
                </button>
            </div>
        </div>
    );
};

export default Card;