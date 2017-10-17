import React from 'react';

const Option  = (props) => (
  <div>
    <div className="option">
      <span className="option__text">{props.count}. {props.optionText}</span> 
        <button 
        className="button button--link"
          onClick={(e) => {props.handleDeleteOption(props.optionText)}}>
          Remove
        </button>
    </div>
  </div>
)

  export default Option;