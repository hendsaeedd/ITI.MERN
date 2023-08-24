import React, { useState } from "react";

function Flip() {
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);
  const [coin, setCoin] = useState('head');

  const flipCoin = () => {
    if (coin === "head") {
      setTail(tail + 1);
      setCoin("tail");
    } else {
      setHead(head + 1);
      setCoin("head");
    }
  };

  return (
    <div>
      <h1>Flip</h1>
      {coin === "head" ? ( 
      <img src="https://cdn-icons-png.flaticon.com/128/11510/11510908.png" alt="head"/>
      ) : ( 
      <img src="https://cdn-icons-png.flaticon.com/128/9382/9382189.png" alt="tail"/> 
        )}
      <div className="flip">
        <button onClick={flipCoin}>Flip me</button>
        <h2>
          out of {head + tail} flips, there have been {head} heads and {tail} tails
        </h2>
      </div>
    </div>
  );
}

export default Flip;
