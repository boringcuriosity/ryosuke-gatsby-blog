webpackJsonp([50739212244294],{297:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.pageQuery=void 0;var u=t(3),d=l(u),r=t(20),s=l(r),n=t(7),f=l(n),o=t(55),i=l(o),c=function(e){var a=e.pathContext,t=e.data,l=a.tag,u=t.allMarkdownRemark,r=u.edges,n=u.totalCount,f=!1;return d.default.createElement("div",null,d.default.createElement("header",null,d.default.createElement("h1",{className:"container Title"},"#",d.default.createElement("span",{className:"text blue"},l)," ",d.default.createElement("small",{className:"normal smaller"},"(",n," post total)"))),d.default.createElement(i.default,{loop:r,skip:f}),d.default.createElement("nav",{className:"centered"},d.default.createElement(s.default,{to:"/tags",className:"btn"},"All tags")))};c.propTypes={pathContext:f.default.shape({tag:f.default.string.isRequired}),data:f.default.shape({allMarkdownRemark:f.default.shape({totalCount:f.default.number.isRequired,edges:f.default.arrayOf(f.default.shape({node:f.default.shape({frontmatter:f.default.shape({title:f.default.string.isRequired}),fields:f.default.shape({slug:f.default.string.isRequired})})}).isRequired)})})},a.default=c;a.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-fa645e6eaf373f8c89eb.js.map