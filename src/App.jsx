import Home from './components/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
