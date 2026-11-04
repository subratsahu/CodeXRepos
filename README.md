# Priyanka Art & Craft Gallery

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript. It has no framework, package manager, or build step. Open `index.html` locally or publish this folder on a static host.

## Project files

- `index.html` — page content, SEO metadata, and navigation.
- `styles.css` — responsive layout, colors, typography, and focus styles.
- `script.js` — category filters and accessible image lightbox.
- `photos.js` — editable gallery list, captions, alternative text, groups, and image dimensions.
- `images/` — optimized full-size images and 600px-long-side thumbnails.
- `Photos-1-001/` — original photos; these have not been changed.

## Add or update photos

1. Put the original photo in `Photos-1-001/` to keep your source file with the project.
2. Create two optimized JPEG copies in `images/`: a full image with its longest side no larger than 1600px, and a thumbnail with its longest side no larger than 600px. Do not enlarge smaller originals.
3. Add an entry to the `photos` array in `photos.js`. Set `filename` and `thumbnail` to the two optimized filenames, `original` to the source filename, `group` to one of the IDs below, and write a specific `alt` description. `title`, `width`, and `height` are also used by the gallery and lightbox.
4. To change gallery order, move the whole photo entry up or down in that array. To create a new filter, add its label and ID to `photoGroups` and use that ID on the relevant entries.

Available group IDs are `decor`, `devotional`, `paper`, and `keepsakes`. The first entry in `photoGroups` is the all-photos filter.

## Change the page text and contact details

Edit headings and the maker bio directly in `index.html`. The current bright sunny-studio palette and font choices are in the `:root` variables in the **Bright sunny studio theme** section near the bottom of `styles.css`. Google Fonts are loaded from Fraunces and Manrope; system font fallbacks are included.

The enquiry button opens a prefilled email draft to `psworldhub@gmail.com`. Update the `mailto:` links in `index.html` if the contact address changes. Add social links in the contact section or footer when you have the profile URLs.

## Open locally

Double-click `index.html` or open it in a browser. All page assets use relative paths, so the site works from a folder without a local server.

## Deploy

### GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and root (`/`) folder, then save.
4. Use the Pages URL shown by GitHub after publishing.

### Netlify

Drag this project folder into Netlify's manual deploy area, or connect the GitHub repository. No build command or publish subdirectory is needed; the site entry point is `index.html` at the project root.
