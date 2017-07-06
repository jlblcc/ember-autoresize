"use strict"
define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,i){Object.defineProperty(e,"__esModule",{value:!0})
var s=void 0
s=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:n.default,engines:{addonDocs:{dependencies:{services:["config"]}}}}),(0,a.default)(s,i.default.modulePrefix),e.default=s}),define("dummy/components/link-to-external",["exports","ember-engines/components/link-to-external-component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/window-pane/component",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({tagName:""})}),define("dummy/components/window-pane/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"7YlLAiC/",block:'{"statements":[[11,"div",[]],[16,"class",[34,["window-pane ",[33,["if"],[[28,["title"]],"has-title"],null]]]],[13],[0,"\\n  "],[11,"header",[]],[13],[0,"\\n    "],[11,"span",[]],[15,"class","close button"],[13],[14],[0,"\\n    "],[11,"span",[]],[15,"class","minimize button"],[13],[14],[0,"\\n    "],[11,"span",[]],[15,"class","maximize button"],[13],[14],[0,"\\n    "],[1,[26,["title"]],false],[0,"\\n  "],[14],[0,"\\n  "],[11,"div",[]],[13],[18,"default",[[28,[null]]]],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":["default"],"hasPartials":false}',meta:{moduleName:"dummy/components/window-pane/template.hbs"}})}),define("dummy/config/asset-manifest",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.modulePrefix,a=n+"/config/asset-manifest",i=n+"/config/node-asset-manifest",s={}
try{if(require.has(i))s=require(i).default
else{var r=document.querySelector('meta[name="'+a+'"]').getAttribute("content")
s=JSON.parse(unescape(r))}}catch(e){throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "'+a+'" is present. For non-browser environments, verify that you included the node-asset-manifest module.')}e.default=s}),define("dummy/event_dispatcher",["exports","ember-native-dom-event-dispatcher"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/svg-jar",["exports","ember-string","ember-svg-jar/utils/make-helper","ember-svg-jar/utils/make-svg","dummy/inline-assets"],function(e,t,n,a,i){function s(e,n){return(0,t.htmlSafe)((0,a.default)(e,n,i.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.svgJar=s,e.default=(0,n.default)(s)}),define("dummy/initializers/autoresize",["exports","ember-autoresize/ext/text-field","ember-autoresize/ext/text-area"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"autoresize",initialize:function(){}}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/engines",["exports","ember-engines/initializers/engines"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0]
if(n.default.exportApplicationGlobal!==!1){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var i,s=n.default.exportApplicationGlobal
i="string"==typeof s?s:t.default.String.classify(n.default.modulePrefix),a[i]||(a[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/inline-assets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define("dummy/instance-initializers/load-asset-manifest",["exports","dummy/config/asset-manifest"],function(e,t){function n(e){var n=e.lookup("service:asset-loader")
n.pushManifest(t.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"load-asset-manifest",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
a.map(function(){this.mount("addon-docs",{as:"/docs"})}),e.default=a}),define("dummy/routes/index",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.get,a=t.default.set
e.default=t.default.Route.extend({model:function(){return{messages:t.default.A()}},afterModel:function(e,t){t.send("respond")},sanitizeMessage:function(e,n){return{to:e,text:t.default.String.htmlSafe(n.replace(/\n/g,"<br>"))}},position:-1,script:["Hi there!",'<img src="http://cdn.inquisitr.com/wp-content/uploads/2014/07/tumblr_n8f4er3xus1ry46hlo1_r1_500.gif" />'],sayThing:function(){var e=this.modelFor(this.routeName),t=n(this,"position")
a(this,"position",t+1),n(e,"messages").pushObject({from:"tomster@emberjs.com",text:this.script[n(this,"position")]||"Shhh! I'm eating"})},actions:{sendChat:function(e){var t=this.modelFor(this.routeName),i=this.controllerFor(this.routeName)
n(t,"messages").pushObject(this.sanitizeMessage("tomster@emberjs.com",e)),a(i,"msg",""),this.send("respond")},respond:function(){t.default.run.debounce(this,"sayThing",1e3)}}})}),define("dummy/services/asset-loader",["exports","ember-asset-loader/services/asset-loader"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/config",["exports","ember","dummy/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Service.extend(n.default)}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Qjgbk96g",block:'{"statements":[[11,"div",[]],[13],[0,"\\n  "],[11,"header",[]],[13],[0,"\\n    "],[11,"h1",[]],[13],[6,["link-to"],["index"],null,{"statements":[[1,[33,["svg-jar"],["icon"],null],false],[0," ember-autoresize"]],"locals":[]},null],[14],[11,"nav",[]],[13],[0,"\\n    "],[11,"a",[]],[15,"href","/docs"],[13],[0,"Docs"],[14],[0,"\\n    "],[11,"a",[]],[15,"href","https://github.com/tim-evans/ember-autoresize"],[15,"target","__blank"],[13],[0,"GitHub"],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[1,[26,["outlet"]],false],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"UJ8kqu1R",block:'{"statements":[[11,"div",[]],[15,"id","index"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","hero"],[13],[0,"\\n    "],[11,"p",[]],[13],[0,"Autoresizing text fields "],[11,"br",[]],[13],[14],[0,"for your "],[1,[33,["svg-jar"],["ember-logo"],[["title"],["Ember"]]],false],[0," app"],[14],[0,"\\n    "],[11,"a",[]],[15,"class","more"],[15,"href","#installation"],[13],[1,[33,["svg-jar"],["arrow"],null],false],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"main",[]],[13],[0,"\\n    "],[11,"section",[]],[15,"id","installation"],[13],[0,"\\n      "],[11,"h2",[]],[13],[0,"Installation"],[14],[0,"\\n      "],[11,"div",[]],[15,"class","grid"],[13],[0,"\\n"],[6,["window-pane"],null,null,{"statements":[[0,"          "],[11,"span",[]],[15,"class","ps1"],[13],[0,"> "],[14],[0,"ember install ember-autoresize\\n"]],"locals":[]},null],[0,"      "],[14],[0,"\\n    "],[14],[0,"\\n\\n    "],[11,"section",[]],[15,"id","playground"],[13],[0,"\\n      "],[11,"h2",[]],[13],[0,"Playground"],[14],[0,"\\n      "],[11,"div",[]],[15,"class","grid"],[13],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/test",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"d0XESuzk",block:'{"statements":[[11,"div",[]],[15,"id","test"],[13],[0,"\\n  "],[11,"h1",[]],[13],[0,"Auto (pixels)"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,220]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","px-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,150]]],false],[11,"textarea",[]],[15,"class","px-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"h1",[]],[13],[0,"Pixels"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,"220px"]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","px-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,"150px"]]],false],[11,"textarea",[]],[15,"class","px-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"h1",[]],[13],[0,"em"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,"12em"]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","em-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,"5em"]]],false],[11,"textarea",[]],[15,"class","em-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"h1",[]],[13],[0,"vw / vh"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,"100vw"]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","vw-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,"10vh"]]],false],[11,"textarea",[]],[15,"class","vh-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"h1",[]],[13],[0,"Inches"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,"2in"]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","in-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,"3in"]]],false],[11,"textarea",[]],[15,"class","in-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n\\n  "],[11,"h1",[]],[13],[0,"Centimeters"],[14],[0,"\\n  "],[11,"p",[]],[13],[0,"\\n    "],[1,[33,["input"],null,[["autoresize","max-width"],[true,"50mm"]]],false],[11,"br",[]],[13],[14],[0,"\\n    "],[11,"input",[]],[15,"class","mm-units"],[15,"disabled",""],[13],[14],[0,"\\n    "],[11,"br",[]],[13],[14],[0,"\\n    "],[1,[33,["textarea"],null,[["autoresize","max-height"],[true,"30mm"]]],false],[11,"textarea",[]],[15,"class","mm-units"],[15,"disabled",""],[13],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/test.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy"
try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),i=JSON.parse(unescape(a)),s={default:i}
return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({})