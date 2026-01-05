
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import ExerciseDetail from './pages/ExerciseDetail'

export default function App(){
  return (
    <>
      <nav className='p-4 bg-gray-900 text-white flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/browse'>Exercises</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </>
  )
}
