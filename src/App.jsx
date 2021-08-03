import React from "react"

class App extends React.Component {
  state = {
    data: []
  }
}

const App = () => {


handleFetch = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random")
  const data = await response.json()
  this.setState({data: data})
  console.log(data)
  }

  return (
    <div>
      <h1>Hi there</h1>
      <button onClick={this.handleFetch}>click me</button>
    </div>
  )
}

export default App;