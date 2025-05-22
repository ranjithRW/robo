import React from 'react'

function LandingPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RoboWalk</h1>
        <p className="text-lg md:text-xl mb-6">
          Explore interactive 3D robots and AR experiences in your browser.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage;
