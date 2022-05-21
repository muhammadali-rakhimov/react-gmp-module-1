import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.count}
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default App;
