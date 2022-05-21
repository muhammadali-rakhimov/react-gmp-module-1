import React, { PureComponent } from "react";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Toggle Switch</h2>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
}

export default App;
