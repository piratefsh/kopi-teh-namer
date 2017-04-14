import React from 'react';

function KopiDisplay(props) {
  return (
    <header>
      <div className="container">
        <h1>{props.kopi.toString()}</h1>
        <p>{props.kopi.toCasualDefinition()}</p>
      </div>
    </header>
  );
}

export default KopiDisplay;
