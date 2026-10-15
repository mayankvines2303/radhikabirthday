# 💌 Sorry, Cutie Patootie — a funny‑romantic apology website

A small surprise website for Radhika, made with love by Mayank.
Built with **React + Vite + Framer Motion** (plus plain CSS animations and a canvas particle heart).

**The flow**

1. **Welcome** – a glowing heart forms from particles and beats, the greeting types itself out, then **Open Your Surprise 💌**.
2. **Apology** – the message, with **Maaf Kar Diya ❤️** and **Nahi Kiya 😤**.
3. **Nahi Kiya** – the crying monkey, falling tears and broken hearts. Buttons: **Achha Baba, Maaf Kiya ❤️** (goes to the happy screen), **Still Nahi 😈** (extra dramatic meltdown) and **Try Again 🥺** (back to the apology).
4. **Maaf Kar Diya** – the happy monkey, heart confetti and sparkles. Buttons: **Send a Virtual Hug 🫂**, **Ek Kiss Toh Banta Hai 😚** and **Replay My Surprise 💌** (restarts everything).

Extras: music play/pause button, sound‑effects mute button, ripple buttons, reduced‑motion support, responsive layout for phones and desktop.

---

## Run it locally

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

Create the production build and preview it:

```bash
npm run build
npm run preview
```

---

## Publish on GitHub Pages

The project is already configured for Pages (`base: './'` in `vite.config.js`, so every image, font and script uses a relative path and works under any repository name).

### Option A – automatic deploy with GitHub Actions (recommended)

1. Create a new repository on GitHub (for example `sorry-radhika`).
2. Upload **all files in this folder** to it (drag‑and‑drop on github.com works, or use git):

   ```bash
   git init
   git add .
   git commit -m "Apology website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

   > Make sure the hidden `.github` folder is uploaded too. It contains the deploy workflow.
3. In the repository go to **Settings → Pages**. Under **Build and deployment → Source** choose **GitHub Actions**.
4. Open the **Actions** tab. The *Deploy to GitHub Pages* workflow runs on every push to `main` (about a minute). When it turns green, your site is live at

   `https://<your-username>.github.io/<your-repo>/`

   (You can also start it by hand from Actions → *Deploy to GitHub Pages* → *Run workflow*.)

### Option B – deploy from your computer with `gh-pages`

1. Push the project to GitHub as above (and make sure `git remote origin` is set).
2. Run:

   ```bash
   npm install
   npm run deploy
   ```

   This builds the site and publishes the `dist` folder to a `gh-pages` branch.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.
4. Your site appears at `https://<your-username>.github.io/<your-repo>/`.

---

## Good to know

- **Music:** the romantic tune is synthesized live in the browser (Web Audio), so there is no audio file to break after deployment. Browsers don't allow sound before a tap or click, so the music starts on her first interaction (tapping *Open Your Surprise* does it). Until then a small "tap for music 🎶" hint sits next to the play button. If she pauses the music, or mutes the sound effects, the choice is remembered on her device.
- **Images:** the two monkeys live in `src/assets/` (`monkey-sad.png` and `monkey-happy.png`) and are bundled by Vite, so they ship with the site. To change one, replace the file keeping the same name.
- **Texts:** all the messages are in `src/components/` (`Welcome.jsx`, `Apology.jsx`, `SadScreen.jsx`, `HappyScreen.jsx`, `Overlay.jsx`).
- **Reduced motion:** if her phone or computer is set to "reduce motion", the heart appears instantly and animations are minimal. Everything still works.
- **Fonts:** Dancing Script and Quicksand are bundled with the site (no Google Fonts request).

## Project structure

```
├── index.html
├── vite.config.js            # base: './' for GitHub Pages
├── package.json
├── .github/workflows/deploy.yml
├── public/                   # favicon, .nojekyll
└── src/
    ├── main.jsx
    ├── App.jsx               # screen state + navigation
    ├── audio.js              # synthesized music + sound effects
    ├── fx.jsx                # bursts, falling tears, rising kisses
    ├── styles.css
    ├── assets/               # the two monkey images
    └── components/           # Welcome, Apology, SadScreen, HappyScreen, Overlay, ...
```

Made with love by Mayank ❤️
