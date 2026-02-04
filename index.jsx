const { useState } = React;

export function Board() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));

  const calculateWinner = (board) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    for (const [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(v => v !== "");

  const handleSquareClick = (index) => {
    if (winner || isDraw) return;      // stop after game ends
    if (squares[index]) return;        // stop overwriting

    const next = [...squares];
    next[index] = player;
    setSquares(next);

    setPlayer(prev => (prev === "X" ? "O" : "X"));
  };

  const handleReset = () => {
    setSquares(Array(9).fill(""));
    setPlayer("X");
  };

  let status = `Next Player: ${player}`;
  if (winner) status = `Winner: ${winner}`;
  if (isDraw) status = "Draw!";

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <p>{status}</p>

      <div className="board">
        {squares.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleSquareClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button id="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

