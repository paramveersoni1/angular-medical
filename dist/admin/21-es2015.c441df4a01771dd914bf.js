(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8XlG":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=u("Wlo7"),t=u("P6It");class a{constructor(l,n,u){this.http=l,this.message=n,this.router=u,this.text="",this.type="",this.update=!1,this.allData=!1,this.policy=""}ngOnInit(){this.getData()}getData(){this.http.getData(e.a.PolicyTermListing,{}).subscribe(l=>{l.data.length?(this.update=!0,this.policy=l.data[0].policy):this.allData=void 0},()=>{})}submitForm(){const l={};console.log(l),this.update&&(l._id=this.allData._id),l.policy=this.policy,this.http.postData(e.a.Add_policyTerm,l).subscribe(()=>{this.message.toast("success",t.a.updatedSuccess)},()=>{})}}class d{}var s=u("pMnS"),c=u("xPiK"),i=u("Q6Ar"),r=u("IheW"),p=u("SVse"),m=u("cUpR"),g=u("s7LF"),h=u("A1Tq"),v=u("0UgC"),f=u("iInd"),y=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,3,"div",[["class","card card-plain title-style-header"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"h4",[["class","card-title col-md-6 float-left"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Privacy Policy "])),(l()(),o["\u0275eld"](6,0,null,null,17,"div",[["class","row mt-3"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,16,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,15,"div",[["class","card card-user"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,null,1,"h4",[["class","card-title col-md-12 float-left"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Privacy Policy "])),(l()(),o["\u0275eld"](13,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,6,"angular-editor",[],[[1,"tabindex",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"]],(function(l,n,u){var e=!0,t=l.component;return"focus"===n&&(e=!1!==o["\u0275nov"](l,16).onFocus()&&e),"ngModelChange"===n&&(e=!1!==(t.policy=u)&&e),e}),c.b,c.a)),o["\u0275prd"](512,null,i.c,i.c,[r.c,p.DOCUMENT]),o["\u0275did"](16,4440064,null,0,i.a,[o.Renderer2,i.c,p.DOCUMENT,m.DomSanitizer,o.ChangeDetectorRef,[8,null],[8,null]],{placeholder:[0,"placeholder"]},{focusEvent:"focus"}),o["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[i.a]),o["\u0275did"](18,671744,null,0,g.NgModel,[[8,null],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),o["\u0275did"](20,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),(l()(),o["\u0275eld"](21,0,null,null,2,"div",[["class","col-md-12"],["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),o["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-primary float-right"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.submitForm()&&o),o}),null,null)),(l()(),o["\u0275ted"](-1,null,["Submit"]))],(function(l,n){var u=n.component;l(n,16,0,"Enter text here..."),l(n,18,0,u.policy)}),(function(l,n){l(n,14,0,o["\u0275nov"](n,16).tabindex,o["\u0275nov"](n,20).ngClassUntouched,o["\u0275nov"](n,20).ngClassTouched,o["\u0275nov"](n,20).ngClassPristine,o["\u0275nov"](n,20).ngClassDirty,o["\u0275nov"](n,20).ngClassValid,o["\u0275nov"](n,20).ngClassInvalid,o["\u0275nov"](n,20).ngClassPending)}))}function _(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-policy",[],null,null,null,C,y)),o["\u0275did"](1,114688,null,0,a,[h.a,v.a,f.l],null,null)],(function(l,n){l(n,1,0)}),null)}var b=o["\u0275ccf"]("app-policy",a,_,{},{},[]),M=u("5hlg");u.d(n,"PolicyModuleNgFactory",(function(){return F}));var F=o["\u0275cmf"](d,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,b]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[o.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),o["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),o["\u0275mpd"](1073742336,f.p,f.p,[[2,f.u],[2,f.l]]),o["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),o["\u0275mpd"](1073742336,M.TrimValueAccessorModule,M.TrimValueAccessorModule,[]),o["\u0275mpd"](1073742336,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,i.b,i.b,[]),o["\u0275mpd"](1073742336,d,d,[]),o["\u0275mpd"](1024,f.j,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);