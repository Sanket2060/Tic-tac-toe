import { useState } from "react";
function Square({ count, setCount, square, setSquares }) {
  const [value, setValue] = useState(null);
  const [doubleclick, setDoubleclick] = useState(false);
  function handleClick() {
    if (!doubleclick) {
      if (count % 2 === 0) {
        setValue("X");
             // setSquares("X");
      } else {
        setValue("0");
        // setSquares("0");
           }
      setCount(count + 1);
      setDoubleclick(true);
    }
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
export default Square;
