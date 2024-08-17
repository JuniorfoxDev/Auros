import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AllProd from './Pages/AllProd/AllProd'

function App() { 
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/About' exact element={<About/>}/>
          <Route path='/Contact' exact element={<Contact/>}/>
          <Route path='/all-product' exact element={<AllProd/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
