import Header from './Header'
import PictureUnderHeader from './PictureUnderHeader'

function App() {
  if (window.location.href === 'http://localhost:3000/') {
    return (
      <div className="App">
        <Header />
        <PictureUnderHeader />
      </div>
    )
  } else if (window.location.href === 'http://localhost:3000/episode') {
    return (
      <div className="App">
        EPISODE!!!!!
      </div>
    )
  }
}

export default App
