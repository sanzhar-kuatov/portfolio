'use client'

import { useEffect, useState } from 'react'

export default function ProjectDemoButton({ videoId, title }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
      >
        View Demo →
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-slate-900/55 flex items-center justify-center p-6 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-2 right-2 w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-colors z-10"
            >
              ✕
            </button>
            <div className="relative aspect-video bg-slate-50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
