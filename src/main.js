import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = React.createClass({
  render() {
    return (
      <p> Hello, world! </p>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
