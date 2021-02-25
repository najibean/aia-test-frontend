import React from 'react'
import './App.css';
import ImgList from './components/ImgList';
import ImgSearch from './components/ImgSearch';


class App extends React.Component {
  state = {
    images: [],
    error: null
  }

  handleRequest = async (ev) => {
    ev.preventDefault()

    const url = `https://najib-aia-backend.herokuapp.com/flickr?tags=indonesia`

    const request = await fetch(url);
    const response = await request.json();

    this.setState({ images: response.photos.photo })
    // console.log(this.state.images)
  }

  render() {
    return (
      <div>
        <ImgSearch handleRequest={this.handleRequest} />
        <ImgList images={this.state.images} />

      </div>
    )
  }
}

export default App;
