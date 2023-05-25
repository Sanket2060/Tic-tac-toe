import { useEffect, useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  function setToArray() {}
  useEffect(() => {
    console.log(squares);
  }, [squares]);
  return (
    <>
      <div className="board-row">
        <Square
          count={count}
          setCount={setCount}
          square={squares[0]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[1]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[2]}
          setSquares={setSquares}
        />
      </div>
      <div className="board-row">
        <Square
          count={count}
          setCount={setCount}
          square={squares[3]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[4]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[5]}
          setSquares={setSquares}
        />
      </div>
      <div className="board-row">
        <Square
          count={count}
          setCount={setCount}
          square={squares[6]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[7]}
          setSquares={setSquares}
        />
        <Square
          count={count}
          setCount={setCount}
          square={squares[8]}
          setSquares={setSquares}
        />
      </div>
    </>
  );
}
