(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{PG4m:function(t,n,s){"use strict";s.r(n),s.d(n,"DevListModule",function(){return l});var e=s("tyNb"),o=s("PCNd"),i=s("sWYD"),c=s("fXoL"),r=s("ByMC"),a=s("ofXK");let b=(()=>{class t{constructor(t){this.route=t,this.first=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}}return t.\u0275fac=function(n){return new(n||t)(c.Pb(e.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["dev-list-layout"]],decls:10,vars:6,consts:[[1,"px-lg"]],template:function(t,n){1&t&&(c.Qb(0,"page-header"),c.Vb(1,"h1"),c.Pc(2,"Layout"),c.Ub(),c.Vb(3,"p"),c.Pc(4),c.hc(5,"json"),c.hc(6,"json"),c.Ub(),c.Qb(7,"hr"),c.Vb(8,"div",0),c.Qb(9,"router-outlet"),c.Ub()),2&t&&(c.Bb(4),c.Sc("first: ",c.ic(5,2,n.first),"\uff0cnow: ",c.ic(6,4,n.now),""))},directives:[r.a,e.o],pipes:[a.i],encapsulation:2}),t})(),u=(()=>{class t{constructor(t){this.route=t,this.first=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}}return t.\u0275fac=function(n){return new(n||t)(c.Pb(e.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["dev-list-item"]],decls:11,vars:12,template:function(t,n){1&t&&(c.Vb(0,"h2"),c.Pc(1,"List Item"),c.Ub(),c.Vb(2,"p"),c.Pc(3),c.hc(4,"json"),c.hc(5,"json"),c.Ub(),c.Vb(6,"p"),c.Pc(7),c.hc(8,"json"),c.Ub(),c.Pc(9),c.hc(10,"json")),2&t&&(c.Bb(3),c.Sc("first: ",c.ic(4,4,n.first),"\uff0cnow: ",c.ic(5,6,n.now),""),c.Bb(4),c.Rc("id: ",c.ic(8,8,n.id),""),c.Bb(2),c.Rc(" page: ",c.ic(10,10,n.route.url)," "))},pipes:[a.i],encapsulation:2}),t})();const y=[{path:"",component:b,children:[{path:"",component:(()=>{class t{constructor(t){this.route=t,this.first=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=Object(i.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}}return t.\u0275fac=function(n){return new(n||t)(c.Pb(e.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["dev-list"]],decls:11,vars:12,template:function(t,n){1&t&&(c.Vb(0,"h2"),c.Pc(1,"List"),c.Ub(),c.Vb(2,"p"),c.Pc(3),c.hc(4,"json"),c.hc(5,"json"),c.Ub(),c.Vb(6,"p"),c.Pc(7),c.hc(8,"json"),c.Ub(),c.Pc(9),c.hc(10,"json")),2&t&&(c.Bb(3),c.Sc("first: ",c.ic(4,4,n.first),"\uff0cnow: ",c.ic(5,6,n.now),""),c.Bb(4),c.Rc("id: ",c.ic(8,8,n.id),""),c.Bb(2),c.Rc(" page: ",c.ic(10,10,n.route.url)," "))},pipes:[a.i],encapsulation:2}),t})()},{path:"item",component:u}]}];let l=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(n){return new(n||t)},imports:[[o.a,e.n.forChild(y)]]}),t})()}}]);