const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.cinema.guru/baahubali');
  await page.setViewport({width: 1440, height: 900});
  await page.screenshot({path: 'screenshot.png'});
  await page.evaluate(() => console.log(`url is ${location.href}`));

  const actorPageSelector='#roles > div.f78847 > div > div._0b407b > div > a:nth-child(2)';
  await page.waitForSelector(actorPageSelector);
  await page.click(actorPageSelector);

  const resultsSelector = '#biography';
  await page.waitForSelector(resultsSelector);

  await page.screenshot({path: 'screenshots/actor_page.png'}); 
  await browser.close();
})();
