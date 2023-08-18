import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Include/Navbar'
import Home from './views/Home'
import Movies from './views/Movies'
import Songs from './views/Songs'
import Life from './views/Life'
import Goals from './views/Goals'
import Footer from './components/Include/Footer'
import SocialMediaData from './data/SocialMediaData'

function App() {
  return (
    <>
      <header className="allContent"></header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/mylife" element={<Life />} />
        <Route path="/mygoals" element={<Goals />} />
      </Routes>
      <Footer mediaData={SocialMediaData} />
    </>
  )
}

export default App