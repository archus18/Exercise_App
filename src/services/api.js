
import data from '../data/exercises.json'
export const getExercises = () => Promise.resolve(data)
export const getExerciseById = (id) => Promise.resolve(data.find(e=>e.id===id))
