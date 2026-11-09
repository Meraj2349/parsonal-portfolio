# CV source

`resume.html` is the source of `FrontEnd/public/CV/Md Meraj Mridha-Resume.pdf`.
Edit it, then rebuild the PDF with:

```bash
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf="FrontEnd/public/CV/Md Meraj Mridha-Resume.pdf" "file://$PWD/cv-source/resume.html"
```
