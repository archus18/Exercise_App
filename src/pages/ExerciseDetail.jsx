
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getExerciseById } from '../services/api'

export default function ExerciseDetail(){
  const {id}=useParams()
  const [ex,setEx]=useState(null)
  useEffect(()=>{getExerciseById(id).then(setEx)},[id])
  if(!ex) return <p className='p-6'>Loading...</p>
  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold'>{ex.name}</h1>
      <img src={ex.img} className='my-4 rounded'/>
      <p><b>Target:</b> {ex.target}</p>
      <p><b>Equipment:</b> {ex.equipment}</p>
      <ul className='list-disc ml-6 mt-4'>
        {ex.instructions.map((i,idx)=><li key={idx}>{i}</li>)}
      </ul>
    </div>
  )
}
