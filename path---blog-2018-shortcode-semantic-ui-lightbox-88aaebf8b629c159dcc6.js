webpackJsonp([49478866352750],{592:function(s,n){s.exports={data:{blog:{html:'<p>Using just a few lines of jQuery, combined with the Semantic UI Modal component, you can create a pretty simple and effective Lightbox:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photos<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui basic segment show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Semantic UI Lightbox Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Click any of the cards below to activate the modal-based lightbox. It\'s based off the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://semantic-ui.com/modules/modal.html#basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>"basic modal"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> in Semantic UI.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui four stackable cards<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PhotoCard ui card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://via.placeholder.com/300x250<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ui fluid image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\tCool pics\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token script language-javascript">\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.js"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token comment">// Lightbox for photos using Semantic UI</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.PhotoCard\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;div class="ui basic modal">&lt;div class="content">&lt;img src="\'</span><span class="token operator">+</span>image<span class="token operator">+</span><span class="token string">\'" width="100%" />&lt;/div>&lt;/div>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        \n\t\t<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.ui.basic.modal\'</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">.</span><span class="token function">modal</span><span class="token punctuation">(</span><span class="token string">\'show\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p data-height="265" data-theme-id="light" data-slug-hash="NMEYPO" data-default-tab="html,result" data-user="whoisryosuke" data-embed-version="2" data-pen-title="Semantic UI Lightbox Example" id="codepen" class="codepen">See the Pen <a href="https://codepen.io/whoisryosuke/pen/NMEYPO/">Semantic UI Lightbox Example</a> by Ryosuke (<a href="https://codepen.io/whoisryosuke">@whoisryosuke</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🖼🔍 Using <a href="https://twitter.com/semanticui?ref_src=twsrc%5Etfw">@semanticui</a> to create a simple image &quot;Lightbox&quot; popup using their basic modal and a little <a href="https://twitter.com/hashtag/jQuery?src=hash&amp;ref_src=twsrc%5Etfw">#jQuery</a> <a href="https://t.co/Fd5dvMmIkS">https://t.co/Fd5dvMmIkS</a> <a href="https://twitter.com/hashtag/SemanticUI?src=hash&amp;ref_src=twsrc%5Etfw">#SemanticUI</a> <a href="https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw">#CSS</a> <a href="https://twitter.com/hashtag/Javascript?src=hash&amp;ref_src=twsrc%5Etfw">#Javascript</a> <a href="https://twitter.com/hashtag/CodeSnippets?src=hash&amp;ref_src=twsrc%5Etfw">#CodeSnippets</a> <a href="https://t.co/OIdLWSidzN">pic.twitter.com/OIdLWSidzN</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/997245663195742208?ref_src=twsrc%5Etfw">May 17, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1013615808948285441">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/9c49aed1a0b759731f0bc019ec903975">See the code gist</a></li>\n<li><a href="https://www.inmotionhosting.com/support/edu/wordpress/333-add-admin-via-mysql">Add admin via SQL</a></li>\n</ul>',frontmatter:{title:"shortcode - Lightbox using Semantic UI + JQuery 🖼🔍",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h10c11 0 14-1 14-6l1-1c1 0 3-5 3-9 0-2 0-3 2-3s2-1 2-4v-4h4l4-1h8l5-3 6-4c2 0 2-1 2-4v-4h6c4 0 5 0 5-2s1-2 4-2c4 0 7 2 7 3 0 3 4 5 8 5h5v-12h8v-8h16v-8h4c4 0 4 0 4-2 0-3 0-3 4-3l4-1c0-2 1-2 4-2l4-1c0-2 2-2 8-2 8 0 8 0 8-2 0-3 0-3 4-3 3 0 4 0 4 2l1 2 3-2 3-2 1-3c0-3 2-4 4-2l2 1c2 0 4-3 3-4l3-6 2 3 2 4v-9h8v4l1 4 1-4c0-3 0-4 2-4l1-4c0-3 0-4 2-4l1-1 4-1 8-2c3-2 4-2 4-1 0 2 1 2 4 2l4-1c0-2 1-2 4-2l4-1h2c2 2 2 2 3 0 2-1 2-2-1-3l-8-2-4-1h4l9-1 7-2c4 0 4 0 4-3s0-3 4-3 4 0 4-2c0-3 0-3 4-3l4-1 4-1h4v-4c0-5 0-5 3-4l4-1c2-2 3-4 1-3s-7-1-5-2c1-1 1-1-1-1-2 1-5-4-4-9l1-5c1-3 12-1 12 3h2l1-2 4-4-1 2v1l2-2h4c2-3 1-3-3-3l-4 1-1 1-1-1c0-3 10-3 12 0 1 1 1 1 2-1 1-1 1-1 1 1-1 2 0 3 2 3l2 3 2-1 4-3 4-2v3l2 4c0 2 0 2-1 1l-1-1 1 3v3l1 3 1-5c0-8 1-9 5-9h1c-3 0-2-3 1-2 2 0 2 0 1-1s-1-1 2-1 3 0 2 1l-2 1-1 1 2 1v1l1 2 1 1c0-3 2-2 2 1s0 3 1 1l1-4c1 0 1-1-1-1-1-1-1-1 1-1 3 0 3-2 0-3h-2l2-1 3 1h1l3 2h2l-1-2 3-3c1 1 2 2 2 5v5l1-4c0-4 0-4 1-2v4l1 1 1-2 2-3c1-1 1-1-1-1-2 1-2 0-2-1 0-2 0-2 1-1l4 1 4 1h-2l-1 1 3 1h1c0 2 4 1 5-1l1-2 1-1c0-2 1-2 4-2 4 0 4 0 4-2l1-3 1-4-1-4-1-1c0-2 1-2 4-2s4 0 4 2l4 1h4v93c0 81 1 75 1-40V0H0v134m263-36l-1 3v10c-1 1-1 1-2-2l-2-2h-3c-3-2-3-4-1-4v1l1 1h1v1l1-2v-1c3 1 3-1 1-2-3-1-10 2-10 5 0 2 0 2 1 1l1-1c1 1 2 3 4 3l3 3c-1 3-3 4-6 1l-3-2 1 2v3a1139 1139 0 0 1 9 0c2-1 2-1 2 1s2 0 2-3c1-2 1-2 1 0 0 5 2 3 3-3 0-6 1-8 4-8 2 1 2 1 2 5v8c2 5 4 5 3-1 0-3 0-3 1 0l1 1v-3l-1-5c1-5-2-7-7-7-3 1-4 1-3-1v-5c-1-1-2 0-3 3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"16 May, 2018",tags:["wordpress","sql","shortcode","code snippet","tips"],section:"blog"},fields:{slug:"/blog/2018/shortcode-semantic-ui-lightbox/"}},relatedPosts:{edges:[{node:{html:'<p>I recently ran into an issue where I wasn\'t the admin in a Wordpress install, and after running this bit of SQL, I was quickly back in command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_users<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>user_login<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_pass<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_nicename<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_status<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">\'ryo\'</span><span class="token punctuation">,</span> MD5<span class="token punctuation">(</span><span class="token string">\'easy123\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'firstname lastname\'</span><span class="token punctuation">,</span> <span class="token string">\'ryo@example.com\'</span><span class="token punctuation">,</span> <span class="token string">\'0\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_capabilities\'</span><span class="token punctuation">,</span> <span class="token string">\'a:1:{s:13:"administrator";s:1:"1";}\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>wp_usermeta<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>umeta_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>user_id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_key<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>meta_value<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">Select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> wp_users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'wp_user_level\'</span><span class="token punctuation">,</span> <span class="token string">\'10\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">❓ Oh I&#39;m not the admin on this <a href="https://twitter.com/hashtag/Wordpress?src=hash&amp;ref_src=twsrc%5Etfw">#Wordpress</a> install? Let me just do a little <a href="https://twitter.com/hashtag/SQL?src=hash&amp;ref_src=twsrc%5Etfw">#SQL</a> here... 🔑⚡️<a href="https://t.co/NZYCKV2xBV">https://t.co/NZYCKV2xBV</a> <a href="https://t.co/c63UawZLqe">pic.twitter.com/c63UawZLqe</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1013615808948285441?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1013615808948285441">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/9c49aed1a0b759731f0bc019ec903975">See the code gist</a></li>\n<li><a href="https://www.inmotionhosting.com/support/edu/wordpress/333-add-admin-via-mysql">Add admin via SQL</a></li>\n</ul>',frontmatter:{title:"shortcode - Make yourself Wordpress admin using SQL 🔑⚡️",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"08 July, 2018",tags:["wordpress","sql","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-make-yourself-wordpress-admin-using-sql/"}}},{node:{html:'<p>Need to protect your NextJS pages behind a login? Use a HOC (higher-order component) to wrap your page components, check the #API token, and redirect users if it fails 🙅‍♂️ </p>\n<p>Bonus: You can grab things from SSR like cookies or session data using the child\'s getInitialProps in the HOC 🙌 </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'next/router\'</span>\n<span class="token keyword">import</span> AuthService <span class="token keyword">from</span> <span class="token string">\'./AuthService\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">withAuth</span><span class="token punctuation">(</span>AuthComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> Auth <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token string">\'http://localhost\'</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Authenticated</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Check if Page has a `getInitialProps`; if so, call it.</span>\n        <span class="token keyword">const</span> pageProps <span class="token operator">=</span> AuthComponent<span class="token punctuation">.</span>getInitialProps <span class="token operator">&amp;&amp;</span> <span class="token keyword">await</span> AuthComponent<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// Return props.</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>pageProps <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          isLoading<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Auth<span class="token punctuation">.</span><span class="token function">loggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> isLoading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>div<span class="token operator">></span>LOADING<span class="token operator">...</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n            <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>AuthComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>  auth<span class="token operator">=</span><span class="token punctuation">{</span>Auth<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔐 Need to protect your <a href="https://twitter.com/hashtag/NextJS?src=hash&amp;ref_src=twsrc%5Etfw">#NextJS</a> pages behind a login? Use a <a href="https://twitter.com/hashtag/HOC?src=hash&amp;ref_src=twsrc%5Etfw">#HOC</a> to wrap your page components, check the <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> token, and redirect users if it fails 🙅‍♂️ Bonus: <a href="https://twitter.com/hashtag/SSR?src=hash&amp;ref_src=twsrc%5Etfw">#SSR</a> data fetching using the child&#39;s getInitialProps in the HOC 🙌 <a href="https://t.co/EEaNPRXTIx">https://t.co/EEaNPRXTIx</a> <a href="https://twitter.com/hashtag/ReactJS?src=hash&amp;ref_src=twsrc%5Etfw">#ReactJS</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/naJR9mNBo4">pic.twitter.com/naJR9mNBo4</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1011738754355089408?ref_src=twsrc%5Etfw">June 26, 2018</a></blockquote>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1011738754355089408">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/d034d3eaa0556e86349fb2634788a7a1">See the code gist</a></li>\n</ul>',
frontmatter:{title:"shortcode - Protect NextJS pages with a authorization HOC 🔐",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"26 June, 2018",tags:["nextjs","api","js","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-nextjs-auth-hoc/"}}}]}},pathContext:{tag:"code snippet",slug:"/blog/2018/shortcode-semantic-ui-lightbox/"}}}});
//# sourceMappingURL=path---blog-2018-shortcode-semantic-ui-lightbox-88aaebf8b629c159dcc6.js.map