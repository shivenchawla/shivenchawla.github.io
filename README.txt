Shiven Chawla - Research Studio
==============================

Static research portfolio, served directly by GitHub Pages. No build step,
package installation, API credentials, or runtime profile services are needed.

Preview locally:
    python -m http.server 8000
Then open http://localhost:8000.

The redesigned homepage uses index.html, assets/css/studio.css, and
assets/js/studio.js. Work entries are semantic HTML articles. Their data-topics
and data-type attributes power the optional search and filters. Topic names
and descriptions are maintained in studio.js and the HTML filter options.
Filters can be shared using ?topic=emulation, ?type=supervision, or ?q=ATLAS.
All work and profile links remain available without JavaScript.

GitHub Pages currently publishes the root of master. Work on a separate branch
does not change production. Preserve CNAME (shivenchawla.com), .nojekyll,
resume.html, and pdfFiles/ when deploying. The original resume and older
projects remain linked from the About section as legacy material.

Content boundaries:
- Do not publish raw LinkedIn or Web of Science exports or reviewed manuscript
  titles. Peer-review counts distinguish entries from repeated review rounds.
- Student implementations are credited to their authors. Service periods are
  not graduation dates; do not label theses as officially published without
  a verified publication record.
- MITRE ATLAS contribution details and the BSides talk's full case study await
  source verification. Current copy deliberately makes no specific technique,
  case-study ownership, or unverified outcome claims.
- The publication profiles link to the broader record; a verified bibliography
  can be added after source review.

Original template attribution (retained legacy assets and resume):
Strata by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A simple, minimalist template that actually began life as an unused redesign of my
personal site. Includes a (configurable) parallax background effect, Poptrox-powered
lightbox gallery, a bunch of pre-styled elements, and Sass sources for the Sass-inclined.

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

PS: Not sure how to get that contact form working? Give formspree.io a try (it's awesome).


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		CSS3 Pie (css3pie.com)
		background-size polyfill (github.com/louisremi)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)