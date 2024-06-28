// contentBlockThree is specifically for iframes!
// if contentBlockThree is used for text, it needs to be wrapped in <div class='text-column></div'


/*  
EXAMPLE STRUCTURE WITH ALL POSSIBLE KEYS:
    {
        "title": "What the Sackler Family Owes Me (And My Fellow Kentuckians)",
        "pageTitle": "What the Sackler Family Owes Me <br>(And My Fellow Kentuckians)", // use this if page title should be different than gallery title
        "tags": ["Data Design", "Maps", "Interactive"],
        "type": "Data Design",
        "slug": "slug-for-url",
        "contentBlockOne": "text one!",
        "contentBlockTwo": "This project, from December 2021, was my first piece of \"data journalism.\" Since then, my skills in reporting, data storytelling, responsive design and accessibility engineering have skyrocketed. Nonetheless, you can view the full project here. Note that it is not mobile friendly.",
        "contentBlockThree": "<iframe class='iframe' width='100%' height='800px' src='https://coxco96.github.io/kentucky-sackler-story/' title='What the Sackler Family Owes Me (And My Fellow Kentuckians)'></iframe>",
        "contentBlockFour": "content block four!",
        "image": "sackler.png",
        "alt": "alt text",
        "imageCaption": "<span style='text-transform: uppercase; letter-spacing: 0.01em; font-size: 0.8125rem;'>Static image from interactive map.</span><br>Each circle represents a Kentucky pharmacy in 2006. They are sized by number of oxycontin or hydrocodone pills dispensed in 2006 relative to the pharmacy's county population. • Data: Washington Post's NARCOS database.",
        "includeImageOnFeaturePage": true, // set to false if want photo on portfolio gallery but not on feature page
        "imageTwo": "photo2.png",
        "imageCaptionTwo": "<span style='text-transform: uppercase; letter-spacing: 0.01em; font-size: 0.8125rem;'>Static image from interactive map.</span><br>Each circle represents a Kentucky pharmacy in 2006. They are sized by number of oxycontin or hydrocodone pills dispensed in 2006 relative to the pharmacy's county population. • Data: Washington Post's NARCOS database.",
        "imageAltTwo": "image 2 alt",
        "imageThree": "photo3.png",
        "imageCaptionThree": "image caption three",
        "imageAltThree": "image 3 alt",
    },



*/

