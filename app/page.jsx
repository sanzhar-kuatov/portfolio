export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="text-center space-y-4">

        {/* EDIT: Your full name */}
        <h1 className="text-5xl font-bold text-slate-900">Teo Kuo Hong</h1>

        {/* EDIT: Your job title or tagline */}
        <p className="text-xl text-indigo-600 font-medium">Aspiring Data Scientist</p>

        {/* Contact links */}
        <div className="flex justify-center gap-6 text-sm text-slate-500">

          {/* EDIT: Your email address */}
          <a href="mailto:kuohong@netizenexperience.com" className="hover:text-indigo-600 transition-colors">
            kuohong@netizenexperience.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/netizen-experience" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="https://my.linkedin.com/company/netizen-experience" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
        </div>

        {/* Download Resume button — replace /resume.pdf in /public with your own PDF */}
        <div className="pt-2">
          <a href="/resume.pdf" download
             className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            Download Resume
          </a>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">About</h2>

        {/* EDIT: Your 2–3 sentence bio */}
        <p className="text-slate-600 leading-relaxed">
          Final year student at Sunway University passionate about data analytics and machine learning.
          I enjoy turning messy datasets into clear insights and building tools that help people make
          better decisions. Currently seeking internship and graduate opportunities in data science.
        </p>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Skills</h2>

        {/* EDIT: Replace or add skills. Each skill is a <span> tag — just copy and paste one. */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Git</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Tableau</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Pandas</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Scikit-learn</span>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">Projects</h2>

        <div className="space-y-6">

          {/* ── PROJECT 1 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Sales Dashboard</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Interactive data visualisation dashboard built with Python and Tableau.
              Analysed 12 months of retail sales data to surface weekly trends and top-performing products.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Tableau</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Pandas</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/netizen-experience" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 2 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Student Grade Predictor</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Machine learning model that predicts final exam grades from attendance and assignment scores.
              Achieved 87% accuracy using a Random Forest classifier trained on anonymised university data.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Scikit-learn</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Jupyter</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/netizen-experience" target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Education</h2>

        <div className="space-y-1">
          {/* EDIT: Your degree */}
          <p className="font-semibold text-slate-900">BSc Computer Science</p>

          {/* EDIT: Your university */}
          <p className="text-slate-600">Sunway University</p>

          {/* EDIT: Your expected graduation year */}
          <p className="text-slate-500 text-sm">Expected Graduation: 2026</p>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Contact</h2>

        <p className="text-slate-600 mb-4">
          Open to internship and graduate opportunities — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">

          {/* EDIT: Your email address */}
          <a href="mailto:kuohong@netizenexperience.com"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            kuohong@netizenexperience.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/netizen-experience" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            GitHub
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="https://my.linkedin.com/company/netizen-experience" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="text-center text-slate-400 text-sm pt-4 pb-8 border-t border-slate-100">
        {/* EDIT: Your name */}
        <p>© 2026 Teo Kuo Hong · Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  )
}
