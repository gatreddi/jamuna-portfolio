# Jamuna Gatreddi — Portfolio

A responsive React + Vite + TypeScript portfolio with a restrained editorial visual style.

## 1. Requirements
- Install Node.js LTS from https://nodejs.org/
- A code editor such as Visual Studio Code

## 2. Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local address Vite prints, usually `http://localhost:5173`.

To check the production build, run `npm run build`. To preview it, run `npm run preview`.

## 3. Add your resume PDF
1. Export your current resume as a PDF.
2. Rename it exactly `resume.pdf`.
3. Copy it into the `public/` folder so the path is `public/resume.pdf`.
4. The Resume links in the header and hero already point to `/resume.pdf`.
5. Until you add this file, those links will not download a real resume. Add the file before publishing.

## 4. Replace project preview placeholders
The project cards intentionally use neutral typographic placeholders; they are not fake screenshots.
1. Put your genuine screenshots in `public/images/` (create the folder if needed), for example `vital-aid.png`.
2. In `src/App.tsx`, find each `<div className="project-preview">...</div>` and replace the placeholder with an image, e.g.:
   `<img className="project-image" src="/images/vital-aid.png" alt="Vital Aid Figma prototype screen" loading="lazy" />`
3. Add this CSS to `src/styles.css`:
   `.project-image { width: 100%; height: 100%; object-fit: contain; }`
4. Use only screenshots you actually created or have permission to share. Give each image a useful alt description.

## 5. Add social profile links
The project does not invent GitHub or LinkedIn URLs. Once you have the correct URLs, add links in the contact section of `src/App.tsx`, for example:
`<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noreferrer">GitHub</a>`
Replace the example URL with your actual profile before using it.

## 6. Publish using GitHub + Vercel
### GitHub
1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new repository, e.g. `jamuna-portfolio`.
3. In the project terminal run:
   - `git init`
   - `git add .`
   - `git commit -m "Build personal portfolio"`
   - `git branch -M main`
   - `git remote add origin https://github.com/YOUR-USERNAME/jamuna-portfolio.git`
   - `git push -u origin main`
4. Replace `YOUR-USERNAME` with your real GitHub username. If Git asks you to authenticate, follow GitHub's sign-in flow.

### Vercel
1. Open https://vercel.com/ and sign in with GitHub.
2. Choose **Add New → Project** and import the `jamuna-portfolio` repository.
3. Vercel should detect Vite automatically. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.
5. When deployment finishes, Vercel gives you a public `*.vercel.app` URL. Open it on mobile and desktop, then share that URL.
6. Later, push commits to GitHub; Vercel will rebuild and redeploy automatically.

## 7. Before sharing
- [ ] Add `public/resume.pdf`.
- [ ] Replace preview placeholders with real screenshots when available.
- [ ] Add correct GitHub and LinkedIn URLs if desired.
- [ ] Verify project details, role titles, and date ranges.
- [ ] Run `npm run build` and fix any errors.
- [ ] Test every section link and the mobile menu.
- [ ] Check the deployed website on a phone and desktop.

## Notes
- The contact links use `mailto:` and `tel:` and open the visitor's email or phone app.
- There is no contact form, backend, or fake submission-success state.
- Google Fonts are loaded remotely; the page falls back to system sans-serif fonts if unavailable.
