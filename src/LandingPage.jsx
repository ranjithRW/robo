import React from 'react'
import ModelViewer from './ModelViewer'

function LandingPage() {
  return (
    <div className="w-screen h-screen relative">
      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
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

      {/* Model Viewer at Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <ModelViewer />
      </div>
    </div>
  )
}

export default LandingPage