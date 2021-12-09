"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[18],{5804:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294),a=function(e){return l.createElement("div",{className:"heading-module--heading--2iUAG"},l.createElement("h1",null,e.heading,e.icon?l.createElement("span",{className:"heading-module--icon--Kb+tp",style:{maskImage:"url("+e.icon+")"}}):void 0),l.createElement("hr",null))}},2657:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(5444),a=n(7294),o=n(5804),i="layout-module--link--8S4u4",r=function(e){var t,n,r,c,m,u,d,s,v,p,E,g,h=(0,l.K2)("2082962159"),f=null===(t=h.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n||null===(r=n.discord)||void 0===r?void 0:r.link,y=null===(c=h.site)||void 0===c||null===(m=c.siteMetadata)||void 0===m||null===(u=m.email)||void 0===u?void 0:u.link,_=null===(d=h.site)||void 0===d||null===(s=d.siteMetadata)||void 0===s||null===(v=s.github)||void 0===v?void 0:v.link,j=null===(p=h.site)||void 0===p||null===(E=p.siteMetadata)||void 0===E||null===(g=E.linkedin)||void 0===g?void 0:g.link;return a.createElement("div",null,a.createElement("nav",{className:"layout-module--nav--ma0SR"},a.createElement("div",{className:"layout-module--logo--9Ozid"},a.createElement("h1",null,"Christopher Besch"),a.createElement("h2",null,"Software Developer—Problem Solver")),a.createElement("div",null,a.createElement("input",{type:"checkbox",id:"nav_toggle"}),a.createElement("label",{htmlFor:"nav_toggle",className:"layout-module--hamburger--h7E0E"},"☰"),a.createElement("div",{className:"layout-module--nav_menu--uoKLm"},a.createElement("li",null,a.createElement(l.rU,{to:"/"},"Home")),a.createElement("li",null,a.createElement(l.rU,{to:"/projects"},"Projects")),a.createElement("li",null,a.createElement(l.rU,{to:"/about"},"About")),a.createElement("li",null,a.createElement(l.rU,{to:"/contact"},"Contact"))))),a.createElement("div",{className:"layout-module--content--u4In+"},a.createElement(o.Z,{heading:e.heading,icon:e.icon}),e.children),a.createElement("footer",{className:"layout-module--footer--4b3+4"},a.createElement("ul",null,a.createElement("li",{className:i},a.createElement("a",{href:_},"GitHub")),a.createElement("li",{className:i},a.createElement("a",{href:j},"LinkedIn")),a.createElement("li",{className:i},a.createElement("a",{href:f},"Discord")),a.createElement("li",{className:i},a.createElement("a",{href:y},"Mail")),a.createElement("li",null,a.createElement("p",null,"© 2021")),a.createElement("li",{className:"layout-module--emoji--Mxypj"},a.createElement("p",null,"🔗")))))}},7211:function(e,t,n){n.d(t,{Z:function(){return c},_:function(){return r}});var l=n(6125),a=n(7294),o=n(5444),i=n(7264);function r(e){var t,n,a,o,r,c,m,u,d;return{id:e.node.id,date:null===(t=e.node.frontmatter)||void 0===t?void 0:t.date,languages:null===(n=e.node.frontmatter)||void 0===n?void 0:n.languages.map((function(e){return i.M.get(e)})),priority:parseInt(null===(a=e.node.frontmatter)||void 0===a?void 0:a.priority),dependencies:null===(o=e.node.frontmatter)||void 0===o?void 0:o.dependencies,description:null===(r=e.node.frontmatter)||void 0===r?void 0:r.description,slug:null===(c=e.node.frontmatter)||void 0===c?void 0:c.slug,link:null===(m=e.node.frontmatter)||void 0===m?void 0:m.link,title:null===(u=e.node.frontmatter)||void 0===u?void 0:u.title,thumb:(0,l.d)(null===(d=e.node.frontmatter)||void 0===d?void 0:d.thumb)}}var c=function(e){return a.createElement("div",{className:"project_list-module--projects--r5Yl-"},e.projects.map((function(e){return a.createElement(o.rU,{to:e.link,key:e.id,className:"project_list-module--project--s09uQ"},a.createElement("div",{className:"project_list-module--content--X4RCX"},a.createElement("div",{className:"project_list-module--image--sF6qu"},a.createElement(l.G,{image:e.thumb,alt:"thumbnail"}),a.createElement("div",{className:"project_list-module--overlay--XYwST"},e.languages.map((function(e){return a.createElement("div",{className:"project_list-module--language_icon--XgM-W",style:{maskImage:"url("+e.icon_mono+")"}})})))),a.createElement("h3",null,e.title),a.createElement("p",null,e.description)))})))}},1997:function(e,t,n){n.r(t);var l=n(7294),a=n(5444),o=n(2657),i=n(7211),r=n(9715),c=n(7264);t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(i._),n=e.pageContext.language,m=c.M.get(n);return l.createElement(o.Z,{heading:m.name+" Projects",icon:m.icon_mono},l.createElement(i.Z,{projects:t}),l.createElement(a.rU,{className:r.p,to:"/projects"},"Other Projects"))}},7264:function(e,t,n){n.d(t,{M:function(){return l}});var l=new Map([["python",{id:"python",name:"Python",icon:"/icons/python.svg",icon_mono:"/icons/python.svg"}],["cpp",{id:"cpp",name:"C++",icon:"/icons/c-plusplus.svg",icon_mono:"/icons/c-plusplus_mono.svg"}],["typescript",{id:"typescript",name:"TypeScript",icon:"/icons/typescript-icon.svg",icon_mono:"/icons/typescript-icon_mono.svg"}],["java",{id:"java",name:"java",icon:"/icons/java.svg",icon_mono:"/icons/java.svg"}]])},9715:function(e,t,n){n.d(t,{p:function(){return l}});var l="projects-module--link--0AUwY"}}]);
//# sourceMappingURL=component---src-templates-projects-language-tsx-29402dc3facb24c3b48d.js.map