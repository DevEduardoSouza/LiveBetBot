import { getHtmlPage } from '@/utils/domUtils';
import { JSDOM }  from 'jsdom';

import { configs } from '../config/configs';

const scrape = async () => {
    try {
        const html = await getHtmlPage(configs.siteUrl);
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const result = document.querySelector(".ovm-CompetitionList > div:nth-child(2) > div.ovm-FixtureList.ovm-Competition_Fixtures > div.ovm-Fixture.ovm-Fixture-horizontal > div > div.ovm-FixtureDetailsTwoWay.ovm-FixtureDetailsTwoWay-1 > div > div.ovm-FixtureDetailsTwoWay_TeamsAndInfoWrapper > div.ovm-FixtureDetailsTwoWay_TeamsAndScoresInner > div > div:nth-child(2) > div.ovm-FixtureDetailsTwoWay_TeamName")
        console.log(result?.textContent);
        
    } catch (error) {
        console.error("Error scraping bet365:", error);
    }
};

export default { scrape };
