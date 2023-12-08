import './GameOver.css';

// eslint-disable-next-line react/prop-types
const GameOver = ({ retry, score }) => {
    return (
        <div>
            <h1>Fim do jogo!</h1>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={ retry }>Reiniciar jogo</button>
        </div>
  );
}

export default GameOver;