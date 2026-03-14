const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const htmlPath = path.resolve('report.html');
  const pdfPath  = path.resolve('Phishing_Simulation_Report.pdf');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Allow fonts/styles to settle
  await new Promise(r => setTimeout(r, 1000));

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    // Standard 1 inch (25.4mm) margins
    margin: { 
      top: '25.4mm', 
      bottom: '25.4mm', 
      left: '25.4mm', 
      right: '25.4mm' 
    }
  });

  await browser.close();

  const size = (fs.statSync(pdfPath).size / 1024).toFixed(1);
  console.log(`✅ PDF generated: ${pdfPath} (${size} KB)`);
})();
