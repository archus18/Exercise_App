
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import ExerciseDetail from './pages/ExerciseDetail'
import Contact from './pages/Contact'
import About from './pages/about'


export default function App(){
  return (
    <>
      <nav className="p-4 bg-gray-900 text-white flex justify-center gap-8 text-lg">
  <Link to="/">Home</Link>
  <Link to="/browse">Exercises</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}
