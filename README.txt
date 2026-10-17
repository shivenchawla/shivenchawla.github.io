Shiven Chawla - Personal Research Homepage
========================================

Static research portfolio, served directly by GitHub Pages. No build step,
package installation, API credentials, or runtime profile services are needed.

Preview locally:
    python -m http.server 8000
Then open http://localhost:8000.

The homepage (index.html) contains an introduction, three highlights, and a
brief academic-service summary. research.html contains the full collection,
service.html contains academic service, and about.html contains career history.
All four pages share assets/css/studio.css; only research.html loads
assets/js/studio.js. Work entries are semantic HTML articles. Their data-topics
and data-type attributes power optional search and filters. The HTML select
options define valid topic and type values. Work is grouped by publication type,
with separate talks and contributions groups; empty groups hide when filtering.
Filters can be shared using
?topic=emulation, ?type=publication, or ?q=ATLAS.
All work and profile links remain available without JavaScript. The topic map
is deferred; research appears in one collection and student work appears only
in Academic Service. The career timeline uses native expandable details.

GitHub Pages currently publishes the root of master. Work on a separate branch
does not change production. Preserve CNAME (shivenchawla.com), .nojekyll,
resume.html, and pdfFiles/ when deploying. The original resume and older
projects remain linked from the About page as legacy material.

Content boundaries:
- Do not publish raw LinkedIn or Web of Science exports or reviewed manuscript
  titles. Peer-review counts distinguish entries from repeated review rounds.
- Student implementations are credited to their authors. Service periods are
  not graduation dates; do not label theses as officially published without
  a verified publication record.
- MITRE ATLAS contribution details and the BSides talk's full case study await
  source verification. Current copy deliberately makes no specific technique,
  case-study ownership, or unverified outcome claims.
- Publication and writing records use the supplied publication inventory and its
  source links. Published journal/conference papers precede theses, preprints,
  reports, and articles; this is editorial ordering, not a citation ranking.
  Scholar profiles were inaccessible during this update.
- arXiv records are labeled preprints or technical reports, not conferences.
  Lessons links its preprint and whitepaper together to avoid double counting.
- Article contributions are user-reported, not assertions of byline authorship.
  Exact contribution details and complete author lists need source verification.
  The Counterfit article predates the listed development role; confirm the
  relationship before strengthening its credit. The PyRIT announcement's source
  URL dates it to February 2024, correcting the inventory's 2022 date.
- The BSides entry uses a descriptive heading, not a verified session title.
- Cyber-physical and industrial control security are forward-looking interests,
  not claims of established SCADA experience.

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