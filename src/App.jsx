import React, { useRef } from 'react';

function TextInputWithButton() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
}

export default TextInputWithButton;
