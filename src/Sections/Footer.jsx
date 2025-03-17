import React from 'react'

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <span className="text-xl font-bold text-white">Bloom Budget</span>
      </div>
      <div className="text-center text-gray-400 mt-2 text-sm">
        © {new Date().getFullYear()} Bloom Budget. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
