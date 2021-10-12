import{r as n,c as i,a as t,b as o,F as r,d as e,e as a,o as d}from"./app.260f48b5.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const l={},p=t("h1",{id:"installation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),e(" Installation")],-1),h=t("h3",{id:"installing-via-npm",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-via-npm","aria-hidden":"true"},"#"),e(" Installing via NPM")],-1),u=e("The library is available "),_={href:"https://www.npmjs.com/package/dataclass",target:"_blank",rel:"noopener noreferrer"},g=e("in NPM registry"),f=e(" and can be installed via NPM or similar package manager:"),b=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> dataclass
</code></pre></div><h3 id="installing-via-cdns" tabindex="-1"><a class="header-anchor" href="#installing-via-cdns" aria-hidden="true">#</a> Installing via CDNs</h3>`,2),m=e("The library can be imported via "),k={href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"},y=e("UNPKG"),w=e(". It is recommended to use "),v=t("code",null,"?module",-1),x=e(" parameter to import ES Module version of the code:"),N=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Data <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://unpkg.com/dataclass?module&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,1),I=e("Note: the library does not support "),j={href:"https://github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"},C=e("UMD"),E=e(" format."),M=e("In similar way, the library can be imported via "),S={href:"http://esm.sh/",target:"_blank",rel:"noopener noreferrer"},T=e("esm.sh"),q=e(". This can be useful for "),B={href:"https://deno.land/",target:"_blank",rel:"noopener noreferrer"},P=e("Deno"),D=e(" since this CDN also serves "),R=t("code",null,".d.ts",-1),V=e(" files."),U=a(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Data <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://esm.sh/dataclass&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>`,2),A=e("The library is shipped with CommonJS and ES Module support. The source code is written using ES2015 features. Given "),F={href:"https://caniuse.com/es6-class",target:"_blank",rel:"noopener noreferrer"},G=e("the global reach"),J=e(" of ES2015 Classes it is very likely you won't need to compile this type of things. If the environments you are targetting support these features or you know for sure that a node module will be properly pre-compiled if necessary, you can skip the rest of this guide."),L=t("p",null,[e("If older standards support required, the bundler of choice needs to be configured to transpile "),t("code",null,"dataclass"),e(" dependency as well. Assuming you would like to use "),t("code",null,"dataclass"),e(" for its typings benefits, you already have the build step in your environment.")],-1),O=t("h3",{id:"using-with-parcel-or-vite",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#using-with-parcel-or-vite","aria-hidden":"true"},"#"),e(" Using with Parcel or Vite")],-1),W=e("Parcel is capable of properly transpiling "),K=t("code",null,"node_modules",-1),z=e(" and relies on Browserslist to figure stuff. Make sure you have "),H=t("code",null,"browserslist",-1),Q=e(" defined. Read more "),X={href:"https://parceljs.org/getting-started/webapp/#declaring-browser-targets",target:"_blank",rel:"noopener noreferrer"},Y=e("in Parcel docs"),Z=e("."),$=e("Vite has a special way to handle dependencies transpiling. Read more "),ee={href:"https://vitejs.dev/guide/dep-pre-bundling.html",target:"_blank",rel:"noopener noreferrer"},te=e("in the related guide"),se=e("."),oe=t("h3",{id:"using-with-create-react-app",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#using-with-create-react-app","aria-hidden":"true"},"#"),e(" Using with Create React App")],-1),ae=e("Create React App transpiles "),ne=t("code",null,"node_modules",-1),ie=e(" as a part of the build pipeline and relies on Browserslist to figure what to transpile. Make sure you have "),re=t("code",null,"browserslist",-1),de=e(" properly configured. Read more "),ce={href:"https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers",target:"_blank",rel:"noopener noreferrer"},le=e("in CRA docs"),pe=e("."),he=a('<h3 id="using-with-webpack-babel" tabindex="-1"><a class="header-anchor" href="#using-with-webpack-babel" aria-hidden="true">#</a> Using with Webpack &amp; Babel</h3><p>It is very likely, that your webpack config excludes <code>node_modules</code> from running through <code>babel-loader</code> for the sake of faster builds. If any of your targeted environments require code transpiling to ES5 (e.g. Internet Explorer 11), the config will require some changes to make it work with <code>dataclass</code> (and possibly other dependencies that are published as a modern JS code).</p><h4 id="explicit-targets-including-approach" tabindex="-1"><a class="header-anchor" href="#explicit-targets-including-approach" aria-hidden="true">#</a> Explicit targets including approach</h4><p>The easiest way to extend your existing webpack config to transpile certain node_modules using <code>babel-loader</code> is to explicitly mention them in <code>include</code> property corresponding rule.</p><p><em>Note: this change can be applied to production config only.</em></p><h4 id="basic-dependencies-transpiling-approach" tabindex="-1"><a class="header-anchor" href="#basic-dependencies-transpiling-approach" aria-hidden="true">#</a> Basic dependencies transpiling approach</h4><p>While the previous approach easily works for <code>dataclass</code> and in no way affects the build time, there is another approach you may consider, that will potentially help you with other dependecies.</p><p><em>Note: this change can be applied to production config only.</em></p>',8);function ue(_e,ge){const s=n("OutboundLink");return d(),i(r,null,[p,h,t("p",null,[u,t("a",_,[g,o(s)]),f]),b,t("p",null,[m,t("a",k,[y,o(s)]),w,v,x]),N,t("p",null,[t("em",null,[I,t("a",j,[C,o(s)]),E])]),t("p",null,[M,t("a",S,[T,o(s)]),q,t("a",B,[P,o(s)]),D,R,V]),U,t("p",null,[A,t("a",F,[G,o(s)]),J]),L,O,t("p",null,[W,K,z,H,Q,t("a",X,[Y,o(s)]),Z]),t("p",null,[$,t("a",ee,[te,o(s)]),se]),oe,t("p",null,[ae,ne,ie,re,de,t("a",ce,[le,o(s)]),pe]),he],64)}var me=c(l,[["render",ue]]);export{me as default};
