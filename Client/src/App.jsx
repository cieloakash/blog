import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import './App.css'
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import SignUp from './pages/SignUp'
import SignIN from './pages/SignIn'
import Header from "./Components/Header"



function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIN/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
