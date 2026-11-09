# research.iftikharahmed.site

Academic homepage for Iftikhar Ahmed. Plain static files, no build step.

- `index.html` - the whole page, styles included
- `Iftikhar_Ahmed_Research_CV.pdf` - the research CV linked from the page
- `cv/Iftikhar_Ahmed_Research_CV.tex` - its LaTeX source (`pdflatex` twice, then copy the PDF to the root)
- `papers/` - paper PDFs
- `photo.jpg`, `favicon.png` - images
- `vercel.json` - tells Vercel to serve the files as-is

To update: edit `index.html`, commit, and push to the `research` branch.
Vercel redeploys automatically.
