const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { marked } = require('marked');

async function generatePDF() {
    const mdPath = process.argv[2];
    const outPath = process.argv[3];

    if (!mdPath || !outPath) {
        console.error('Usage: node generate_pdf.js <input.md> <output.pdf>');
        process.exit(1);
    }

    const mdContent = fs.readFileSync(mdPath, 'utf8');
    const bodyHtml = marked.parse(mdContent);

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Minor Project 2 Report</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<style>
    @page {
        margin: 20mm 20mm !important;
        size: A4;
    }
    body {
        font-family: 'Inter', 'Segoe UI', Arial, sans-serif !important;
        font-size: 11pt !important;
        line-height: 1.6 !important;
        color: #1a1c21 !important;
        margin: 0 !important;
        padding: 0 !important;
        text-align: justify !important;
    }
    #content {
        padding: 0 !important;
    }
    h1, h2, h3 {
        break-after: avoid !important;
        font-family: 'Inter', sans-serif !important;
    }
    table, pre, tr, img, .mermaid {
        break-inside: avoid !important;
    }
    h1 { 
        font-size: 26pt !important; 
        color: #1e3a8a !important; 
        margin-top: 0 !important; 
        margin-bottom: 5pt !important;
        text-align: left !important;
        font-weight: 700 !important;
        letter-spacing: -0.02em !important;
    }
    .header-divider {
        border: none !important;
        border-top: 2px solid #e2e8f0 !important;
        margin: 10pt 0 30pt 0 !important;
    }
    h2 { 
        font-size: 18pt !important; 
        color: #1e3a8a !important; 
        margin-top: 35pt !important; 
        margin-bottom: 15pt !important;
        font-weight: 700 !important;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 5pt;
    }
    h3 { 
        font-size: 14pt !important; 
        color: #1e3a8a !important; 
        margin-top: 25pt !important; 
        margin-bottom: 10pt !important;
        font-weight: 600 !important;
    }
    p, li { 
        margin-bottom: 12pt !important;
    }
    ul, ol {
        margin-left: 25pt !important;
        margin-bottom: 20pt !important;
    }
    pre {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 6px !important;
        padding: 12pt !important;
        font-size: 9.5pt !important;
        font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace !important;
        white-space: pre-wrap !important;
        margin: 20pt 0 !important;
        text-align: left !important;
        color: #334155 !important;
    }
    code {
        background: #f1f5f9 !important;
        padding: 2pt 4pt !important;
        font-family: inherit !important;
        font-size: 0.95em !important;
        border-radius: 4px !important;
    }
    pre code { 
        background: none !important; 
        padding: 0 !important; 
        border-radius: 0 !important;
        font-family: 'Cascadia Code', monospace !important;
    }
    table {
        border-collapse: collapse !important;
        width: 100% !important;
        margin: 25pt 0 !important;
        font-size: 10.5pt !important;
    }
    th {
        background: #f1f5f9 !important;
        color: #1e3a8a !important;
        font-weight: 600 !important;
        text-align: left !important;
    }
    td, th {
        border: 1px solid #cbd5e1 !important;
        padding: 10pt 12pt !important;
    }
    .mermaid { 
        margin: 30pt 10pt !important; 
        padding: 20pt !important;
        background: #fff !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 12px !important;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
    }
    hr {
        border: none !important;
        border-top: 1px solid #e2e8f0 !important;
        margin: 30pt 0 !important;
    }
</style>
</head>
<body>
<div id="content">
${bodyHtml}
</div>
<script>
    mermaid.initialize({ 
        startOnLoad: true, 
        theme: 'base',
        themeVariables: {
            primaryColor: '#eff6ff',
            primaryTextColor: '#1e3a8a',
            primaryBorderColor: '#3b82f6',
            lineColor: '#64748b',
            secondaryColor: '#f8fafc',
            tertiaryColor: '#ffffff',
            mainBkg: '#eff6ff',
            nodeBorder: '#3b82f6',
            clusterBkg: '#f8fafc',
            clusterBorder: '#cbd5e1',
            fontSize: '14px'
        },
        flowchart: { 
            useMaxWidth: false,
            htmlLabels: true,
            curve: 'stepAfter',
            padding: 20,
            rankSpacing: 50,
            nodeSpacing: 50
        },
        fontFamily: 'Inter, Segoe UI, sans-serif'
    });
    
    // Clean up first header (remove raw # if visible)
    const firstH1 = document.querySelector('h1');
    if (firstH1) {
        firstH1.textContent = firstH1.textContent.replace(/^#\s*/, '');
        const hr = document.createElement('div');
        hr.className = 'header-divider';
        firstH1.after(hr);
    }

    document.querySelectorAll('pre code.language-mermaid').forEach(el => {
        const pre = el.parentElement;
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = el.textContent;
        pre.replaceWith(div);
    });
</script>
</body>
</html>`;

    const htmlPath = path.resolve(process.cwd(), outPath.replace('.pdf', '_temp.html'));
    fs.writeFileSync(htmlPath, fullHtml, 'utf8');
    const browserPath = "C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe";
    const browser = await puppeteer.launch({ executablePath: browserPath, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.querySelectorAll('.mermaid svg').length > 0 || !document.querySelector('.mermaid'), { timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));
    await page.pdf({
        path: outPath,
        format: 'A4',
        margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #888;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
    });
    await browser.close();
}

generatePDF().catch(err => {
    console.error(err);
    process.exit(1);
});
