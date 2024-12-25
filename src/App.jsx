import './App.css'
import './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/CartWidget/CartWidget'

import { NavBar } from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HomePage />
      </main>
    </>
  )
}

export default App
