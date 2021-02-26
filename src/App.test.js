import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App';
import ImgSearch from './components/ImgSearch'
import ImgList from './components/ImgList'
import "@testing-library/jest-dom";

afterEach(cleanup)

it('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('ImgSearch renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImgSearch />, div)
})

// it('ImgList renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<ImgList />, div)
// })

it('Button in ImgSearch rendered correctly', () => {
  const { getByTestId } = render(<ImgSearch />)
  expect(getByTestId('buttonImgSearch')).toHaveTextContent("Search")
})