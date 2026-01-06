import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getExerciseById } from '../services/api'

export default function ExerciseDetail() {
  const { id } = useParams()
  const [ex, setEx] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    getExerciseById(id).then(setEx)
  }, [id])

  if (!ex)
    return (
      <p className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading exercise details...
      </p>
    )

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center py-6 border-b">
          {ex.name}
        </h1>

        {/* Image */}
        <img
          src={ex.img}
          alt={ex.name}
          className="w-full h-[300px] object-cover"
        />

        {/* Video Button */}
        {ex.video && (
          <div className="text-center py-4">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="bg-green-500 px-6 py-2 rounded font-semibold hover:bg-green-400 transition"
            >
              {showVideo ? 'Hide Video' : 'Watch Video'}
            </button>
          </div>
        )}

        {/* Video */}
        {showVideo && ex.video && (
          <div className="px-6 pb-6">
            <div className="aspect-video rounded overflow-hidden">
              <iframe
                src={ex.video}
                title={ex.name}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Info */}
        <div className="grid grid-cols-2 gap-4 text-center py-4 border-t border-b">
          <div>
            <p className="text-sm text-gray-500">Target</p>
            <p className="font-semibold">{ex.target}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Equipment</p>
            <p className="font-semibold">{ex.equipment}</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-center">
            Instructions
          </h2>

          <ul className="space-y-3">
            {ex.instructions.map((step, idx) => (
              <li
                key={idx}
                className="flex gap-3 bg-gray-50 p-3 rounded"
              >
                <span className="bg-green-500 text-white w-7 h-7 flex items-center justify-center rounded-full font-bold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <div className="pb-6 text-center">
          <Link
            to="/browse"
            className="inline-block bg-gray-800 text-white px-6 py-2 rounded font-semibold hover:bg-gray-700"
          >
            Back to Exercises
          </Link>
        </div>
      </div>
    </div>
  )
}
