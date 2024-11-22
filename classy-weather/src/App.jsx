import { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
  }

  handleClick(action) {
    if (action === '-') this.setState((state) => (state.count -= 1))
    else this.setState((state) => (state.count += 1))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('-')}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleClick('+')}>+</button>
      </div>
    )
  }
}

export default App
