webpackJsonp([0xc8a3fb5522c4],{593:function(n,a){n.exports={data:{blog:{html:'<p>When I discovered Airbnb\'s <a href="https://github.com/airbnb/react-sketchapp">react-sketchapp</a>, I was ecstatic to start ditching the clunky design version control systems for a single source of truth: <strong>React</strong>. </p>\n<p>Everything ends up in React anyway. And despite my love for <a href="https://sketchapp.com">Sketch</a> -- it\'s not available on Windows or Linux, limiting contribution. We wanted to make our design system as accessible as possible, and as exclusive as React sounded, it was ultimately the better choice.</p>\n<h2>Single source of truth: React</h2>\n<h3>Normal development process:</h3>\n<ul>\n<li>Design in sketch</li>\n<li>Transfer designs to React</li>\n<li>Design again in sketch</li>\n<li>Translate changes to React</li>\n<li>Commit sketch file to git repo</li>\n<li>Git pull new changes and lose small changes another artist made in another commit</li>\n<li>Or ideally version control with <a href="http://plantapp.io/">Plant</a> or <a href="http://kactus.io">Kactus</a> and still struggle.</li>\n</ul>\n<h3>The better way:</h3>\n<ul>\n<li>Design in sketch (or Photoshop, or any program really)</li>\n<li>Transfer designs to React</li>\n<li>Never touch Sketch again, unless you need to, you know...sketch</li>\n<li>Transfer React designs to Sketch</li>\n<li>Update React code, generate new Sketch file</li>\n</ul>\n<h2>The problems with react-sketchapp</h2>\n<h3>React as a requirement</h3>\n<p>This is a issue for some, particularly companies that prefer to stay platform agnostic. If this is the case, then definitely base your design system in whatever format you prefer.</p>\n<p>For Kushy, all of our applications are being developed in React. Every single one of them. Maybe one or two in Preact, some in Electron (which uses React). Obviously non-app projects, like static websites, are built on basic HTML/CSS. But for the most part, 90% of the time you\'re using React in our ecosystem. This makes it an obvious choice for the source of truth.</p>\n<h3>Updating designs via Sketch</h3>\n<p>This system makes it easy for developers to contribute to the design system, but is it a 2-way street? Does it allow for designers to update Sketch and reflect in React? <strong>Spoiler alert:</strong> <em>Nope, only React to Sketch.</em></p>\n<p>Which means you need design version control using Kactus, Plant, etc. The design system would have a script that builds Sketch files from React components. Designers <code class="language-text">git pull</code> those Sketch files and use Kactus to handle changes between designers + submitting PR to repo. A developer has to look at the Sketch file (ideally using Kactus to compare visual commit diffs), and then apply changes to React.</p>\n<h3>It\'s not a React Converter</h3>\n<p>One of the major issues is that you\'re required to use only 3 types of <em>universal</em> components (View, Text, StyleSheet) to create all your components. It\'s a system of <em>primitives</em>, similar to React Native, where you have base components that extend the client\'s OS or browsing software.</p>\n<p>These primitives allow you to easily create compositions that convert to Sketch styles and shapes, rather than having to interpret DOM nodes + CSS. </p>\n<p>However, if you have an existing design system in React, like Bootstrap or Material UI, <strong>you\'ll have to recode everything by hand</strong> in a new API. And you\'ll <em>still</em> have to manually update your old React components, unless you choose to switch over to universal rendering with <a href="https://github.com/lelandrichardson/react-primitives">react-primitives</a>.</p>\n<h2>The solutions</h2>\n<h3>Everyone doesn\'t use Sketch, everyone can use React</h3>\n<p>Sketch is an application that is exclusive to the Mac, so Windows and Linux users will be unable to contribute to the design system if it\'s basis begins at Sketch. </p>\n<p>By making the single source of truth React components, it allows anyone to make contributions on any platform. And by using the Airbnb library, we can create a bridge between React and Sketch, so we can still facilitate access to the creatives using Sketch.</p>\n<h3>More accessible components</h3>\n<p>Even if someone doesn\'t prefer React, we can still easily extract the HTML and CSS from rendered components. It\'s not exactly copy paste, but it\'s an easier translation than say converting a Sketch file to HTML/CSS (since those services exist, but <a href="https://launchpad.animaapp.com/pricing">tend to be pricey</a>).</p>\n<p>And by forcing you to work in <em>primitives</em>, your components become <em>universally available</em> in most devices (mobile - Android + iOS, desktop, etc).</p>\n<h2>The Process</h2>\n<ul>\n<li>Make list of needs for style guide (typography, colors, etc)</li>\n<li>Make a template in Sketch of how the final product will look</li>\n<li>Make Sketch of interface for app</li>\n<li>Make the app!</li>\n</ul>\n<h2>Using react-sketchapp</h2>\n<p>We\'ll be using <a href="https://github.com/airbnb/react-sketchapp/tree/master/examples/styleguide">the Styleguide example</a> in the React-Sketch.app repo. </p>\n<h3>New projects</h3>\n<p>If you\'re starting a new project: </p>\n<ol>\n<li><code class="language-text">git clone</code> the base project</li>\n<li><code class="language-text">cd</code> into the styleguide folder</li>\n<li><code class="language-text">npm install</code></li>\n<li><code class="language-text">npm run render</code></li>\n<li>Open Sketch, create a new document.</li>\n<li>Click on Plugins in the top menu, navigate to <code class="language-text">react-sketchapp: Styleguide</code></li>\n</ol>\n<h3>Existing projects</h3>\n<p>In an existing project, install the necessary dependencies:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i react react-sketchapp react-test-renderer chroma-js\n<span class="token function">npm</span> i @skpm/builder --dev\n</code></pre>\n      </div>\n<p>Add the following scripts to your <code class="language-text">package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"skpm-build"</span><span class="token punctuation">,</span>\n    <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token string">"skpm-build --watch"</span><span class="token punctuation">,</span>\n    <span class="token property">"render"</span><span class="token operator">:</span> <span class="token string">"skpm-build --watch --run"</span><span class="token punctuation">,</span>\n    <span class="token property">"render:once"</span><span class="token operator">:</span> <span class="token string">"skpm-build --run"</span><span class="token punctuation">,</span>\n    <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"npm run build &amp;&amp; skpm-link"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h2>The Results</h2>\n\n  <a class="gatsby-resp-image-link" href="/static/airbnb-react-sketchapp-styleguide-bc5d7d234a9aa73fb0f824469b398374-f3d01.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 744px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 129.16666666666669%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIEAwEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAH3U1WmEI7PVkMRWOP/xAAcEAACAgIDAAAAAAAAAAAAAAABAgARAxIQMUH/2gAIAQEAAQUCqW3IIm6xjQAQM5w7wd+//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAS/9oACAEDAQE/AXJ//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/AXT/xAAdEAABBAIDAAAAAAAAAAAAAAABABARIQIyEkGR/9oACAEBAAY/AlqPXiRS2DZ1faPLAyxRX//EABwQAAMAAgMBAAAAAAAAAAAAAAABESExQVFxof/aAAgBAQABPyGOkLggFZnZsy0ttnQ0uNL9EUdGQnpq+xO5rLgz7xt7OT//2gAMAwEAAgADAAAAEIDZwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABEXGR/9oACAEDAQE/ECocag8cP//EABcRAQEBAQAAAAAAAAAAAAAAAAARIVH/2gAIAQIBAT8QRq9P/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFBUWGR4f/aAAgBAQABPxAM3TJ++3PzjRQEbBsygokuLWCQgq9+MZDGkSJnAhei4H8lDnud4Y0eDi/cIm/OKi7hnrCSRt3n/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Airbnb&apos;s react-sketchapp styleguide example" title="" src="/static/airbnb-react-sketchapp-styleguide-bc5d7d234a9aa73fb0f824469b398374-f3d01.jpg" srcset="/static/airbnb-react-sketchapp-styleguide-bc5d7d234a9aa73fb0f824469b398374-0eb23.jpg 270w,\n/static/airbnb-react-sketchapp-styleguide-bc5d7d234a9aa73fb0f824469b398374-9b24c.jpg 540w,\n/static/airbnb-react-sketchapp-styleguide-bc5d7d234a9aa73fb0f824469b398374-f3d01.jpg 744w" sizes="(max-width: 744px) 100vw, 744px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Here\'s what you get out of the box. You get a basic style guide with typography and color definitions. </p>\n<h3>Hot reloading</h3>\n<p>Editing and saving the React components triggers Sketch to remove the old layer group, and replace with a new group. If you move anything around, you\'ll see it bounce back to the original position on the canvas. That also means even if you place anything inside an artboard, it\'ll get deleted and replaced with only what is defined in React.</p>\n<h3>Works with custom fonts</h3>\n<p>It instantly changed the text from Helvetica and Georgia to a custom font I\'ve installed from a 3rd party. </p>\n<h3>SVGs</h3>\n<p>Using SVGs was fairly simple. I grabbed SVG code, imported it into the project, and replaced all the SVG\'s DOM elements with React component equivalents (<code class="language-text">&lt;path&gt; becomes &lt;Svg.path&gt;</code>). It was a simple process of find and replace, and I had functional (and universal) SVG components.</p>\n<h3>Artboards, Pages, Organization</h3>\n<p>You can create artboards and pages with React using the <code class="language-text">&lt;Artboard&gt;</code> and <code class="language-text">&lt;Page&gt;</code> components. It\'s as easy as wrapping everything in these . It also supports <code class="language-text">/</code> based name notation, which is vital for Sketch to export into organized folders.</p>\n<p>I couldn\'t get multiple pages to work with the Styleguide example, and the documentation didn\'t help much. I kept getting an error saying something about <code class="language-text">document.pages</code> after I wrapped everything in <code class="language-text">&lt;Document&gt;</code> components (had to rename the other Document component that gets rendered).</p>\n<h4>Generating artboards for each <Component /></h4>\n<p>I was looking for examples of devs using react-sketchapp in the wild, and stumbled on this bit of code in the <a href="https://github.com/ant-design/antd-sketchapp/blob/master/src/demo.js">antd-sketchapp</a> repo:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> Artboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-sketchapp\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> ButtonDemo <span class="token keyword">from</span> <span class="token string">\'./components/Button/demo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CheckboxDemo <span class="token keyword">from</span> <span class="token string">\'./components/Checkbox/demo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PaginationDemo <span class="token keyword">from</span> <span class="token string">\'./components/Pagination/demo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TableDemo <span class="token keyword">from</span> <span class="token string">\'./components/Table/demo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> GridDemo <span class="token keyword">from</span> <span class="token string">\'./components/Grid/demo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> IconDemo <span class="token keyword">from</span> <span class="token string">\'./components/Icon/demo\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">renderDemo</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> Component<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Artboard\n        name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`antd-sketchapp </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span>\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          padding<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Artboard<span class="token operator">></span><span class="token punctuation">,</span>\n      context<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">currentPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> Checkbox <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Checkbox\'</span><span class="token punctuation">,</span> CheckboxDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Button\'</span><span class="token punctuation">,</span> ButtonDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Pagination <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Pagination\'</span><span class="token punctuation">,</span> PaginationDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Table <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Table\'</span><span class="token punctuation">,</span> TableDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Grid <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Grid\'</span><span class="token punctuation">,</span> GridDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Icon <span class="token operator">=</span> <span class="token function">renderDemo</span><span class="token punctuation">(</span><span class="token string">\'Icon\'</span><span class="token punctuation">,</span> IconDemo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You create a simple functional component called <code class="language-text">renderDemo</code> that accepts the name of the component, and the actual component itself. It returns an Artboard with the dynamic <Component /> nested inside. Then we run that <code class="language-text">renderDemo</code> function on each component. Wha-la 👉 we have 6 separate artboards for our individual components.</p>\n<h2>Conclusion</h2>\n\n  <a class="gatsby-resp-image-link" href="/static/kushy-react-sketchapp-style-guide-0546fd74dbdacc0f56d65b4f130b72a0-89322.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 900px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 154.88888888888889%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAe8ykuAFm1KIEyz/xAAeEAABAgcBAAAAAAAAAAAAAAABABECAxASEyAhMv/aAAgBAQABBQLTHDQ8TG6X4TBAMP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAEBCQAAAAAAAAAAAAAAAAAQARIgISIxM0Jh/9oACAEBAAY/AoLLl2GVPdWR/8QAHxAAAgEDBQEAAAAAAAAAAAAAAREAQWFxECAhMVHh/9oACAEBAAE/IVnYK3LJ0JGSoGC1S8tDf2UIfctQCAQn/9oADAMBAAIAAwAAABBDyM3/xAAZEQEAAgMAAAAAAAAAAAAAAAABADEQESH/2gAIAQMBAT8QwOquHCf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAgEBPxAp/8QAHxABAQACAQQDAAAAAAAAAAAAAREAMSEQQVFxkaHx/9oACAEBAAE/EFVbtocCG199E8GTjYWQJ99AWB3V1ibgrhOE/eAw5r82AYKeMAVDVrx3wMQNATP/2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Airbnb&apos;s react-sketchapp styleguide example with Kushy edits" title="" src="/static/kushy-react-sketchapp-style-guide-0546fd74dbdacc0f56d65b4f130b72a0-89322.jpg" srcset="/static/kushy-react-sketchapp-style-guide-0546fd74dbdacc0f56d65b4f130b72a0-34476.jpg 270w,\n/static/kushy-react-sketchapp-style-guide-0546fd74dbdacc0f56d65b4f130b72a0-0c584.jpg 540w,\n/static/kushy-react-sketchapp-style-guide-0546fd74dbdacc0f56d65b4f130b72a0-89322.jpg 900w" sizes="(max-width: 900px) 100vw, 900px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p><strong>If you\'re starting from scratch,</strong> this seems like an interesting experiment to create a truly universal set of React components that work on web and mobile.</p>\n<p><strong>If you have an existing design system</strong>, I say pass on this. It\'s not worth the effort in developing and maintaining a mirrored set of primitive components. Unless you plan on switching to primitives, or already use some sort of universal component setup -- then this might be a promising path for you. </p>\n<p>It was a little disappointing to find that this wasn\'t as robust as I wanted it to be. The process was inhibited by the limitations of primitives. I need a world where I can grab my React components defined fundamentally in HTML/CSS and convert them to Sketch.</p>\n<p>I\'m looking forward to trying out brainly\'s <a href="https://github.com/brainly/html-sketchapp">html-sketchapp</a>, which does exactly that -- converts HTML + CSS to a Sketch file. Rather than using React native-like primitives, we simply render our React components to HTML and pull them into the converter. But I\'ll get into that next time!</p>\n<p><strong><a href="https://github.com/whoisryosuke/kushy-react-sketchapp">⚡️  Download my source code here on Github 👈 </a></strong></p>\n<p>Hope this helps 👍\nRyo</p>\n<hr>\n<p><strong>References</strong>:</p>\n<ul>\n<li><a href="https://github.com/whoisryosuke/kushy-react-sketchapp">My sample project on Github</a></li>\n<li><a href="https://github.com/airbnb/react-sketchapp/">airbnb\'s react-sketchapp</a></li>\n</ul>',frontmatter:{title:"Using Airbnb's React to Sketch app to generate Sketch style guide",cover_image:{publicURL:"/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M155 1l-4 2-3 3-3 2-1 1-4 3-6 5-5 8-4 4-2 5c-3 3-4 9-1 11l1 4 2 3 1 2 1 2 1 2 3 5a1233 1233 0 0 1 23 25l2 2 2 2 3 3c2 2 2 2 0 4h3l6 1 4 2 2 1 7 3 1 2-2 1-1 1h6l6 1c1 1 0 1-2 1-3 0-4 0-3 1h18l3 2-4 1c-4 0-4 2 1 2 3 0 6-2 6-4l1-2 1 1 2 1 2 1 2 1 3 2 3 2c2 0 2 0 1 1v1l3-1 3-1 2-2c0-2 0-2-1-1h-2c-2-2-2-2 0-4h6l-1-1c-5 0 3-2 10-2l9-2c0-2 37-2 39 0l-1 2v2l2-2c0-3 0-3 4-3s4 0 4 2 1 3 5 4h11l27-1 5-1h2l5 1 10 3 7 2 4 1 9 2c5 0 7 1 7 2l2 3 2 1V0H278L155 1M0 206v61h256v-6l-2-8-1-3-3-3-2-3-1-1-2-1c0-2-9-10-11-10-1 0-2-1-2-3-1-3 1-3 6-3 3 1 3 0 3-1l-1-3-2-1c-2 0-3-1-3-3s-6-5-7-3l-2 1c-2 0-2-1-2-4l1-4h-5l-4-1 1-1 1-1h-10c-13 0-16-2-16-8 0-7 0-7-5-7s-10-2-11-3l-8-1c-7 0-8-1-8-3s-1-2-8-3l-8-1-3-1-9-2a271 271 0 0 0-60-3c-1-1-5-3-8-3-4 0-11-2-12-4l-4-1-4-1-4-2-2-1-4-1-10-4-9-4c-2 0-4-1-5-3-3-3-8-5-9-5l-1 62' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-4e8db.jpg",srcSet:"/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-7cc04.jpg 310w,\n/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-69042.jpg 620w,\n/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-4e8db.jpg 1240w,\n/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-50ab1.jpg 1860w,\n/static/Style-Guide-with-React-Sketch-App-1920px-f3102dbf269c877d3f71c225855e9927-e738f.jpg 1920w"}}},date:"02 August, 2018",tags:["react","javascript","airbnb","design system","style guide","tips","tutorial"],section:"blog"},fields:{slug:"/blog/2018/using-airbnb-react-sketch-app-for-style-guide/"}},relatedPosts:null},pathContext:{tag:"airbnb",slug:"/blog/2018/using-airbnb-react-sketch-app-for-style-guide/"}}}});
//# sourceMappingURL=path---blog-2018-using-airbnb-react-sketch-app-for-style-guide-28a08945681cf163a41c.js.map