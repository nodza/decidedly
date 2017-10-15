class ToggleVisibility extends React.Component {

  constructor(props) {
    super(props);

    this.onShowMe = this.onShowMe.bind(this);
    this.state = {
      isVisible: false
    }
  }

  onShowMe() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Can you see me?</h2>
        <button onClick={this.onShowMe}>
        {this.state.isVisible ? 'Hide Me' : 'Show Me'}
        </button>
        {this.state.isVisible && (
          <p>Now you see me...</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility/>, document.getElementById('app'));