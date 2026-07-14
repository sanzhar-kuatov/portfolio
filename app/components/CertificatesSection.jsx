'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// EDIT: Add, remove, or edit certificates here. `image` paths point into /public/certificates.
const CERTIFICATES = [
  { image: '/certificates/WorldSkills_2024.jpeg', title: 'WorldSkills Competition', date: '2024', category: 'technical', description: 'Built a full-stack web, mobile, and desktop booking application (Airbnb-style) in a 2-day competition, placing 3rd.' },
  { image: '/certificates/Programming_competition_2023.jpeg', title: 'Programming Competition', date: '2023', category: 'technical', description: 'Competed in a college-level programming contest focused on algorithmic problem solving.' },
  { image: '/certificates/robotics_26-04-2019.jpeg', title: 'Robotics', date: 'Apr 2019', category: 'technical', description: 'Designed and built a robot for a school robotics competition.' },
  { image: '/certificates/Robotics_30-12-2018.jpeg', title: 'Robotics', date: 'Dec 2018', category: 'technical', description: 'Built an Arduino-powered robot that follows a line course in the fastest time.' },
  { image: '/certificates/programming_basics_school_20-08-2016.jpeg', title: 'Programming Basics', date: 'Aug 2016', category: 'technical', description: 'Completed an introductory programming course for upper-grade students.' },
  { image: '/certificates/Math_wihout_borders_2017.jpeg', title: 'Math Without Borders', date: '2017', category: 'study', description: 'Competed in the IV International Mathematics Tournament held in Kazakhstan.' },
  { image: '/certificates/Math_Olympaid_05-08-2017.jpeg', title: 'Math Olympiad', date: 'Aug 2017', category: 'study', description: 'Earned a Merit Award (Grade 5) at the Asia International Mathematics Olympiad Open Contest Final in Malaysia.' },
  { image: '/certificates/Math_Competition_2012.jpeg', title: 'Math Competition', date: '2012', category: 'study', description: 'Participated in a mathematics competition held in Malaysia.' },
  { image: '/certificates/Memory_Attention_School_18-08-2019.jpeg', title: 'Memory & Attention School', date: 'Aug 2019', category: 'study', description: 'Completed a program focused on improving memory retention and concentration.' },
  { image: '/certificates/IELTS_workshop_10-03-2022.jpeg', title: 'IELTS Workshop', date: 'Mar 2022', category: 'study', description: 'Completed an IELTS preparation workshop hosted by Cambridge Academy.' },
  { image: '/certificates/Step_Academy_05-06-2022.jpeg', title: 'Step Academy', date: 'Jun 2022', category: 'study', description: 'Completed a 3-year program spanning HTML/CSS, Python, C++, Java, Swift, JavaScript, Unity, Arduino, IoT, 3D modeling, and Adobe Illustrator/Photoshop, graduating with top marks.' },
  { image: '/certificates/Taekwando_29-07-2012.jpeg', title: 'Taekwondo', date: 'Jul 2012', category: 'sport', description: 'Passed a Taekwondo grading examination conducted by Taekwondo Malaysia.' },
  { image: '/certificates/Ballroom_Dancing_2014.jpeg', title: 'Ballroom Dancing', date: '2014', category: 'sport', description: 'Placed 3rd in a ballroom dancing competition in Kazakhstan.' },
]

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'technical', label: 'Technical' },
  { key: 'study', label: 'Study' },
  { key: 'sport', label: 'Sport' },
]

const CATEGORY_TAG_STYLES = {
  technical: 'bg-indigo-50 text-indigo-700',
  study: 'bg-violet-50 text-violet-700',
  sport: 'bg-emerald-50 text-emerald-700',
}

const CATEGORY_LABELS = {
  technical: 'Technical',
  study: 'Study',
  sport: 'Sport',
}

export default function CertificatesSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected === null) return
    function handleKeyDown(e) {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected])

  const visible = activeFilter === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter((cert) => cert.category === activeFilter)

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Certificates</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveFilter(cat.key)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
              activeFilter === cat.key
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((cert) => (
          <button
            key={cert.image}
            type="button"
            onClick={() => setSelected(cert)}
            className="text-left border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-indigo-400 transition-colors"
          >
            <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-200">
              <Image src={cert.image} alt={cert.title} fill className="object-cover" />
            </div>
            <div className="p-3.5 space-y-1.5">
              <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${CATEGORY_TAG_STYLES[cert.category]}`}>
                {CATEGORY_LABELS[cert.category]}
              </span>
              <p className="text-sm font-semibold text-slate-900">{cert.title}</p>
              <p className="text-xs text-slate-500">{cert.date}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-slate-900/55 flex items-center justify-center p-6 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-2 right-2 w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-200">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
            </div>
            <div className="p-5 space-y-2">
              <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${CATEGORY_TAG_STYLES[selected.category]}`}>
                {CATEGORY_LABELS[selected.category]}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{selected.title}</h3>
              <p className="text-xs text-slate-500">{selected.date}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
