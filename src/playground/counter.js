class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = { 
      count: 0
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
      <h3>Count: {this.state.count} </h3>
      <button id="plus" onClick={this.handleAddOne}>+1</button>
      <button id="minus" onClick={this.handleMinusOne}>-1</button>
      <button id="reset" onClick={this.handleReset}>reset</button>
    </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));



// let count = 0;

// const _increment = () => {
//   count++;
//   renderCounterApp();
// }

// const _decrement = () => {
//   count--;
//   renderCounterApp();
// }

// const _reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h3>Count: {count}</h3>
//       <button id="plus" onClick={_increment}>+1</button>
//       <button id="minus" onClick={_decrement}>-1</button>
//       <button id="reset" onClick={_reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderCounterApp();

