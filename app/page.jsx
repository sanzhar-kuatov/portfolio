import CertificatesSection from './components/CertificatesSection'
import ProjectDemoButton from './components/ProjectDemoButton'

export default function Portfolio() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="text-center space-y-4">

        {/* EDIT: Your full name */}
        <h1 className="text-5xl font-bold text-slate-900">Sanzhar Kuatov</h1>

        {/* EDIT: Your job title or tagline */}
        <p className="text-xl text-indigo-600 font-medium">Software Engineering Student · Building AI-powered products</p>

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
          <a href="/Sanzhar Kuatov - Resume.pdf" download
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
          Final-year Software Engineering student at Sunway University × Lancaster University (GPA 3.7, Dean’s List every semester)
          with hands-on internship experience automating HR and IT workflows at Galanz Bottlers, plus a portfolio of AI-powered and
          automation systems built with Python, Node.js, and Claude AI. Comfortable across the full stack - from Telegram bots and REST APIs
          to web platforms with payment integration. Seeking a software engineering or AI/ML internship to solve real problems and grow fast.
        </p>
      </section>

      {/* ─── EXPERIENCE ────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Experience</h2>

        <div className="border border-slate-200 rounded-xl p-6 space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Lab Apprentice</h3>
            <p className="text-slate-600">HUMAC Lab</p>
            <p className="text-slate-500 text-sm">Feb 2025 – May 2026</p>
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
            <li>Coordinated task tracking and sprint planning via Jira for a cross-functional team building a library robot from concept to deployment.</li>
            <li>Assembled the robot's electrical and mechanical components, and set up its networking infrastructure - configuring access points and routers for reliable on-site wireless connectivity.</li>
            <li>Developed the Datastation App to scan library books and sync them over the network into the robot's database, handling 200+ book scans in a single sync.</li>
            <li>Tested and debugged hardware-software integration, resolving syncing issues between the scanning app and the robot's onboard systems.</li>
          </ul>

          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Raspberry Pi</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SQLite</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Jira</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Networking</span>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 space-y-3 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Automation Intern</h3>
            <p className="text-slate-600">Galanz Bottlers</p>
            <p className="text-slate-500 text-sm">Oct 2023 – Dec 2023</p>
          </div>

          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
            <li>Automated the company's daily birthday-card process - pulling that day's birthdays from the employee database and auto-generating and emailing personalized cards to every department, removing a manual daily HR task.</li>
            <li>Built a Telegram bot that returns any employee's details in a single message, replacing a multi-click lookup process and cutting search time for HR and staff.</li>
            <li>Built an HR FAQ Telegram bot backed by a database of the most common employee questions, escalating anything outside that list to a dedicated web dashboard for HR to answer - reducing repeat walk-in questions.</li>
            <li>Built a Telegram bridge to the company's IT Helpdesk system, extending IT support access to offices outside Almaty that had no direct system access.</li>
          </ul>

          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Telegram Bot API</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">MySQL</span>
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Automation</span>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Education</h2>

        <div className="space-y-6">
          <div className="space-y-1">
            {/* EDIT: Your degree */}
            <p className="font-semibold text-slate-900">BSc Software Engineering</p>

            {/* EDIT: Your university */}
            <p className="text-slate-600">Sunway University</p>

            {/* EDIT: Your expected graduation year */}
            <p className="text-slate-500 text-sm">Expected Graduation: Aug 2027</p>

            <a href="https://docs.google.com/document/d/1pl2hxUMvKbF4hIPqrvi7sj3OFxAkdkkvSJiE9D5an7w/edit?usp=sharing"
               target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors pt-1">
              View Projects & Assignments →
            </a>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Software Engineering</p>

            <p className="text-slate-600">Alma Almaty Management College</p>

            <p className="text-slate-500 text-sm">2021 – 2024 · GPA: 3.6</p>

            <a href="https://cmab.edu.kz/?lang=en"
               target="_blank" rel="noopener noreferrer"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors pt-1">
              View College Website →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Skills</h2>

        {/* EDIT: Replace or add skills. Each skill is a <span> tag — just copy and paste one. */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Data Structures &amp; Algorithms</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">OOP</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Java</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Javascript</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Rest API</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Git</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">AI</span>
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Razorpay</span>
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
             Built a Telegram bot that uses Claude AI to automatically record and categorize personal expenses (food, utilities, etc.) and generate detailed spending reports for any custom date range
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
            <ProjectDemoButton videoId="YGb23V2sEFM" title="AI-powered expenses bot tracker demo" />
          </div>

          {/* ── PROJECT 2 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Datastation App</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Designed and developed an app for Datastation, a device that scans library books and syncs them over the network into a library robot's database - handling 200+ book scans in a single sync.
            </p>

            {/* EDIT: Technologies used in this project */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Python</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">Raspberry Pi</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">SQLite</span>
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-medium">NFS</span>
            </div>

            {/* EDIT: Your GitHub link for this project */}
            <a href="https://github.com/sanzhar-kuatov/datastation_gui"
               className="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              View on GitHub →
            </a>
            <ProjectDemoButton videoId="Ltjs949a8hU" title="Datastation App demo" />
          </div>

          {/* ── PROJECT 3 ── */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">AI Growth Coach Platform</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
              Developed a full-stack web platform, used by 100+ users, where they track personal goals, habits, and daily reflections guided by an AI coach; integrated Razorpay to handle subscription payments
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
              View Website →
            </a>
          </div>

          {/* ── PROJECT 4 ── Copy this block to add more projects */}
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">

            {/* EDIT: Project name */}
            <h3 className="text-lg font-semibold text-slate-900">Discord Member Verifier</h3>

            {/* EDIT: One sentence describing the project and what you learned */}
            <p className="text-slate-600 text-sm leading-relaxed">
             Automated student verification for Sunway Game Development Club’s Discord server using Google Sheets as a live member registry - verified 15+ members and cut manual onboarding time by 5-10 minutes per signup
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

          {/* ── PROJECT 5 ── Copy this block to add more projects */}
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
              View Website →
            </a>
          </div>

        </div>
      </section>

      {/* ─── CERTIFICATES ──────────────────────────────────────────── */}
      <CertificatesSection />

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Contact</h2>

        <p className="text-slate-600 mb-4">
          Open to internship and graduate opportunities - feel free to reach out.
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
