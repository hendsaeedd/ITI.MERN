import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState('none');
  
  const toggleButton = () => {
    if (toggle === 'none') {
      setToggle('block');
    } else {
      setToggle('none');
    }
  };
  return (
    <div>
      <h1>Toggle</h1>
      <div className="section">
        <h2>Section</h2>
        <button onClick={toggleButton}>{toggle === 'none' ? "+" : "-"}</button>
      </div>
        <p style={{display: toggle}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          magni! Provident error tempore ipsa incidunt porro dignissimos quia
          autem facere illo. Labore velit porro beatae itaque aut fugit ab vel.
        </p>
    </div>
  );
}

export default Toggle;