export const items = [{
        "title": "How Big Is Taylor Swift?",
        "type": "Data Design & Analysis",
        "tags": ["Data Analysis", "Data Design"],
        "slug": "how-big-is-taylor-swift",
        "image": "tswift.webp",
        "subtitle": "I crunched the numbers.",
        "publication": "New York Times",
        "contentBlockOne": "View the full analysis <a target='_blank' href='https://www.nytimes.com/interactive/2024/05/17/arts/music/taylor-swift-sales-tours-grammys.html'>here</a>.",
        "includeImageOnFeaturePage": false,
        "imageInstead": "tswift2.jpg"
    },
    {
        "title": "Interactive Cluster Markers",
        "subtitle": "Traffic signals in Austin, TX",
        "description": "",
        "image": "austin.png",
        "imageAlt": "A map of the number of traffic signals in Austin City districts, with numbers in circles representing clusters of data",
        "isFeature": 3,
        "publication": "Made for class",
        "type": "Interactive Map",
        "link": "https://coxco96.github.io/cluster-group-demo/",
        "slug": "austin-traffic-lights",
        "featureLabel": "Development",
        "tags": ["Maps", "Interactive"]
    },
    {
        "title": "Women's World Cup 2023",
        "subtitle": "How Teams Can Advance to the Round of 16",
        "type": "Interactive data design",
        "publication": "New York Times",
        "image": "worldcup.png",
        "tags": []
    },
    {
        "title": "Historically Redlined Districts Bear the Brunt of the Heat",
        "contentBlockOne": "View the interactive scroll experience below or in a separate tab by clicking <a href='https://coxco96.github.io/miami-redlines/' target='_blank'><strong>here</strong></a>.",
        "subtitle": "A scrollytelling map of historic HOLC grades and land surface temperature in Miami",
        "image": "redlines.png",
        "contentBlockThree": "<iframe src='https://coxco96.github.io/miami-redlines/' title='Historically redlined neighborhoods are hotter in Miami' height='800px' width=100%></iframe>",
        "tags": ["Data Design", "Interactive"],
        "publication": "Personal project",
        "slug": "miami-redlines",
        "type": "Interactive Map Design & Geospatial Analysis",
        "includeImageOnFeaturePage": false
    },
    {
        "title": "How to Read a Hearing Test",
        "image": "hearing2.png",
        "tags": ["Data Design"],
        "type": "Data Design",
        "publication": "social media",
        "slug": "how-to-read-a-hearing-test"
    },



    {
        "title": "Studying the Limits of Human Perfection, Through Darts",
        "description": "Description",
        "image": "darts2.png",
        "imageAlt": "https://www.nytimes.com/2023/08/05/upshot/darts-sports-perfection.html",
        "publication": "New York Times",
        "type": "Data Design",
        "link": "https://www.nytimes.com/2023/08/05/upshot/darts-sports-perfection.html",
        "slug": "precision-of-a-champion",
        "keyword": "featured",
        "tags": ["Data Design"],
        "aboveImageText": ""
    },
    {
        "title": "Mental Health Provider Shortage Areas",
        "subtitle": "",
        "slug": "hpsa-prisons",
        "type": "Geospatial analysis",
        "image": "",
        "tags": ["Maps", "Data Analysis"],
        "publication": "Made for Class"
    },
    {
        "title": "The Tilt",
        "subtitle": "Graphic for politics newsletter by Nate Cohn",
        "image": "tilt.png",
        "type": "Data Design",
        "publication": "New York Times",
        "tags": ["Data Design"]
    },
    {
        "title": "Kentucky's Opioid Crisis",
        "subtitle": "Featuring an interactive map of pills dispensed by pharmacy per county resident",
        "pageTitle": "What the Sackler Family Owes Me <br>(And My Fellow Kentuckians)",
        "type": "Data Analysis, Data Design, Interactive, Maps",
        "tags": ["Data Design", "Interactive", "Maps", "Data Analysis"],
        "slug": "what-the-sackler-family-owes-me",
        "contentBlockOne": "This project, from December 2021, was my first piece of \"data journalism.\" Since then, my skills in reporting, data storytelling, responsive design and accessibility engineering have skyrocketed. Nonetheless, you can view the full project here. Note that it is not mobile friendly.",
        "contentBlockTwo": "View the full project in the frame below or on its original site, full-screen <a href='https://coxco96.github.io/kentucky-sackler-story/' target='_blank'>here</a>.",
        "contentBlockThree": "<iframe class='iframe' width='100%' height='800px' src='https://coxco96.github.io/kentucky-sackler-story/' title='What the Sackler Family Owes Me (And My Fellow Kentuckians)'></iframe>",
        "image": "sackler.png",
        "alt": "A map of Kentucky made up of red circle outlines of various sizes",
        "imageCaption": "<span style='text-transform: uppercase; letter-spacing: 0.01em; font-size: 0.8125rem;'>Static image from interactive map.</span><br>Each circle represents a Kentucky pharmacy in 2006. They are sized by number of oxycontin or hydrocodone pills dispensed in 2006 relative to the pharmacy's county population. • Data: Washington Post's NARCOS database.",
        "includeImageOnFeaturePage": true,
    },
    {
        "title": "When Caitlin Clark Comes to Town",
        "aboveImageText": "<p>woopwoop</p>",
        "description": "Description2 <strong>html check!</strong>",
        "image": "caitlin-clark.webp",
        "imageAlt": "image alt3",
        "tags": ["Data Design", "Data Analysis"],
        "slug": "when-caitlin-clark-comes-to-town",
        "linK": "https://www.nytimes.com/2024/03/06/upshot/caitlin-clark-popularity-attendance.html",
        "type": "Data Design",
        "cardHeight": '800px',
        "caitlinClark": true
    },


    {
        "title": "Flashback",
        "description": "",
        "image": "flashback.png",
        "imageAlt": "A 3x3 grid of historic images, with the New York Times Flashback logo as the center tile",
        "tags": ["Other"],
        "slug": "flashback",
        "publication": "New York Times",
        "type": "Fact Checking",
        "aboveImageText": "",
    },
    {
        "title": "North American Breweries",
        "description": "Description2",
        "image": "breweries.png",
        "imageAlt": "A map of breweries in North America and Hawaii, showing darker colors where there are lots of breweries within 50 square kilometers, and lighter colors with fewer. The darkest color shows areas where there are 50 or more breweries. Darker areas are noticeable in California, the northeast and the Chicago area.",
        "isFeature": 2,
        "type": "Map",
        "link": "https://coxco96.github.io/images/na_breweries_8000.png",
        "slug": "na-breweries",
        "tags": ["Maps"],
        "aboveImageText": ""
    },

    {
        "image": "darts.png",
        "tags": [],
        "slug": 'darts1'
    },
    {
        "image": "darts2.png",
        "tags": [],
        "slug": "darts2"
    },

    {
        "image": "jersey-island.png",
        "tags": [],
        "slug": "jersey-island"
    },
    {
        "image": "metro.png",
        "tags": [],
        "slug": "metro1"
    },
    {
        "image": "metro2.png",
        "tags": [],
        "slug": "metro2"
    },
    {
        "image": "miami-election.png",
        "tags": [],
        "slug": "miami-election"
    },
    {
        "image": "miamihottest.png",
        "tags": [],
        "slug": "miami-hottest"
    },
    {
        "image": "pollshift.png",
        "tags": [],
        "slug": "pollshift"
    },


]