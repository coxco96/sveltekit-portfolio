// contentBlockThree is specifically for iframes!
// if contentBlockThree is used for text, it needs to be wrapped in <div class='text-column></div'


export const items = [{
        'title': `Welcome!`,
        'subtitle': `
        I'm Court, and I design data experiences. Click here to learn more about me.`,
        'type': 'About Me',
        'publication': 'Professional',
        'tags': ['About Me'],
        'slug': 'slug',
        'cardHeight': 'auto',
        'includeImageOnFeaturePage': false,
        'contentBlockOne': `
        <p>My full-name is <strong>Courtney Cox</strong> (but nope, not <a href="https://en.wikipedia.org/wiki/Courteney_Cox">that one</a>).</p>
        <p>I was a 2023-24 <a href="https://www.nytco.com/person/courtney-cox/">New York Times fellow</a> in the Upshot section.</p>
        <p>I was a 2022 McClatchy data fellow.</p>
        <p>My work has appeared in the <a href="https://www.nytimes.com/by/courtney-cox">New York Times</a>, Miami Herald, McClatchy D.C. Bureau, Tacoma News Tribune, the <a href='https://hdi.uky.edu/author/courtcox' target='_blank'>Human Development Institute</a> and <a href="https://uknow.uky.edu/authors/court-cox">UKNow</a> (University of Kentucky News).</p>
        <p><strong><em>This website is currently under construction, so check back later for more!</em></strong></p>

        `
    },
    {
        "title": "My Data Design Manifesto",
        "subtitle": "The principles that guide my approach to designing data experiences",
        "slug": "data-design-manifesto",
        "tags": ["About Me"],
        "contentBlockOne": `<div id="philosophy">
        <p>The following statements represent the principles that guide my work. <br>Because I am (and will
            always be) learning, growing, experimenting and collaborating, not all of my work reflects each
            statement. My goal is that each of my projects will be better than its predecessors in its
            alignment
            with the following statements:</p>
        <ul>
            <li>
                <p>Accessibility is non-negotiable and must be priotized at every step of the process.
                    It is
                    ineffective as an afterthought.</p>
            </li>
            <li>
                <p>Structured data is cunning; it is never without bias. Data interrogation is the first
                    step of
                    analysis.
                </p>
            </li>
            <li>
                <p>A chart's colors, typography, layout and text are as convincing as its numbers.</p>
            </li>
            <li>
                <p>Data visualization is a rhetorical device. Its methodology should be transparent and its
                    processes reproducible.</p>
            </li>
            <li>
                <p>A good cartographer is an honest liar. (No two-dimensional map has ever told the
                    whole
                    truth. A mapmaker should choose <a class="link" href="https://open.lib.umn.edu/mapping/chapter/7-lying-with-maps/" target="_blank">which
                        lie(s) to tell</a> with careful consideration.)</p>
            </li>
            <li>
                <p>
                    Sometimes you need a map. Most of the time, you don't. </p>
                <p>The ever-exploited digital map deserves, at least, a thought experiment: What other
                    forms
                    <em>could</em> the map take? A bar chart? A searchable table?</p>

                <p>Maps, as related to data visualization, work well for:</p>

                <ul>
                    <li>
                        <p>assessing geospatial patterns and identifying outlier locations</p>
                    </li>
                    <li>
                        <p>locating an unknown place being described or reported from (e.g. where
                            <em>is</em>
                            the tiny island the reporter identified as hotspot for offshore fraud?)</p>
                    </li>
                    <li>
                        <p>assessing movement across space (e.g. diasporas, the paths of hurricanes, the
                            migration of a species over time)</p>
                    </li>
                    <li>
                        <p>retracing steps, either as a means of:</p>
                        <ul>
                            <li>
                                <p>offering detail and perspective on a series of chronological events
                                    over
                                    the
                                    course of a short period of time, or</p>
                            </li>
                            <li>
                                <p>corroborating timelines with distance and assessing feasibility to
                                    corroborate an alleged series of events.</p>
                            </li>
                        </ul>
                    </li>
                    <p>In other words, how did it <em>really</em> go down?</p>
                </ul>

            </li>
            <li>
                <p>Assume your reader is has had a long day and is so very tired. Why make them work for
                    information? Clarify, in text, what is visually interesting, and spell out the
                    takeaways.</p>
            </li>
            <li>
                <p>Imagine your most adversial reader — one who it may feel <em>wants</em> to
                    misunderstand
                    the topic. Anticipate their misconceptions, edit the design to address them and
                    repeat.</p>
            </li>

            <li>
                <p>Clarity and accessibility win out over aesthetics.</p>
            </li>
            <li>
                <p>Visual information is not one-size-fits-all. Be mindful of neurodiversity and
                    cognitive processing differences and varied levels of data literacy. When possible,
                    offer multiple options for data exploration (e.g. a scatter plot <em>and</em> a
                    table <em>and</em> a search box).</p>
            </li>
        </ul>
    </div>`,
        "includeImageOnFeaturePage": false,
        "publication": "Professional",
        "type": "About me",
        'cardHeight': 'auto'
    },

    {
        "title": "Skills & Coursework",
        "subtitle": "I keep a tool-agnostic mindset, but this is what I'm already handy with.",
        "publication": "Professional",
        "type": "About Me",
        "tags": ["About Me"],
        "slug": "skills-and-coursework",
        "includeImageOnFeaturePage": false,
        'cardHeight': 'auto',
        "contentBlockOne": `
            <h2 class='h2-guide'>Relevant Coursework &amp; Certificates</h2>
            <ul>
                <li>Collaborative Geovisualization</li>
                <li>Creative Non-Fiction</li>
                <li>Design for Interactive Web Mapping</li>
                <li>History of Critical Cartography</li>
                <li>Introduction to Genomic Technologies (Johns Hopkins via Coursera)</li>
                <li>Introduction to New Mapping</li>
                <li>Programming for Web Mapping</li>
                <li>Python for Genomic Data Science (Johns Hopkins via Coursera)</li>
                <li>Social Impacts of New Mapping</li>
                <li>Spatial Data Analysis and Visualization</li>
                <li>Writing for Media</li>
            </ul>
            <h2 class='h2-guide'>Technical Skills</h2>
            <ul>
                <li>Adobe Illustrator</li>
                <li>Datawrapper (including API)</li>
                <li>d3.js</li>
                <li>HTML/CSS</li>
                <li>Git and Github</li>
                <li>Google App Scripts</li>
                <li>Google Sheets</li>
                <li>JavaScript</li>
                <li>Leaflet.js</li>
                <li>Mapbox GL JS</li>
                <li>Mapshaper</li>
                <li>Microsoft Excel</li>
                <li>PostGIS/SQL</li>
                <li>Python</li>
                <ul>
                    <li>geopandas</li>
                    <li>Jupyter notebook</li>
                    <li>matplotlib</li>
                    <li>pandas</li>
                </ul>
                <li>QGIS</li>
                <li>Svelte</li>
                <li>Turf.js</li>
            </ul>
`
    },

    {
        'title': 'Education',
        'subtitle': `I have a master's degree in Digital Mapping. <br>Click for more info on my education background.`,
        'slug': 'education',
        'type': 'About Me',
        'tags': ['About Me'],
        'includeImageOnFeaturePage': false,
        'cardHeight': 'auto',
        'publication': 'Professional',
        'type': 'About Me',
        'contentBlockOne': `<p>I have a:</p>
        <ul>
        <li>Master of Science in Digital Mapping</li>
        <li>Bachelor Arts in Creative Writing</li>
        </ul>
        <p>I also:</p><ul>
        <li>spent a semester abroad at Oxford University (Wycliffe Hall, via 
            <a href='https://www.scio-uk.org/' target='_blank'>SCIO</a>)</li>
            </ul><h2>Digital Mapping Degree</h2>
            <p>My M.S. in Digital Mapping was awarded through the renowned geography department at University of Kentucky under the intensive <a href='https://newmapsplus.as.uky.edu/programs' target=_blank'>New Maps Plus program</a>. The coursework emphasized the acquisition of technical skills—web development, GIS, geospatial data processing and analysis—and design for clear communication. Through both independent and collaborative mapping projects, I was trained to rigorously assess and interrogate data, catching data biases and collection errors. I learned to anticipate misconceptions a data visualization user may have and to address them during the development and design phase.</p>
            <p>I learned to use HTML and CSS to design front-end layouts to responsively display maps. I developed web maps using Javascript and several modern mapping libraries, and I became well-practiced at writing both Node and Python scripts for geoprocessing.</p>
            <p>For my capstone project, I developed a <a href='./svelte-mapbox-library'>Sveltekit framework for Mapbox GL JS</a> in order to make the mapping process easier for developers without cartographic specialization.</p>
            <h2>Creative Writing Degree</h2>
            <p>Through earning my B.A. in Creative Writing, I became well-practiced at working with precision, coherence and creativity under deadline pressure. My coursework trained me in the art of storytelling and narrative construction, human emotion and response, critical analysis of text and creative collaboration. By both participating in and leading writing workshops, I learned how to gracefully receive and offer critical feedback. The rhetorical sensibilities I developed as a writer have served me just as well in visual design. (<a href='./data-design-manifesto'>Maps are rhetoric</a>, after all.)</p>
            <p>As editor-in-chief of my university's literary publication, I brought a creative concept to life as I led a team of editors and oversaw all aspects of the curation and publication process.
            My work through this degree ultimately taught me how to intersect the equally analytical and creative parts within me, which primed me for the unique perspective required to be strong at both data design AND development work.
            </p>
            <h2>University of Oxford Study Abroad Experience</h2>
            <p>In my semester abroad at the University of Oxford, I completed a research seminar in British history and culture. My undergraduate research in British musicology, which won a "de Jager" award, required rigorous analysis of primary texts and the ability to synthesize information to draw a new, insightful conclusion. This experience underscores my intellectual curiosity, adaptability to new fields and a strong propensity for communication, particularly for translating complex, sophisticated ideas into clear, effective writing suitable for diverse audiences.</p>
            `
    },


    {
        "title": "How Big Is Taylor Swift?",
        "type": "Data Design & Analysis",
        "tags": ["Data Analysis", "Data Design"],
        "slug": "how-big-is-taylor-swift",
        "image": "tswift.webp",
        "subtitle": "An in-depth analysis of a hard-to-quantify metric: fame.",
        "publication": "New York Times",
        "contentBlockOne": "View the full analysis <a target='_blank' href='https://www.nytimes.com/interactive/2024/05/17/arts/music/taylor-swift-sales-tours-grammys.html'>here</a>.",
        "includeImageOnFeaturePage": false,
        "imageInstead": "tswift2.jpg"
    },
    {
        "title": "When Caitlin Clark Comes to Town",
        "subtitle": "Home Attendance of Iowa's Opponents in 2023-24",
        "image": "caitlin-clark.png",
        "imageAlt": "image alt3",
        "tags": ["Data Design", "Data Analysis"],
        "slug": "when-caitlin-clark-comes-to-town",
        "type": "Data Design",
        "caitlinClark": true,
        "includeImageOnFeaturePage": false,
        "imageTwo": "caitlin-clark.webp",
        "publication": "New York Times",
        'contentBlockOne': `Check it out in the original story <a href='https://www.nytimes.com/2024/03/06/upshot/caitlin-clark-popularity-attendance.html' target='_blank'>here</a>.`
    },
    {
        "title": "Power Plants Map",
        "subtitle": "Interactive map with multiple layers of data, made with d3",
        "image": 'power-plants.png',
        "tags": ['Data Design', 'Interactive', 'Maps'],
        "type": "Interactive Data Design",
        "publication": "Made for Class",
        "contentBlockThree": `<iframe height='800px' width=100% src='https://coxco96.github.io/power-plants-d3/' title='Svelte + Mapbox GL JS Component Library via Storybook'></iframe>`,
        "slug": "power-plants-map",
        "includeImageOnFeaturePage": false
    },

    {
        "title": "Svelte + Mapbox GL JS Component Library",
        "subtitle": "Presented via Storybook",
        "contentBlockOne": "<p>This project was created in fulfillment of my Master of Science degree in Digital Mapping. You can check it out in the frame below or view full screen in a new tab by <a href='https://bit.ly/mapcourt' target='_blank'>clicking here</a>.</p><p>Looking for the code repository behind it? <a href='https://github.com/coxco96/mapbox-svelte-components'>Click here.</a></p><p><strong>Note:</strong> if you're on a mobile device, you can navigate page by clicking 'Sidebar' in the bottom left of the screen.</p>",
        "publication": "Thesis Project",
        "image": "masters.png",
        "includeImageOnFeaturePage": false,
        "contentBlockThree": `<iframe height='800px' width=100% src='https://cd84c2e--645a1203c3c842e24c203770.chromatic.com/?path=/docs/start-here-introduction--docs' title='Svelte + Mapbox GL JS Component Library via Storybook'></iframe>`,
        "slug": "svelte-mapbox-library",
        "tags": ["Interactive"],
        "type": "Sveltekit Library Development"
    },
    {
        "title": "Interactive Cluster Markers",
        "subtitle": "Traffic signals in Austin, TX",
        "contentBlockOne": "Interact with the map below, or view it full screen <a href='https://coxco96.github.io/cluster-group-demo/' target='_blank'>here</a>.",
        "image": "austin.png",
        "imageAlt": "A map of the number of traffic signals in Austin City districts, with numbers in circles representing clusters of data",
        "contentBlockThree": "<iframe src='https://coxco96.github.io/cluster-group-demo/' title='Austin City Districts: Number of Traffic Signals' height='800px' width=100%></iframe>",
        "includeImageOnFeaturePage": false,
        "publication": "Made for class",
        "type": "Interactive Map",
        "slug": "austin-traffic-lights",
        "featureLabel": "Development",
        "tags": ["Maps", "Interactive"]
    },
    {
        "title": "Women's World Cup 2023",
        "slug": "womens-world-cup",
        "subtitle": "How Teams Can Advance to the Round of 16",
        "type": "Interactive data design",
        "publication": "New York Times",
        "image": "worldcup.png",
        "tags": ["Interactive"],
        "contentBlockOne": "I led the design and development team that worked on the interactive, live-updating pages showing how Women's World Cup teams could advance to the round of 16. View the main page <a href='https://www.nytimes.com/interactive/2023/upshot/united-states-womens-world-cup-scores-standings.html' target='_blank'>here</a>."
    },
    {
        "title": "A Journalist's Guide to Styling geoTIFFs for the Web",
        "slug": "geotiffs-for-journalists",
        "image": "rasterconversion.png",
        "subtitle": "How I made the Miami flood map from raster data",
        "tags": ["Maps", "Data Design", "Other"],
        "type": "Documentation, Tutorial Guide",
        "publication": "Miami Herald",
        "contentBlockOne": `<h2 id="table-of-contents" class='h2-guide'>Table of Contents</h2>
        <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#data-sources">Data sources</a></li>
        <li><a href="#working-with-geotiff-files-in-qgis">Working with geoTIFF Files in QGIS</a></li>
        <li><a href="#uploading-geotiffs-to-mapbox-as-tilesets">Uploading geoTIFFs to Mapbox as Tilesets</a></li>
        <li><a href="#using-mapbox-studio-to-create-a-style-layer">Using Mapbox Studio to Create a Style Layer</a></li>
        <li><a href="#creating-a-custom-map-with-mapbox-gl-js">Creating a Custom Web Map with Mapbox GL JS</a></li>
        <li><a href="#addendum-help-me-make-this-map-accessible">Addendum: Help Me Make This Map More Accessible</a></li>
        </ul>
        <hr>
        <h2 id="overview" class='h2-guide'>Overview</h2>
        <p>I created the interactive Miami-Dade County flood map seen below for <a href="https://www.miamiherald.com/news/local/environment/article262390547.html">this</a> story by <a target='_blank' href="https://www.miamiherald.com/profile/218643730">Alex Harris</a> in the <a target='_blank' href="https://www.miamiherald.com/">Miami Herald</a>. It depicts the water depth that each three-meter pixel has the chance of getting within a 5% probability. The map is designed to compare different areas of Miami-Dade County, along with the current projection with the future projection. For that reason, the raw values (originally in centimeters) have been exluded from the map, and the visualization is based on a color gradient scheme.  </p>
        <p><img class='guide-img' src="../../../images/miamifloodmapfinal.gif" alt="Miami Flood Map GIF"></p>
        <p>Click <a href="https://coxco96.github.io/miami-floods/">here</a> for the github.io demonstration of this map.</p>
        <p>This walkthrough assumes beginner-level HTML/CSS/JavaScript knowledge.</p>
        <hr>
        <h2 id="data-sources" class='h2-guide'>Data Sources</h2>
        <ul>
        <li><p>I received the flood data for this map in the form of geoTIFF files via email from <a href="https://firststreet.org/">First Street Foundation</a>. You can find First Street Foundation&#39;s full flood-related datasets <a href="https://livingatlas.arcgis.com/en/browse/?q=%22First%20Street%22#d=2&amp;q=%22First%20Street%22&amp;type=layers&amp;srt=name">here</a>. Explore all public data from the foundation <a href="https://firststreet.org/data-access/public-access/">here</a>.</p>
        </li>
        <li><p><a href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html">Shapefile: TIGER/LINE format on the U.S. county level</a></p>
        </li>
        </ul>
        <hr>
        <h2 id="working-with-geotiff-files-in-qgis" class='h2-guide'>Working with geoTIFF Files in QGIS</h2>
        <ol>
        <li><a href="#upload-geotiffs-to-qgis">Upload geoTIFFs to QGIS</a>  </li>
        <li><a href="#add-a-shapefile">Add a shapefile</a></li>
        <li><a href="#convert-bands-to-8-bit">Convert bands to 8-bit</a></li>
        <li><a href="#style-raster-bands">Style raster bands</a></li>
        <li><a href="#export-geotiffs">Export geoTIFFs</a></li>
        </ol>
        <h3 id="-upload-geotiffs-to-qgis-"><strong>Upload geoTIFFs to QGIS</strong></h3>
        <ul>
        <li>If you don&#39;t already have it installed, download and install the long-term release (LTR) version of <a href="https://qgis.org/en/site/forusers/download.html">QGIS</a>.</li>
        <li>Within QGIS, we&#39;re going to upload your geoTIFF file as a raster layer. If your data file ends in .tif or .tiff, you&#39;re looking at the right thing, so long as it contains geo information.</li>
        <li>From the top navigation bar in QGIS, click <em>Layer &gt; Add layer &gt; Add Raster Layer</em>. </li>
        </ul>
        <p><img src="../../../images/addrasterlayer.png" class='guide-img' alt="Add Raster Layer Screenshot. From QGIS toolbar, click 'Layer', then 'Add Layer', then 'Add Raster Layer'."></p>
        <ul>
        <li>Find the file source within your computer and upload. The layer should now appear in your layers panel.</li>
        </ul>
        <h3 id="-add-a-shapefile-"><strong>Add a shapefile</strong></h3>
        <ul>
        <li><p>Your shapefile should be in a <em>zip</em> file. From your device&#39;s file navigation, you can drag the <em>zip</em> file into the QGIS layers panel. Alternatively, use <em>Layer &gt; Add Layer &gt; Add Vector Layer</em>.</p>
        </li>
        <li><p>Filter your shapefile to your area of interest. You may need to inspect the attribute table to figure out the best way to filter. View the attribute table by right-clicking the layer from the layers panel and select <em>Open Attribute Table</em>.</p>
        </li>
        <li><p>Once you know how you want to filter your file, right-click the layer again, and click <em>Filter</em>, and write your expression. For example, if I wanted to see only Florida within my U.S. file, I would type <em>&quot;STATE_FP&quot; = &#39;12&#39;</em>. Be sure to use double quotation marks on the attribute name and single quotation marks on the attribute value.</p>
        </li>
        <li><p>A new, temporary layer should be generated of your file. Hide your old file from the map by unchecking it. Save your new file by right-clicking and selecting <em>Export &gt; Save Feature As</em>.</p>
        </li>
        <li><p>When saving your new file, keep the format as Shapefile, and set your CRS. Select <em>EPSG:4326 - WGS 84</em> since we&#39;ll be moving the file to Mapbox.</p>
        </li>
        </ul>
        <h3 id="-convert-bands-to-8-bit-"><strong>Convert bands to 8-bit</strong></h3>
        <ul>
        <li>We&#39;re going to upload our raster file to Mapbox. But in order to meet Mapbox&#39;s requirements, we must convert our geoTIFF to an 8-bit file.</li>
        <li>From the top navigation bar, click <em>Raster &gt; Conversion &gt; Translate (Convert Format)</em>.</li>
        </ul>
        <p><img class='guide-img' src="../../../images/rasterconversion.png" alt="Screenshot from QGIS. From toolbar menu: Click 'Raster', then 'Conversion', then 'Translate(Convert Format)'"></p>
        <ul>
        <li><p>Select your raster file as the <em>Input layer</em>.</p>
        </li>
        <li><p>Change <em>Output data type</em> to <em>Byte</em>.</p>
        </li>
        <li><p>Leave other settings unchanged. Click <em>Run</em>. The new layer should now appear as a temporary layer on your layer panel. You may wish to rename your layers in a way that will assure you remember which one is which.</p>
        </li>
        <li><p>Save your new file by right-clicking it in the layers panel and selecting <em>Export &gt; Save Feature As</em>.</p>
        </li>
        <li><p>When saving your new file, keep the file format as <em>geoTIFF</em> and select <em>EPSG:4326 - WGS 84</em> for the CRS since we&#39;ll be moving the file to Mapbox.</p>
        </li>
        </ul>
        <h3 id="-style-raster-bands-"><strong>Style raster bands</strong></h3>
        <ul>
        <li><p>Note that these instructions are specific to the data I worked with. They are a good starting point, but you may have to play around with settings and options for your data styling.</p>
        </li>
        <li><p>Right-click your 8-bit raster layer. Select <em>Properties</em>. Click into the <em>Symbology</em> tab.</p>
        </li>
        <li><p>Set <em>Rendering type</em> to <em>Singleband pseudocolor</em>.</p>
        </li>
        <li><p>Set your color ramps, number of color stops, min/max values, etc. as you want your data to appear. Finding a good color gradient for your map can be one of the lengthiest parts of this process. Be sure to keep color accessibility in mind. <a href="https://colorbrewer2.org/#type=sequential&amp;scheme=BuGn&amp;n=3">Colorbrewer</a> is a great resource for finding accessible color schemes for maps.</p>
        </li>
        </ul>
        <h3 id="-export-geotiffs-"><strong>Export geoTIFFs</strong></h3>
        <ul>
        <li><p>Right-click your 8-bit, colorized raster file from the layers panel. Select <em>Export &gt; Save Feature As</em>.</p>
        </li>
        <li><p>Select <em>Rendered Image</em> as your output mode. This is important. Further steps will not work if you do not save a rendered image of your data to your computer. </p>
        </li>
        <li><p>Save the file.</p>
        </li>
        </ul>
        <hr>
        <h2 id="uploading-geotiffs-to-mapbox-as-tilesets" class='h2-guide'>Uploading geoTIFFs to Mapbox as Tilesets</h2>
        <ol>
        <li><a href="#what-is-mapbox-anyway">What is Mapbox, anyway?</a></li>
        <li><a href="#use-mapboxs-api-to-upload-large-files">Use Mapbox&#39;s API to upload large files</a></li>
        </ol>
        <h3 id="-what-is-mapbox-anyway-"><strong>What is Mapbox, anyway?</strong></h3>
        <ul>
        <li><p>We&#39;re going to be using Mapbox Studio and Mapbox GL JS, which are two separate tools that work well together. Mapbox Studio is a no-code web mapping service. Some people think of it as the Photoshop of web mapping. It powers much of the maps you see on the web, and allows anyone to create custom, stylish maps that are easy to embed in applications or websites. It has some limitations, though, and that&#39;s where Mapbox GL JS comes in. GL JS requires some JavaScript knowledge, but it allows us to add some built-in UI features and, really, just about any kind of interactivity that you can code. We&#39;re going to keep things fairly simple. We&#39;ll add our raster layer with GL JS. Though you can add the layer within Mapbox Studio, doing it in GL JS allows for interactivity, such as the toggle button on the Miami map between the two different years. Explore the GL JS documentation to see what else you can do.</p>
        </li>
        <li><p>Now, <a href="https://www.mapbox.com/mapbox-studio">create a Mapbox account</a> if you don&#39;t already have one.</p>
        </li>
        </ul>
        <h3 id="-use-mapbox-s-api-to-upload-large-files-"><strong>Use Mapbox&#39;s API to upload large files</strong></h3>
        <ul>
        <li><p>If our file size were under 300 MB, we could upload our raster file directly within Mapbox Studio. Unfortunately, our rendered images probably are bigger. Check your file size to see. For context, my Miami-Dade files were over 2 GB each. If it&#39;s larger than 300 MB, you&#39;ll need to use Mapbox&#39;s API to upload the file through your system&#39;s terminal.</p>
        </li>
        <li><p>If you&#39;re not much of a command-line user, this process can feel daunting. Mapbox has a clear tutorial for this, which I followed exactly. <a href="https://docs.mapbox.com/help/tutorials/upload-curl/">Follow this tutorial, and come back once you have your raster file uploaded as tilesets onto Mapbox&#39;s server.</a></p>
        </li>
        </ul>
        <hr>
        <h2 id="using-mapbox-studio-to-create-a-style-layer" class='h2-guide'>Using Mapbox Studio to Create a Style Layer</h2>
        <ol>
        <li><a href="#create-a-base-layer-for-your-map">Create a base layer for your map</a></li>
        <li><a href="#publish-base-map">Publish base map</a></li>
        </ol>
        <h3 id="-create-a-base-layer-for-your-map-"><strong>Create a base layer for your map</strong></h3>
        <ul>
        <li><p>Open Mapbox Studio, and click <em>Get started</em>.</p>
        </li>
        <li><p>Click <em>Create a map in Studio</em>.
        <img class='guide-img' src="../../../images/mapboxcreate.png" alt="Screenshot form Mapbox website. Text says 'design and custom map style' over a button that reads 'Create a map in Studio'></p>
        </li>
        <li><p>In the top right corner, click <em>tilesets</em>. You should see the raster image you just uploaded with the API. Click the three dots beside the tileset to see your tileset ID. Go ahead and copy the tileset ID and save it somewhere for later. We&#39;ll come back to it.</p>
        </li>
        <li><p>Now, in the top right corner, click <em>Styles</em>, and then <em>New style</em>.</p>
        </li>
        <li><p>Choose a style template (or build your own). For journalists, I recommend keeping it simple with <em>monochrome: light</em> or <em>monochrome: dark</em>.</p>
        </li>
        <li><p>Once you&#39;re in the the studio, feel free to play around with layers, components and colors. Mapbox has lots of good tutorials on styling maps in the studio. This map is going to be your base map, meaning, the raster image you created in QGIS is going to sit on top of this map at its respective geolocation.</p>
        </li>
        <li><p>Now let&#39;s add our shapefile from earlier. This is optional, but if your data has any holes within it, I recommend doing this. In the Miami-Dade map, I added a black shapefile of the county, which sits underneath my colored data.</p>
        </li>
        <li><p>Advanced tip: to make a box-shadow blur effect on your county layer, copy the layer, but this change its data type from <em>polygon</em> to <em>line</em>. Leave both layer copies on the map. Change the color of the line. Increase the width and blur.</p>
        </li>
        <li><p>We want to ultimately add our raster layer later with Mapbox GL JS. However, you can easily preview how it will look by adding it now. In the layers panel, click the plus sign, and select the file you just uploaded as your data source.</p>
        </li>
        <li><p>You can adjust the arrangement of the layers by dragging and dropping layers in the layers panel.</p>
        </li>
        <li><p>If you added your raster file, go ahead and hide it now, so we don&#39;t see it in our published map. Do this by  clicking it in the layers panel and then clicking the eyeball icon at the top of the panel.</p>
        </li>
        </ul>
        <h3 id="-publish-base-map-"><strong>Publish base map</strong></h3>
        <ul>
        <li><p>Once you&#39;re satisfied with the look of your base map, we&#39;re going to publish it so we can work with it outside of Mapbox Studio.</p>
        </li>
        <li><p>In the top right corner, click <em>Publish</em> &gt; <em>Publish</em>.</p>
        </li>
        <li><p>Now click <em>Share</em> (also in the top right corner). Scroll until you see <em>Developer resources</em>. Copy down the style URL and the access token. Paste them somewhere you can come back to.</p>
        </li>
        <li><p><strong>Important note:</strong> Use the <em>public</em> access token you get following the steps above. Do <strong>not</strong> use the secret access token you generated for the Uploads API earlier.</p>
        </li>
        <li><p>In Mapbox Studio, move your map to the view you want it to load on in your story/webpage/application. In the top navigation bar, you&#39;ll see three numbers. The first is your <em>zoom level</em>, and the other two are your <em>center coordinates</em>. Copy these numbers down and save them for later.</p>
        </li>
        </ul>
        <p><img class='guide-img' src="../../../images/zoomcoords.png" alt="zoom and coordinates screenshot from Mapbox Studio toolbar"></p>
        <hr>
        <h2 id="creating-a-custom-map-with-mapbox-gl-js" class='h2-guide'>Creating a Custom Map with Mapbox GL JS</h2>
        <ol>
        <li><a href="#initialize-map">Initalize map</a></li>
        <li><a href="#add-flood-layer">Add flood layer</a></li>
        <li><a href="#go-forth-and-customize-your-map">Go forth, and customize your map</a></li>
        </ol>
        <h3 id="-initialize-map-"><strong>Initialize map</strong></h3>
        <ul>
        <li><p>Set up an HTML file. We'll use HTML, CSS, and JavaScript. Keep it all in one HTML file, or link your CSS and JS files. </p>
        </li>
        <li><p>In the HTML body, add a div for your map, like so:  </p>
        </li>
        </ul>
        <p><code>&lt;div id=&quot;map&quot;&gt;&lt;/div&gt;</code></p>
        <ul>
        <li>In your CSS styling, add a box for your map to live in, like so:</li>
        </ul>
        <pre><code class="lang-css"><span class="hljs-selector-id">#map</span> {
            <span class="hljs-attribute">border-style</span>: solid;
            <span class="hljs-attribute">border-width</span>: .<span class="hljs-number">1em</span>;
            <span class="hljs-attribute">align-self</span>: center;
            <span class="hljs-attribute">width</span>: <span class="hljs-number">80%</span>;
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">2%</span> auto <span class="hljs-number">1%</span>;
            <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">4px</span> <span class="hljs-number">8px</span> <span class="hljs-number">0</span> <span class="hljs-built_in">rgba</span>(0, 0, 0, 0.471), <span class="hljs-number">0</span> <span class="hljs-number">6px</span> <span class="hljs-number">20px</span> <span class="hljs-number">0</span> <span class="hljs-built_in">rgba</span>(0, 0, 0, 0.509);
            <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;
        }
        </code></pre>
        <ul>
        <li>From your JS file or script section, we&#39;re going to inject the Mapbox Studio base map into our map div:</li>
        </ul>
        <pre><code class="lang-js">// get access
        mapboxgl.accessToken = 'PASTE_YOUR_ACCESS_TOKEN_INSIDE_THESE_QUOTES';
        // <span class="hljs-keyword">create</span> a <span class="hljs-keyword">map</span> <span class="hljs-keyword">variable</span> <span class="hljs-keyword">with</span> our base <span class="hljs-keyword">map</span>
        const <span class="hljs-keyword">map</span> = <span class="hljs-keyword">new</span> mapboxgl.Map({
            // put the <span class="hljs-string">'map'</span> inside the <span class="hljs-keyword">map</span> <span class="hljs-keyword">div</span> we made <span class="hljs-keyword">in</span> HTML:
            <span class="hljs-keyword">container</span>: <span class="hljs-string">'map'</span>,
            <span class="hljs-keyword">style</span>: <span class="hljs-string">'PASTE_YOUR_STYLE_URL_INSIDE_THESE_QUOTES'</span>,
            // <span class="hljs-keyword">replace</span> <span class="hljs-keyword">with</span> your zoom <span class="hljs-keyword">level</span>:
            zoom: <span class="hljs-number">7.8</span>,
            // <span class="hljs-keyword">replace</span> <span class="hljs-keyword">with</span> your coordinates. <span class="hljs-keyword">switch</span> the x <span class="hljs-keyword">and</span> y:
            center: [<span class="hljs-number">-80.563368</span>, <span class="hljs-number">25.553404</span>], 
        })
        </code></pre>
        <ul>
        <li><p>Replace each value with your own values as noted. You may need to switch the order of your center coordinates.</p>
        </li>
        <li><p>Inspect the page in your browser. You should have a map!</p>
        </li>
        </ul>
        <h3 id="-add-flood-layer-"><strong>Add flood layer</strong></h3>
        <ul>
        <li>Now we&#39;re going to add our raster layer. Use the following code and the tileset ID you copied <a href="#create-a-base-layer-for-your-map">in this section</a> for later use:</li>
        </ul>
        <pre><code class="lang-js"><span class="hljs-comment">// wait until base map has finished loading</span>
        
        <span class="hljs-built_in">map</span>.<span class="hljs-keyword">on</span>(<span class="hljs-string">'load'</span>, () =&gt; {
            <span class="hljs-comment">// add tileset source</span>
            <span class="hljs-built_in">map</span>.addSource(<span class="hljs-string">'NAME_YOUR_SOURCE'</span>, {
                <span class="hljs-keyword">type</span>: <span class="hljs-string">'raster'</span>,
                url: <span class="hljs-string">'mapbox://YOUR_TILESET_ID'</span>
            });
            <span class="hljs-built_in">map</span>.addLayer({
                <span class="hljs-string">'id'</span>: <span class="hljs-string">'NAME_THE_LAYER'</span>,
                <span class="hljs-string">'type'</span>: <span class="hljs-string">'raster'</span>,
                <span class="hljs-comment">// SOURCE_NAME should match the NAME_YOUR_SOURCE name you used above</span>
                <span class="hljs-string">'source'</span>: <span class="hljs-string">'SOURCE_NAME'</span>,
                <span class="hljs-string">'layout'</span>: {
                    <span class="hljs-string">'visibility'</span>: <span class="hljs-string">'visible'</span>
                }
                <span class="hljs-comment">// keep 'poi-label' to put place label layers on top of raster layer</span>
            }, <span class="hljs-string">'poi-label'</span>);
        });
        </code></pre>
        <ul>
        <li>Inspect the page in your browser. If all went well, you should see your raster layer on your web map now.</li>
        </ul>
        <h3 id="-go-forth-and-customize-your-map-"><strong>Go forth, and customize your map</strong></h3>
        <ul>
        <li><p>You might be thinking, what was the point in adding the raster layer like that, when it was so easy to do in Mapbox Studio? The answer is customization.</p>
        </li>
        <li><p>When making the Miami-Dade County map, I worked with two separate raster files--one for 2022 data and one for 2052 projected data. I added both layers as shown above, but I wrote additional code that changed the visibility of the layer based on user interaction. Feel free to check out that code <a href="app.js">here</a>.</p>
        </li>
        <li><p>Check out Mapbox GL JS&#39;s documentation to discover all that your can do with your dynamically-added layers. </p>
        </li>
        <li><p>One popular feature you can easily include is adding a zoom control UI button. After you&#39;ve initiated your base map, just add this code:</p>
        </li>
        </ul>
        <pre><code class="lang-js"><span class="hljs-built_in">map</span>.addControl(<span class="hljs-keyword">new</span> mapboxgl.NavigationControl());
        </code></pre>
        <ul>
        <li>Once you have a basic understanding of Mapbox GL JS, try exploring <a href="https://demos.mapbox.com/scrollytelling/">Mapbox GL JS Scrollytelling</a> for your stories. </li>
        </ul>
        <hr>
        <h2 id="addendum-help-me-make-this-map-accessible" class='h2-guide'>Addendum: Help Me Make This Map Accessible</h2>
        <ul>
        <li>Web accessibility is a priority, and I&#39;m not always sure how to best implement it for web mapping. Though I am conscious of color and design choices, I am not sure how to add alt text to the map div or what else I should be doing to ensure accessibility. I do not believe the toggle slider I created for this map is accessible. Please feel free to review the code in the repo and leave pull requests with any suggestions--especially as related to accessibility. </li>
        </ul>
        `,
        "includeImageOnFeaturePage": false,
    },
    {
        "image": "miamihottest.png",
        "tags": ["Data Design", "Maps"],
        "type": "Geospatial Analysis + Raster Data for the Web",
        "contentBlockThree": "<iframe scrolling='no' frameborder='1' height='900px' width='100%' title='Map showing average land surface temperature across Miami-Dade County in summer 2021' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' src='https://flo.uri.sh/visualisation/10682312/embed?auto=1'></iframe>",
        "publication": "Personal Project",
        "slug": "miami-hottest",
        "includeImageOnFeaturePage": false,
        "title": "Where is Miami-Dade County Hottest?",
        "subtitle": "Visualizing NASA Earth Data"
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
        "type": "Interactive Map & Geospatial Analysis",
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
        "title": "In Reversal Because of A.I., Office Jobs Are Now More at Risk",
        "subtitle": "As seen on the front page of the New York Times print edition",
        "slug": "ai-office-jobs",
        "tags": ["Data Analysis", "Data Design"],
        "publication": "New York Times",
        "image": "ai.png",
        "imageAlt": "alt here"
    },



    {
        "title": "Studying the Limits of Human Perfection, Through Darts",
        'contentBlockOne': `<a href='https://www.nytimes.com/2023/08/05/upshot/darts-sports-perfection.html' target='_blank'>Link to original story.</a>`,
        "image": "darts2.png",
        "imageAlt": "",
        "publication": "New York Times",
        "type": "Data Design",
        "slug": "precision-of-a-champion",
        "tags": ["Data Design"],
    },
    {
        "title": "Interactive Tour of Oxford University",
        "subtitle": "Using IIIF (International Image Interoperability, Framework) technology to explore a historic map",
        "contentBlockOne": "<p>Please note that this project, as of 2024, no longer reflects my editorial and design sensibilities. The IIIF (International Image Interoperability Framework) technology, however, remains relevant to include in this portfolio. This project is not mobile responsive.</p><p>Check it out below or full screen in a different tab <a href='https://coxco96.github.io/oxford-tour' target='_blank'>here</a>.</p>",
        "includeImageOnFeaturePage": false,
        "contentBlockThree": "<iframe src='https://coxco96.github.io/oxford-tour/' width=100% height='800px'></iframe>",
        "image": "oxford.png",
        "tags": ["Maps", "Interactive"],
        "type": "Interactive",
        "publication": "Made for class",
        "slug": "oxford-tour"
    },
    {
        "title": "The Tilt",
        "subtitle": "Graphic for politics newsletter by Nate Cohn",
        "image": "tilt.png",
        "type": "Data Design",
        "publication": "New York Times",
        "tags": ["Data Design"],
        "slug": "tilt-delegates-graphic"
    },
    {
        "title": "Kentucky's Opioid Crisis",
        "subtitle": "Featuring an interactive map of pills dispensed by pharmacy per county resident",
        "pageTitle": "What the Sackler Family Owes Me <br>(And My Fellow Kentuckians)",
        "type": "Interactive map in scrollytelling story",
        "tags": ["Data Design", "Interactive", "Maps", "Data Analysis"],
        "slug": "what-the-sackler-family-owes-me",
        "contentBlockOne": "This project, from December 2021, was my first piece of \"data journalism.\" Since then, my skills in reporting, data storytelling, responsive design and accessibility engineering have skyrocketed. Nonetheless, you can view the full project here. Note that it is not mobile friendly.",
        "contentBlockTwo": "View the full project in the frame below or on its original site, full-screen <a href='https://coxco96.github.io/kentucky-sackler-story/' target='_blank'>here</a>.",
        "contentBlockThree": "<iframe class='iframe' width='100%' height='800px' src='https://coxco96.github.io/kentucky-sackler-story/' title='What the Sackler Family Owes Me (And My Fellow Kentuckians)'></iframe>",
        "image": "sackler.png",
        "alt": "A map of Kentucky made up of red circle outlines of various sizes",
        "imageCaption": "<span style='text-transform: uppercase; letter-spacing: 0.01em; font-size: 0.8125rem;'>Static image from interactive map.</span><br>Each circle represents a Kentucky pharmacy in 2006. They are sized by number of oxycontin or hydrocodone pills dispensed in 2006 relative to the pharmacy's county population. • Data: Washington Post's NARCOS database.",
        "includeImageOnFeaturePage": true,
        "publication": "Made for class"
    },
    {
        "image": "metro.png",
        "title": "The Places Most Affected by Remote Workers' Moves Around the Country",
        "subtitle": "Graphic created together with Aatish Bhatia",
        "contentBlockOne": "Made with Svelte (and lots and lots of CSS!)<br>Read the story<a href='https://www.nytimes.com/interactive/2023/06/17/upshot/17migration-patterns-movers.html'>here</a>.",
        "tags": ["Data Design"],
        "slug": "metro1"
    },
    {
        "title": "Flashback",
        "subtitle": "A weekly history game",
        "contentBlockOne": "From summer 2023 through May 2024, I was the primary fact checker for most editions of Flashback. Check out the quizzes <a href='https://www.nytimes.com/spotlight/flashback' target='_blank'>here</a>.",
        "image": "flashback.png",
        "imageAlt": "A 3x3 grid of historic images, with the New York Times Flashback logo as the center tile",
        "tags": ["Other"],
        "slug": "flashback",
        "publication": "New York Times",
        "type": "Fact Checking",
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

    // {
    //     "image": "darts.png",
    //     "tags": [],
    //     "slug": 'darts1'
    // },
    // {
    //     "image": "darts2.png",
    //     "tags": [],
    //     "slug": "darts2"
    // },

    // {
    //     "image": "jersey-island.png",
    //     "tags": [],
    //     "slug": "jersey-island"
    // },

    // {
    //     "image": "metro2.png",
    //     "tags": [],
    //     "slug": "metro2"
    // },
    // {
    //     "image": "miami-election.png",
    //     "tags": [],
    //     "slug": "miami-election"
    // },

    {
        "image": "pollshift.png",
        "title": "How Polls Have Changed Since the State of the Union Address",
        "subtitle": "Table made for The Tilt, Nate Cohn's newsletter",
        "tags": ["Data Design"],
        "publication": "New York Times",
        "slug": "pollshift",
        "type": "Data Design",
        "includeImageOnFeaturePage": false,
        "contentBlockOne": "<a href='https://www.nytimes.com/2023/08/28/upshot/trump-trial-primary-calendar.html' target='_blank'>Click here to view the original newsletter.</a>",
        "imageTwo": "pollshift1.png"
    },

    {
        "title": "Visualizing Campaign Finance",
        "tags": ["Data Design", "Interactive"],
        "contentBlockTwo": "<p>Hover over the bubbles.</p>",
        "subtitle": "Interactive visualization showing funds received by Crist and Desantis each day from Jan. 2021 through Oct. 2022",
        "contentBlockOne": "<p><a href='https://www.miamiherald.com/news/politics-government/article266417946.html' target='_blank'>As seen in the Miami Herald</a></p><p>A chart showing campaign finance received by Crist and Desantis each day from Jan. 1, 2021 through Oct. 1, 2022</p><p>Made with Flourish.</p>",
        "publication": "Miami Herald",
        "type": "Data Wrangling and Design",
        "contentBlockThree": "<div class='text-column'><script src='https://public.flourish.studio/resources/embed.js'></script><iframe scrolling='no' frameborder=0 title='Interactive of visual content' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style='width: 100%; height: 600px;' src='https://flo.uri.sh/visualisation/11227857/embed?auto=1'></iframe></div>",
        "image": "campaign-finance.png",
        "slug": "campaign-finance-desantis-crist",
        "includeImageOnFeaturePage": false
    }


]