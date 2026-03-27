import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
import Session1 from './pages/Session1'
import Session2 from './pages/Session2'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/1" element={<Session1 />} />
          <Route path="/sessions/2" element={<Session2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
