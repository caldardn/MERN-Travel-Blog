import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Locations from './pages/Locations'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  )
}
