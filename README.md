# Portfolio Template

A live portfolio + resume site you can deploy in under 25 minutes.

---

## Steps

1. Click **"Use this template"** → **"Create a new repository"** → name it `portfolio` → click **Create repository**

2. In your new repo, open `app/page.jsx`

3. Replace every line marked with `{/* EDIT: ... */}` with your own information
   - Your name, title, bio, skills, projects, education, email, GitHub URL, LinkedIn URL

4. Open `app/layout.jsx` and update the `title` and `description` with your name

5. Upload your `resume.pdf` to the `/public` folder (drag and drop in GitHub's file browser)

6. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → select your repo → click **Deploy**

7. Copy your live URL and paste it into the Google Form — you're done!

---

## Fallback: Deploy to GitHub Pages (if Vercel fails)

1. In your repo, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The workflow file (`.github/workflows/deploy.yml`) is already included — it runs automatically on every push

---

## Stretch Tasks (for fast finishers)

1. **Change the accent colour** — search for `indigo` in `page.jsx` and replace it with another Tailwind colour (e.g. `violet`, `sky`, `emerald`)
2. **Add a real project** — copy one of the project card blocks in `page.jsx` and fill in your own project details and GitHub link
3. **Update your contact links** — make sure all three links (email, GitHub, LinkedIn) point to your real profiles

---

## File Structure

```
app/
  layout.jsx   ← page title and meta description
  page.jsx     ← ALL your content lives here (name, bio, projects, etc.)
  globals.css  ← global styles (no need to edit)
public/
  resume.pdf   ← replace this with your own PDF
```
