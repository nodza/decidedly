import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button 
        disabled={!props.hasOptions}
        onClick={props.handlePick}>
        What should I do next?
      </button>
    </div>
  );
}

export default Action;