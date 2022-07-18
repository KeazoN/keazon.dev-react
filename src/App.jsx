import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'
import SocialMediaData from './data/SocialMediaData'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer mediaData={SocialMediaData} />
    </>
  )
}

export default App