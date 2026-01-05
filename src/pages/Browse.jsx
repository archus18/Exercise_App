import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExercises } from '../services/api'

export default function Browse() {
  const [exercises, setExercises] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getExercises().then(data => setExercises(data))
  }, [])

  const filteredExercises = exercises.filter(ex =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Browse Exercises</h1>
        <p className="text-gray-600 mt-2">
          Select an exercise to view details
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search exercise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Exercise Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10">
        {filteredExercises.map(exercise => (
          <div
            key={exercise.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={exercise.img}
              alt={exercise.name}
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">
                {exercise.name}
              </h2>

              <p className="text-gray-600 text-sm mb-2">
                Target: {exercise.target}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                Equipment: {exercise.equipment}
              </p>

              <Link
                to={`/exercise/${exercise.id}`}
                className="inline-block bg-green-500 text-black px-4 py-2 rounded font-semibold hover:bg-green-400"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

        {filteredExercises.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No exercises found
          </p>
        )}
      </div>
    </div>
  )
}
