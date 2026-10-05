# Rubayyat Hashmi — academic website, version 2

A lightweight, eight-page academic website for `rubayyat/rhashmi.com`.
Plain HTML, shared CSS, and a small progressive-enhancement navigation script.
No package manager, build step, external fonts, analytics, or framework.

## View the design now

Unzip the project, then double-click `index.html`. It opens in your browser.
All pages, styles and navigation work locally without a server or internet.
Keep the `assets` folder beside the HTML files.

For an optional local web server, run `python3 -m http.server 8000` from this
folder and open `http://localhost:8000`.

## GitHub Pages setup

1. At <https://github.com/new>, select owner **rubayyat**, enter **rhashmi.com**
   as the repository name and choose **Public**. An empty public repository is
   sufficient; adding a README also works if you want an assistant to populate it.
2. To upload the files yourself: open the repository's **Code** tab, choose
   **Add file → Upload files** (or **uploading an existing file** for an empty
   repository), and drag the extracted project contents into it. `index.html`
   must be at the repository root, alongside `assets/`. Do not upload the ZIP
   or nest the contents inside a second `rhashmi.com` folder. Commit to **main**.
   Include `.nojekyll` if your file picker shows it; this site also works through
   the default Pages build because it has no Jekyll-sensitive content.
3. Open **Settings → Pages**. Under **Build and deployment**, select
   **Deploy from a branch**, choose **main** and **/(root)**, then **Save**.
4. Once GitHub reports a successful deployment, use the URL shown in Pages
   settings. The expected project URL is **https://rubayyat.github.io/rhashmi.com/**.
   This is an expected address, not evidence that deployment has happened.
5. Leave **Custom domain** blank. This project contains no `CNAME` file and does
   not configure `rhashmi.com`. No changes are needed to Squarespace or Google Sites.

GitHub Pages is available for public repositories on GitHub Free. Private-repository
Pages availability depends on the GitHub plan. The published Pages site is publicly
accessible; it is a separate design preview, not a private or password-protected site.

Official instructions:
- <https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository>
- <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## Project structure

```text
rhashmi.com/
├── index.html
├── research.html
├── publications.html
├── teaching.html
├── resources.html
├── cv.html
├── about.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/navigation.js
│   ├── images/README.md
│   └── documents/README.md
├── .nojekyll
├── .gitignore
├── README.md
└── CONTENT_CHECKLIST.md
```

## Design decisions

- Palatino-family system fonts give the site the character of an academic CV,
  with native sans-serif navigation and small labels. The exact serif varies
  with the fonts installed on the visitor's device; there is no font download.
- White, charcoal, navy and conventional blue links keep attention on research.
- A narrow section-heading column, generous reading measure, fine horizontal
  rules and numbered research areas create structure without large cards.
- Health and mental health lead, followed by labour/disability, econometrics
  and policy evaluation, and energy/environmental economics.
- Working papers and current projects have a distinct, pale blue-grey section.
- Publication styles support year groups, hanging indents, bold author names,
  italic journals and separate article/DOI/working-paper links.
- A compact mobile disclosure uses a real button, `aria-expanded`, keyboard
  interaction, Escape-to-close and visible focus states. Without JavaScript,
  all navigation links remain available.
- All asset and internal-page links are relative, so the project works below a
  GitHub Pages repository path as well as locally.

## Editing

Edit the HTML directly. Navigation and footer HTML are intentionally present in every page so the site works without a build process or JavaScript rendering. Keep shared navigation/footer edits consistent across all eight HTML files.

Change the shared design in `assets/css/styles.css`; colour and font tokens are at the top. `assets/js/navigation.js` only controls the compact mobile menu.

### CV

The approved October 2026 CV is included at `assets/documents/Rubayyat_Hashmi_CV.pdf` and is linked from the homepage and CV page.

### Publications

The Publications page contains the 33 peer-reviewed journal articles listed in the supplied October 2026 CV, grouped by year, plus the working papers and research-in-progress items. The featured homepage papers have verified article/DOI links.

### Portrait

The homepage uses the supplied professional portrait stored locally at `assets/images/rubayyat-hashmi.jpg`, so the site does not depend on an external image host.

## Preview metadata

Every page has its own title and description, basic Open Graph text metadata,
and a site-specific monogram favicon. The draft includes `indexable, nofollow`
while content is being reviewed. This is a search-engine request, not access
control. Remove it only when the completed content is approved for indexing.
No canonical URL, sitemap or custom domain is asserted for this draft.

## Content-populated preview

This version has been populated from Rubayyat Hashmi's October 2026 academic CV. The CV PDF is included at `assets/documents/Rubayyat_Hashmi_CV.pdf`. Selected article links and DOI links were verified for the three homepage featured papers; SSRN links were verified for the two listed SSRN working papers. The approved homepage portrait is stored locally at `assets/images/rubayyat-hashmi.jpg`.

This version does not contain or modify any existing live-site configuration.

## Preview verification

The original layout was tested across desktop and mobile widths. This version keeps the same structural and responsive design while refining content and adding the Resources page. A final browser and link check should be run after page-by-page content review and before launch.
