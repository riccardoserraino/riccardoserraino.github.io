# How to update this website

The site is built by **GitHub Pages** with **Jekyll**. You edit text files, push to GitHub, and the site at https://riccardoserraino.github.io updates on its own after about a minute. You don't need to install anything to make changes.

## 1. Where things are

| What you want to change | File |
|---|---|
| Home page intro text | `index.md` (the text under the `---` block) |
| Timeline, stats, skills, certifications, languages | `_data/cv.yml` |
| Emails, social links, site title | `_config.yml` |
| A project page | `_projects/<name>.md` |
| Images | `assets/images/projects/<name>/` |
| CV and IELTS PDFs | `assets/CV.pdf`, `assets/Band_8_IELTS.pdf` |
| Colours and fonts | `assets/css/_sass/variables.scss` |

You won't normally need to touch `_layouts/`, `_includes/` or the other `.scss` files: they control the design.

## 2. Edit text

Open the file, change the words, save. Lines in `_data/cv.yml` and in the top block of project files follow the pattern `key: value`. Keep the spaces at the start of each line exactly as they are. If a value contains a `:`, wrap it in quotes: `team: "Supervisor: Prof. X"`.

To replace your CV, overwrite `assets/CV.pdf` with a file of the same name.

## 3. Add a project

1. Copy an existing file in `_projects/`, for example `odometry-estimator.md`, and rename it (lowercase, dashes, no spaces). The file name becomes the page address: `/projects/<file-name>/`.
2. Edit the top block:
   - `degree:` use `msc` or `bsc` (this decides the section)
   - `order:` its position in that section (1 = first)
   - `featured: true` makes it the big card at the top of its section. Only use it on one project per degree, such as your MSc thesis.
   - `cover:` path to the card image
   - `summary:` the short text shown on the card
   - `tags:`, `links:`, `metrics:` and `pipeline:` are optional, so delete any you don't need
3. Write the page below the second `---` using Markdown: `## Heading`, `**bold**`, `- list item`, `[link text](https://...)`.
4. Add an image to the page with:
   `{% include figure.html src="/assets/images/projects/<name>/picture.webp" caption="Your caption" %}`
   For two images side by side:
   `{% include figure-pair.html a="/path/one.webp" a_caption="..." b="/path/two.webp" b_caption="..." %}`

Then change the `order:` of the other projects in the same degree if needed.

Icons available for `links:`: `github`, `file-text`, `book-open`, `presentation`, `mail`, `box`, `camera`, `brain`, `tractor`, `link`, `download`.

## 4. Keep it light

Save images as **WebP**, at most about **1200 px wide**. Free tools: [squoosh.app](https://squoosh.app) in the browser, or export as WebP from any image editor. Aim for under 200 KB per image.

## 5. Publish

**From the GitHub website (easiest):** open the repository, click the file, click the pencil icon, edit, then click *Commit changes*. To upload an image, open the folder and use *Add file → Upload files*.

**From your computer** (in this folder):

```bash
git add .
git commit -m "Update projects"
git push
```

Check the result after a minute or two. If the site doesn't change, look at the **Actions** tab on GitHub: a red ✗ means there was a build error, and clicking it shows which file caused it. It is usually a missing quote or bad indentation in a top block.

## 6. Preview before publishing (optional)

Install Ruby, then run once in this folder: `gem install bundler jekyll && bundle install`. After that:

```bash
bundle exec jekyll serve
```

Open http://localhost:4000. The page reloads when you save a file.

## 7. Bachelor thesis requests

The thesis page has no direct download. Its *Request the thesis* button opens an email to you, and you reply with the Drive link yourself. To change the email text, edit the `mailto:` link in `_projects/semg-motion-tracking.md`.

## Safe to delete

`_pages/projects.md`, `_includes/signal.html`, `assets/css/_sass/google-fonts.scss`, `assets/images/profile.png` and the old `.png`/`.jpg` files in `assets/images/projects/` (the site now uses the `.webp` versions). None of them is used any more.
