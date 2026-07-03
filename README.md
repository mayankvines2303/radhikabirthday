# 28 Letters For Radhika ❤️

A private, cinematic birthday website — 28 letters, one per day, counting down to **29 July 2026**. Pure HTML/CSS/JS, no build step. Open `index.html` and it just works.

---

## 1. Opening the site

Just double-click `index.html`, or open it in any browser. No server, no install, no build tools.

- **Password:** `Radhika2907`
- Once unlocked, the site stays unlocked for that browser session (closing the tab requires it again; closing and reopening the *browser* usually keeps it, since it's stored per-session).

---

## 2. How the daily unlock works (no editing needed)

Everything is calculated automatically from **today's real date** vs. the birthday date. You never need to manually "unlock" a day.

- `Day 28` unlocks 28 days before the birthday.
- `Day 1` unlocks the day before the birthday.
- The `Birthday` card unlocks at midnight on 29 July 2026, and the whole homepage switches into birthday mode (confetti, fireworks, cake, final letter).

If you ever need to change the birthday date, open `script.js` and edit this line near the top:

```js
birthday: new Date(2026, 6, 29, 0, 0, 0), // month is 0-indexed: 6 = July
```

---

## 3. How to replace photos

All photos are just file paths in `script.js` — no code to touch beyond a filename.

**Letter photos (one per day):**
Save images into `assets/images/` named exactly:
```
day-1.jpg, day-2.jpg, ... day-28.jpg, birthday.jpg
```
The letter for that day will show it automatically. If a file is missing, a soft placeholder shows instead — nothing breaks.

**Gallery photos:**
Save images into `assets/images/` named:
```
gallery-1.jpg, gallery-2.jpg, ... gallery-9.jpg
```
Want more or fewer? Open `script.js`, find the `GALLERY` array near the top, and add/remove lines like:
```js
{ src: "assets/images/gallery-10.jpg", caption: "Your caption here" },
```

> Any image format works (`.jpg`, `.png`, `.webp`) as long as the filename in `script.js` matches exactly.

---

## 4. How to replace music

Save your mp3 files into `assets/music/`.

**Background playlist** — edit the `PLAYLIST` array in `script.js`:
```js
const PLAYLIST = [
  { title: "Our Song — track 1", src: "assets/music/track-1.mp3" },
  { title: "Our Song — track 2", src: "assets/music/track-2.mp3" },
];
```
Add as many tracks as you like, or rename the files to match.

**Voice notes per letter** — save files named:
```
voice-day-1.mp3, voice-day-2.mp3, ... voice-day-28.mp3, voice-birthday.mp3
```
Tapping "Play Voice Note" inside a letter plays the matching file automatically.

---

## 5. How to replace videos

Drop video files into `assets/videos/`. The birthday page has a "Final Video" moment — to wire one up, open `index.html`, find the `#birthdayMode` section, and add:
```html
<video src="assets/videos/final-video.mp4" controls style="max-width:90%;border-radius:18px;"></video>
```
right after the `<div class="cake">` block.

---

## 6. How to edit the letters

Open `script.js` and scroll to the `LETTERS` section near the top. Each day is generated from a loop with placeholder text — replace the loop with real, individual entries if you want each letter to be unique, e.g.:

```js
LETTERS[1] = {
  title: "The night before everything",
  body: "Write your real letter here...\n\nUse \\n\\n for paragraph breaks.",
  photo: "assets/images/day-1.jpg",
  voice: "assets/music/voice-day-1.mp3",
  song: "Perfect — Ed Sheeran",
  memory: "The night we stayed on call until 4am.",
  surprise: "A tiny surprise text just for today.",
};
```

Do this for any day you want personalized; days you don't touch keep the placeholder text so the site still works while you write.

The final birthday letter lives in the `BIRTHDAY_LETTER` object, right below the loop.

---

## 7. How to edit other sections

All content lives near the top of `script.js`, clearly labelled:

| Section | Variable in `script.js` |
|---|---|
| Timeline ("Our Story") | `TIMELINE` |
| 100 Reasons | `REASONS` |
| Future Dreams | `DREAMS` |
| Gallery | `GALLERY` |
| Music playlist | `PLAYLIST` |

Each is a plain JavaScript array — copy an existing entry, change the text, done.

---

## 8. The secret page

Tap the small heart icon in the bottom-left corner **5 times** to reveal a hidden page. Edit its message in `index.html` inside `#view-secret`.

---

## 9. How to change the password

Open `script.js` and edit:
```js
password: "Radhika2907",
```
to whatever you'd like.

---

## 10. How to deploy on GitHub Pages

1. Create a new GitHub repository (private is recommended, since this is personal).
2. Upload the entire `RadhikaBirthday` folder contents to the repository (drag-and-drop on github.com works fine, or use `git`):
   ```bash
   git init
   git add .
   git commit -m "28 letters for Radhika"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
5. Wait a minute — your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

> If the repo is private, GitHub Pages requires GitHub Pro/Team/Enterprise, or a paid personal account, to publish a private repo's Pages site — otherwise make the repo public (fine for a password-protected personal site, but remember the password itself isn't strong security, it's just a sweet gate, not real encryption).

---

## 11. Folder structure

```
RadhikaBirthday/
├── index.html          → all page structure & views
├── style.css            → all design tokens & styles
├── script.js             → all logic + ALL editable content at the top
├── assets/
│   ├── images/            → letter photos, gallery photos
│   ├── music/             → background playlist, voice notes
│   ├── videos/            → final birthday video
│   ├── fonts/             → (optional) local font files if you don't want Google Fonts
│   └── icons/             → (optional) custom icons
├── pages/                → reserved for future standalone pages (not required — the
│                            site is a single-page app so it works reliably offline)
└── README.md
```

---

## 12. Notes

- Works fully offline once fonts are cached — the only internet dependency is the Google Fonts stylesheet link in `index.html`. To go fully offline, download the fonts into `assets/fonts/` and swap the `<link>` tags for local `@font-face` rules in `style.css`.
- Everything gracefully degrades: missing photos, music, or voice notes show a soft placeholder instead of breaking the page.
- Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step, no dependencies to install.

Made with ❤️, for Radhika.
