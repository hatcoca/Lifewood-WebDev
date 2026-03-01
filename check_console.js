const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log(`[CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
        });

        page.on('pageerror', error => {
            console.log(`[PAGE ERROR]: ${error.message}`);
        });

        console.log("Navigating to http://localhost:3000...");
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
        
        // Wait a few seconds to let WebGL/React effects run
        await new Promise(r => setTimeout(r, 5000));
        
        // Take a screenshot to see if it rendered
        await page.screenshot({ path: 'screenshot_console_check.png' });
        
        await browser.close();
        console.log("Done checking.");
    } catch (err) {
        console.error("Puppeteer Error: ", err);
    }
})();
