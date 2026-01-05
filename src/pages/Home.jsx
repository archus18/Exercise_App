import homeBg from '../assets/home-bg.jpg'

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="bg-black/60 p-10 rounded-lg text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Fitness Workout Planner
        </h1>

        <p className="text-lg mb-6">
          Build strength. Track progress. Stay fit.
        </p>

        <a
          href="/browse"
          className="bg-green-500 px-6 py-3 rounded text-black font-semibold hover:bg-green-400"
        >
          Explore Exercises
        </a>
      </div>
    </div>
  )
}
