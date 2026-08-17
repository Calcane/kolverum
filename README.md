# KOLVERUM

Official website source for **KOLVERUM**.

## Structure

- `index.html` — landing page, active projects and release history
- `styles.css` — visual system and responsive layout
- `script.js` — minimal front-end interactions
- `robots.txt` — crawler directives
- `sitemap.xml` — sitemap
- `CNAME` — custom domain configuration for `kolverum.com`

## Content logic

### Active projects

The section **Daran arbeite ich gerade** contains themes/projects that are currently active. A project remains here even after individual songs from it are released.

Each project keeps three fields:

- **Grund** — why the music/project is needed
- **Idee** — what kind of musical concept is being developed
- **Ziel** — what the music should cause or achieve when heard

Current project states should use a simple vocabulary: **Aktiv**, **Pausiert**, **Abgeschlossen**.

### Release history

Every published song gets its own entry in **Geschichte**. The source project may remain active at the same time. Release entries can contain:

- source project
- song title
- release date when known
- short origin/story note
- listening/video links when live

`index.html` contains an invisible `release-template` so the first and later releases can be added consistently. The empty-history notice should be removed as soon as the first release is added.

When an entire project is genuinely finished, it can be moved from the active section into history with its original Grund, Idee, Ziel and all associated songs.

## First-release switch

When the first song is publicly available:

1. Add the release entry to history.
2. Remove the empty-history notice.
3. Unhide the hero element marked `data-listen-cta` and point it to the best listening destination.
4. Keep the underlying project in **Daran arbeite ich gerade** if more songs are planned.

## Social and streaming links

The footer already contains a hidden element marked `data-social-links`. Keep it hidden until official URLs are known. Once added, link `kolverum.com` back from the official KOLVERUM profiles wherever the platform allows it.

Streaming links should only be shown after the corresponding artist/song destination is live and verified.

## Deployment

The site is a static GitHub Pages website for `https://kolverum.com/`.
