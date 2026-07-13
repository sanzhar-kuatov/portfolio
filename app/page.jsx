import CertificatesSection from './components/CertificatesSection'

export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="text-center space-y-4">

        {/* EDIT: Your full name */}
        <h1 className="text-5xl font-bold text-slate-900">Sanzhar Kuatov</h1>

        {/* EDIT: Your job title or tagline */}
        <p className="text-xl text-indigo-600 font-medium">Aspiring Software Engineer</p>

        {/* Contact links */}
        <div className="flex justify-center gap-6 text-sm text-slate-500">

          {/* EDIT: Your email address */}
          <a href="mailto:sanzarkuatov@gmail.com" className="hover:text-indigo-600 transition-colors">
            sanzarkuatov@gmail.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/sanzhar-kuatov" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="https://www.linkedin.com/in/sanzhar-kuatov-a8809431a/" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
        </div>

        {/* Download Resume button — replace /resume.pdf in /public with your own PDF */}
        <div className="pt-2">
          <a href="/Sanzhar_Kuatov_Resume.pdf" download
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
          Second-year Software Engineering student at Sunway University × Lancaster University (GPA 3.7, Dean’s List every semester) 
          with internship experience and a portfolio of AI-powered and automation systems built with Python, Node.js, and Claude AI. 
          Comfortable across the full stack — from Telegram bots and REST APIs to web platforms with payment integration. 
          Seeking a software engineering or AI/ML internship to solve real problems and grow fast.
        </p>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Skills</h2>

        {/* EDIT: Replace or add skills. Each skill is a <span> tag — just copy and paste one. */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Rest API</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Git</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Razorpay</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Javascript</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">AI</span>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">Projects</h2>

        <div className="space-y-6">

          {/* ── PROJECT 1 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">AI-powered expenses bot tracker</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Built a Telegram bot that uses Claude AI to automatically record and categorize user expenses (food, utilities, etc.) and generate detailed spending reports for any custom date range
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Pandas</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">MySQL</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/AI-Powered-Telegram-Expense-Tracker-Bot"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 2 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">AI Growth Coach Platform</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Developed a full-stack web platform where users track personal goals, habits, and daily reflections, guided by an AI coach; integrated Razorpay to handle subscription payments
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Scikit-learn</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Jupyter</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://askdcode.com/lifetune/login"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View Demo →
            </a>
          </div>

          {/* ── PROJECT 3 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Dicord Member Verifier</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Automated student verification for Sunway Game Development Club’s Discord server using Google Sheets as a live member registry, eliminating manual verification entirely
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Google Sheets API</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Dicord Bot</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/Registrating-SGDC-Members"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 4 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Automated Birthday Card Sender</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Built a system for companies to auto-generate personalized birthday card images and distribute them via email to all departments; deployed during internship at Galanz Bottlers
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Pandas</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">MySQL</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/happy_birthday_sender"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 5 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Datastation App</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Designed and developed an app for Datastation, which is a device for scanning and uploading books to library robot database.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Raspberry Pi</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SQLite</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">NFS</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/Gemmove_Website"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
          </div>

          {/* ── PROJECT 6 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">GemMove Product Landing Page</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Designed and developed a responsive one-page product landing website for showcasing industrial filters and liquidizers. 
              Built entirely with AI-assisted development (Claude Code), with a focus on modern UI, responsive design, and clear product presentation.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">HTML</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">CSS</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Vercel</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/Gemmove_Website"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
            <a href="https://gemmove-website.vercel.app/"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View Demo →
            </a>
          </div>

        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Education</h2>

        <div className="space-y-1">
          {/* EDIT: Your degree */}
          <p className="font-semibold text-slate-900">BSc Software Engineering</p>

          {/* EDIT: Your university */}
          <p className="text-slate-600">Sunway University</p>

          {/* EDIT: Your expected graduation year */}
          <p className="text-slate-500 text-sm">Expected Graduation: Aug 2027</p>
        </div>
      </section>

      {/* ─── CERTIFICATES ──────────────────────────────────────────── */}
      <CertificatesSection />

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Contact</h2>

        <p className="text-slate-600 mb-4">
          Open to internship and graduate opportunities — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">

          {/* EDIT: Your email address */}
          <a href="mailto:sanzarkuatov@gmail.com"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            sanzarkuatov@gmail.com
          </a>

          {/* EDIT: Your GitHub URL */}
          <a href="https://github.com/sanzhar-kuatov" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            GitHub
          </a>

          {/* EDIT: Your LinkedIn URL */}
          <a href="https://www.linkedin.com/in/sanzhar-kuatov-a8809431a/" target="_blank" rel="noopener noreferrer"
             className="inline-block border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors text-center">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="text-center text-slate-400 text-sm pt-4 pb-8 border-t border-slate-100">
        {/* EDIT: Your name */}
        <p>© 2026 Sanzhar Kuatov· Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  )
}
