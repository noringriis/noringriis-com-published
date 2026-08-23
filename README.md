# noringriis-com-published

This repository is **generated output**. Nothing here is written by hand.

It holds the built version of [noringriis.com](https://noringriis.com), published
to the `gh-pages` branch by a GitHub Action on every push to the source repo's
`main`. GitHub Pages serves that branch at the apex domain via the `CNAME` file.

## Don't edit here

Any commit made directly to this repository is overwritten by the next deploy.
The build replaces the branch contents wholesale, so a hand edit survives until
the next push to source and then vanishes without warning.

## Where the source lives

`noringriis/noringriis-com` — a private repository containing the Astro project.
That's the one to clone, and the only place changes should be made. It is private
by design: this split exists so the source stays closed while the built site
stays public, which is what GitHub Pages requires on a free plan.

If you've landed here looking for the code, it isn't public. The site itself is
the artifact worth looking at.
