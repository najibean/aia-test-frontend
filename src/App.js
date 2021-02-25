import React from 'react'
import './App.css';


class App extends React.Component {
  state = {
    images: [],
    error: null
  }

  handleRequest = async (ev) => {

    const url = `https://najib-aia-backend.herokuapp.com/flickr?tags=man`

    const request = await fetch(url);
    const response = await request.json();

    this.setState({ images: response.photos.photo })
    console.log(this.state.images)
  }

  componentDidMount() {
    this.handleRequest()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
