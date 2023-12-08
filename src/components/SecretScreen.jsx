import './SecretScreen.css';

// eslint-disable-next-line react/prop-types
const SecretScreen = ({ startGame }) => { 
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar o jogo</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    );
}

export default SecretScreen;