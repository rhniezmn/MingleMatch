# Beicip-Franlab Asia — Mingle Match

Ready-to-publish static website. No Node.js, npm, database, API key, or build step is required.

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Create a GitHub repository, for example `mingle-match` (a public repository works with GitHub Free).
3. Upload the **contents of the extracted `mingle-match` folder** to the repository. `index.html` must be at the repository root, alongside `assets/`, `app.js`, and `style.css`. Do not upload the ZIP itself as the website.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
6. When deployment finishes, use the live URL shown in Pages settings. A project site normally uses `https://YOUR-USERNAME.github.io/mingle-match/`.
7. Open `preview.html` on your published site to inspect the mobile layout at 320, 390, or 480 pixels wide.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Download the QR code

After publishing, open `share.html` on your GitHub Pages site. It generates a QR code for the site's actual HTTPS address and lets you download it as SVG. No external QR service is used.

The QR code from the previous ChatGPT-hosted website still opens that earlier address. Use the NEW code from your GitHub site's sharing page for your booth materials. QR generation is intentionally disabled on localhost and when opening files directly from your computer.

## Edit the website

- `index.html`: text, team names, photographs, and five-screen layout.
- `style.css`: colours, positions, typography, and circular portrait framing.
- `app.js`: navigation, swiping, profile pop-ups, and photo fallbacks.
- `config.js`: LinkedIn and Instagram profile links.
- `assets/company-logo.png`: the shared company logo.
- `assets/team-NAME.webp`: staff portraits, with corresponding `.png` fallback files.
- `assets/scene-1.webp` through `scene-5.webp`: illustrated backgrounds.
- `share.html` and `share.js`: QR sharing page.
- `preview.html`: mobile-size preview.

Keep filenames and letter case unchanged. Images and fonts are bundled locally. The Copy Booth and Surprise buttons have been removed; only LinkedIn and Instagram are shown.

## Preview locally (optional)

With Python installed, run `python -m http.server 8000` in this folder, then visit `http://localhost:8000/`. On some systems use `python3` or `py` instead of `python`.

## Validation

Source checks confirm all six portrait files and fallbacks exist and decode, the same logo asset is used on all screens, and removed buttons are no longer present. Browser verification of the latest layout was unavailable during export. Check the live site on your phone before printing the QR code.

## Assets and credits

Staff photographs and reference artwork were supplied for this company website. Illustrated background plates were adapted from those references. The official company logo comes from https://www.beicip.asia/wp-content/uploads/2018/08/BeicipLogo-v2.png.

Lilita One and Nunito fonts are distributed under the SIL Open Font License; their license files are in `licenses/`. The bundled QR Code Generator library (v1.4.4) by Kazuhiko Arase is MIT-licensed; its copyright and license notice are retained in `assets/qrcode.js`.
