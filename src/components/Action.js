import React from 'react';

const Action = (props) => (
  <div>
    <button 
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}>
      Make my choice
    </button>
  </div>
)

export default Action;