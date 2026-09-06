# Hareshkumar Nadaraja — personal portfolio

A self-contained, editable static website. No build command, framework, package installation, third-party font, or external image is required. Open `index.html` in a browser to preview it.

## Content source

Professional experience, education, skills, certifications, awards, volunteering, email, and phone are based on the supplied Hareshkumar Nadaraja_Resume.md. The PDF was not available; the Markdown resume became the main source. No unsupported performance metrics were added.

The education list in the source was flattened; qualification/institution/date entries are paired in their listed order. The school date range is explicitly labelled as the attendance period listed in the resume. Employment “Present” and degree “In progress” reflect the supplied resume.

The three project titles come from the user request. Project descriptions deliberately avoid unverified features, technology stacks, and outcomes. Visuals are original illustrative interface/typographic concepts, not actual project screenshots. Replace them with screenshots if desired.

LinkedIn uses the URL explicitly supplied in the request, preserving its hyphen even though the Markdown transcription omits it. WhatsApp uses the user's separate number; the resume phone remains a separate call link. GitHub and repository URLs remain empty and clearly labelled for replacement.

## Edit the website

- `index.html`: all content, sections, LinkedIn links, and metadata.
- `styles.css`: colours at `:root`, layouts, breakpoints, textures, and animations.
- `script.js`: the four profile/repository URL values at the top, mobile navigation, reveal effects, and current year.
- `favicon.svg`: small HN monogram.

Set `github`, `sunrise`, `kawshalya`, and `portfolio` in `portfolioLinks` to verified HTTPS URLs. An empty value keeps its label visibly marked as unavailable. There are no fake `#` links to repositories and no invented GitHub account.

The page is readable without JavaScript. With JavaScript disabled, mobile navigation stays visible and external placeholders stay unavailable. Reduced-motion preferences disable animations and smooth scrolling. Motion is brief and uses no animation library, video, or continuous rendering loop.

## Deploy to GitHub Pages

1. Place the contents of this folder in the root of the repository you want to publish, including `.nojekyll`.
2. In repository Settings → Pages, select deployment from a branch and the branch/root folder containing `index.html`.
3. All assets use relative paths, so repository subpaths are supported.

## Deploy to Netlify

Upload this folder using Netlify's manual deployment flow, or connect a repository containing these files. Use no build command and `.` as the publish directory. `netlify.toml` includes this configuration.

## Checks before public launch

Add your real GitHub/project links, confirm the education pairings and LinkedIn address, and review the site on your phone. LinkedIn, email, telephone, and WhatsApp links are configured; there is no form or backend service.

## Theme and WhatsApp

The header switch toggles dark and light mode and remembers the selection using local storage. Dark is the default. Both palettes keep the red accents and support reduced motion.

WhatsApp opens a direct chat at `https://wa.me/94764041027` from the contact section or the fixed corner button. The number supplied was `0764041027`; the international link assumes Sri Lanka (+94). Change the three WhatsApp URLs and displayed number in `index.html` if that country code needs correcting. Opening the link does not automatically send a message.

## Samurai portfolio project card

The former Business Analytics / Software Engineering coursework card has been replaced with this portfolio website as requested. Its generated samurai emblem is saved locally as `samurai-emblem.png`. Glossy highlights and the image entrance animate briefly when the project section is revealed; hover provides a subtle lift. Reduced-motion preferences disable these effects. The card works in both themes. Add the portfolio repository URL to `portfolioLinks.portfolio` in `script.js`.

## Resume and project disclosures update

The site now includes resume.html (single-column, print-friendly) and resume.txt (plain text for application workflows). These improve readability and text extraction; acceptance by a particular ATS depends on that system. Native details/summary controls expose project information without JavaScript and support keyboard input. Sunrise and Kawshalya stack/architecture details remain explicitly unconfirmed until their source is supplied. The portfolio stack is verified against the delivered files. GitHub requests now open an email enquiry instead of an inactive button.
