import React from 'react';

const Action = (props) => (
  <div>
    <button 
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}>
      Give me an option
    </button>
  </div>
)

export default Action;