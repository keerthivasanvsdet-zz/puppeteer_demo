const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.co.in');
    await page.setViewport({width: 1440, height: 900});
    await page.screenshot({path: 'home_page.png'});
    await page.evaluate(() => console.log(`url is ${location.href}`));

    await page.type('#lst-ib', 'puppeteer');
    await page.screenshot({path: 'search_input.png'});

    await page.keyboard.press('Enter');

    await page.waitForNavigation();

    const searchImageSelector='#logo > img';
    await page.waitForSelector(searchImageSelector);

    const searchResultSelector='#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > h3 > a'
    await page.waitForSelector(searchResultSelector);

    const pageTitle = await page.title();
    console.log('Page Title: '+pageTitle);

    await page.screenshot({path: 'search_results_page.png'});
    await browser.close();
})();
