"use strict";(self.webpackChunkBloxcrossFrontend=self.webpackChunkBloxcrossFrontend||[]).push([[691],{7691:(ut,k,l)=>{l.r(k),l.d(k,{PrincipalModule:()=>at});var b=l(6895),C=l(9132),u=l(5861),T=l(727),v=l(4072),w=l(2241),y=l(5938),Z=l(1270),z=l(915),I=l(1708),t=l(4650),_=l(8423),S=l(7185);let B=(()=>{class i{constructor(){}makeOption(){return{animation:!0,grid:[{left:"3%",right:"0",height:"70%",width:"90%",top:5},{left:"3%",right:"0",top:"80%",bottom:"2%",width:"90%"}],tooltip:{extraCssText:"width: 23vh",trigger:"axis",axisPointer:{type:"line"},borderColor:"rgba(0, 0, 0, 1.0)",backgroundColor:"rgba(32, 32, 32, 0.80)",textStyle:{color:"rgba(255, 255, 255, 1.0)"},formatter:function(n){return v.WU.formatTime("MM-dd hh:mm",n)},position:function(n,r,a,s,d){var p={top:0};return p[["left","right"][+(n[0]<d.viewSize[0]/2)]]=0,p}},axisPointer:{link:{xAxisIndex:"all"},label:{backgroundColor:"#777"},hideDelay:0},xAxis:[{data:[],axisLine:{show:!1},splitLine:{show:!1},axisLabel:{formatter:function(n){return v.WU.formatTime("MM-dd hh:mm",n)},textStyle:{fontSize:12,color:""},margin:15},axisTick:{show:!1,length:12,alighWithLabel:!0},min:"dataMin",max:"dataMax"},{gridIndex:1,data:[],axisLine:{onZero:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},min:"dataMin",max:"dataMax"}],yAxis:[{axisLabel:{textStyle:{fontSize:12,color:""},inside:!0,verticalAlign:"top",margin:0,showMinLabel:!1,showMaxLabel:!1},zlevel:1e3,min:"dataMin",max:"dataMax",position:"right",axisTick:{show:!1},splitLine:{show:!1}},{scale:!0,gridIndex:1,splitNumber:2,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],series:[{name:"Price Candlestick",type:"candlestick",data:[],axisLabel:{textStyle:{fontSize:12}},itemStyle:{color:"rgb(0, 240, 0)",color0:"rgb(240, 0, 0)",borderColor:"rgb(0, 240, 0)",borderColor0:"rgb(240, 0, 0)"}},{name:"Volume",type:"bar",itemStyle:{color:"rgb(0, 50, 128)"},xAxisIndex:1,yAxisIndex:1,data:[]}],backgroundColor:""}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var J=l(4421),R=l(3607),H=l(7552),G=l(1013),E=l(7317),M=l(3081),D=l(4022),U=l(2509);const Y=["main"],q=function(i,c){return{positive:i,negative:c}};function j(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"div",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.actionassest(r))}),t.TgZ(1,"div",20),t._UZ(2,"img",21),t.qZA(),t.TgZ(3,"div",20)(4,"label",22),t._uU(5),t.qZA()(),t.TgZ(6,"div",23)(7,"ul",24)(8,"li",25),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"li",26),t._uU(12),t.ALo(13,"number"),t.qZA()()()()}if(2&i){const e=c.$implicit;t.xp6(2),t.s9C("src",e.logo[0],t.LSH),t.xp6(3),t.Oqu(e.base_currency),t.xp6(4),t.hij(" ",t.xi3(10,5,e.price,"USD")," "),t.xp6(2),t.Q6J("ngClass",t.WLB(10,q,e.percentage>=0,e.percentage<0)),t.xp6(1),t.hij(" ",t.lcZ(13,8,e.percentage),"%")}}function F(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"h2",8),t._uU(5),t.ALo(6,"translate"),t.qZA()()()(),t.TgZ(7,"div",9)(8,"div",6)(9,"div",7)(10,"div",10)(11,"div",11)(12,"div",12)(13,"input",13,14),t.NdJ("keyup",function(){t.CHM(e);const n=t.MAs(14),r=t.oxw();return t.KtG(r.search(n.value))}),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"div",12)(17,"div",15)(18,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.stablecoin(!1))}),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.stablecoin(!1))}),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.stablecoin(!0))}),t._uU(25),t.ALo(26,"translate"),t.qZA()()()()(),t.TgZ(27,"div",10)(28,"div",10),t.YNc(29,j,14,13,"div",18),t.qZA()()()()()()}if(2&i){const e=t.oxw();t.xp6(5),t.Oqu(t.lcZ(6,7,"sidebar.assets")),t.xp6(8),t.MGl("placeholder","",t.lcZ(15,9,"assets.search")," "),t.xp6(5),t.Q6J("ngClass",e.activebtn?"active":""),t.xp6(1),t.Oqu(t.lcZ(20,11,"assets.all")),t.xp6(3),t.Oqu(t.lcZ(23,13,"assets.crypto")),t.xp6(3),t.Oqu(t.lcZ(26,15,"assets.StableCoins")),t.xp6(4),t.Q6J("ngForOf",e.products)}}function K(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"div",29)(3,"div",30),t._UZ(4,"img",31),t.TgZ(5,"span",32),t._uU(6),t.ALo(7,"currency"),t.qZA()()(),t.TgZ(8,"div",33),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.actionassest(n.item))}),t.O4$(),t.TgZ(9,"svg",34),t._UZ(10,"path",35)(11,"path",36),t.qZA()(),t.kcU(),t.TgZ(12,"div",37)(13,"div",6)(14,"div",38)(15,"div",39),t.NdJ("click",function(n){t.CHM(e);const r=t.oxw();return t.KtG(r.onButtonGroupClick(n))}),t.TgZ(16,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("10m"))}),t._uU(17,"10m"),t.qZA(),t.TgZ(18,"button",41),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("1h"))}),t._uU(19,"1H"),t.qZA(),t.TgZ(20,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("1d"))}),t._uU(21,"1D"),t.qZA(),t.TgZ(22,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("1w"))}),t._uU(23,"1W"),t.qZA(),t.TgZ(24,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("1M"))}),t._uU(25,"1M"),t.qZA(),t.TgZ(26,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("3M"))}),t._uU(27,"3M"),t.qZA(),t.TgZ(28,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("6M"))}),t._uU(29,"6M"),t.qZA(),t.TgZ(30,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTime("ALL"))}),t._uU(31,"All"),t.qZA()()()(),t.TgZ(32,"div",42)(33,"div",43),t.NdJ("resize",function(n){t.CHM(e);const r=t.oxw();return t.KtG(r.onResize(n))},!1,t.Jf7),t.qZA()(),t.TgZ(34,"div",44)(35,"div",11)(36,"div",45)(37,"div",46)(38,"button",47),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Buy(n.item))}),t._uU(39),t.ALo(40,"translate"),t.qZA()(),t.TgZ(41,"div",46)(42,"button",48),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.Sell(n.item))}),t._uU(43),t.ALo(44,"translate"),t.qZA()()()()()()(),t._UZ(45,"app-table-info-transactions",49),t.qZA()}if(2&i){const e=t.oxw();t.xp6(4),t.s9C("src",e.item.logo[0],t.LSH),t.xp6(2),t.AsE(" ",e.item.base_currency,"/USD ",t.xi3(7,6,e.item.price,"USD"),""),t.xp6(33),t.Oqu(t.lcZ(40,9,"general.buy")),t.xp6(4),t.Oqu(t.lcZ(44,11,"general.sell")),t.xp6(2),t.Q6J("typetable",e.item.base_currency)}}let $=(()=>{class i{constructor(e,o,n,r,a,s,d,p,g,m,f,h,x){this.spinner=e,this.dialog=o,this.toastr=n,this.datepipe=r,this.graphservice=a,this.market=s,this.router=d,this.manage_data=p,this.assetsService=g,this.portafolioService=m,this.socket=f,this.translate=h,this.client=x,this.products=[],this.allProducts=[],this.products_id=[],this.dateGraph=[],this.dataGraph=[],this.volumeGraph=[],this.showgraph=!1,this.disableButton=!1,this.subscription=new T.w0,this.flagAction=!1,this.datainicial="1h",this.activebtn=!0,this.formatdate=!1,this.myChart=null}onResize(e){null!=this.myChart&&this.myChart.resize()}changeTime(e){var o=this;return(0,u.Z)(function*(){let n;"object"==typeof Intl&&"function"==typeof Intl.DateTimeFormat&&(n=Intl.DateTimeFormat().resolvedOptions().timeZone);let r=new Date(Date.now()),a=new Date(Date.now());o.datainicial=e;var s="";if("10m"==e&&(a.setMinutes(a.getMinutes()-10),s="MINUTE",o.formatdate=!1),"1h"==e&&(a.setHours(a.getHours()-1),s="MINUTE",o.formatdate=!1),"1d"==e&&(a.setDate(a.getDate()-1),s="FIFTEEN_MIN",o.formatdate=!1),"1w"==e&&(a.setDate(a.getDate()-7),s="DAY",o.formatdate=!0),"1M"==e&&(a.setMonth(a.getMonth()-1),s="DAY",o.formatdate=!0),"3M"==e&&(a.setMonth(a.getMonth()-3),s="DAY",o.formatdate=!0),"6M"==e&&(a.setMonth(a.getMonth()-6),s="DAY",o.formatdate=!0),"ALL"==e&&(a.setMonth(a.getMonth()-8),s="DAY",o.formatdate=!0),null!=o.item&&""!=s){var d={ticker:o.item.id,granularity:s,start:a.getTime(),end:r.getTime()};o.dateGraph=[],o.dataGraph=[],o.volumeGraph=[];var p=yield o.market.GetHistoricalCandles(d).toPromise();JSON.parse(p.payload).forEach(m=>{let f=new Date(1e3*m[0]),h=new Date(f.toLocaleString("en-US",{timeZone:n})),x=o.datepipe.transform(new Date(h.getTime()),"yyyy-MM-dd hh:mm");var P=[.9899*m[3],.9899*m[4],.9899*m[1],.9899*m[2]];o.dateGraph.unshift(x),o.dataGraph.unshift(P),o.volumeGraph.unshift(m[5])}),o.InitChart()}})()}InitChart(){var e=this;return(0,u.Z)(function*(){e.myChart=v.S1(document.getElementById("main"),"dark");var o=e.graphservice.makeOption();o.xAxis[0].axisLabel.formatter=e.formatdate?function(n){return v.WU.formatTime("MM-dd",n)}:function(n){return v.WU.formatTime("hh:mm",n)},"dark"==localStorage.getItem("theme")?(o.backgroundColor="rgb(255, 255, 255)",o.xAxis[0].axisLabel.textStyle.color="rgb(0, 0, 0)",o.yAxis[0].axisLabel.textStyle.color="rgb(0, 0, 0)"):(o.backgroundColor="rgb(0, 0, 0)",o.xAxis[0].axisLabel.textStyle.color="rgb(255, 255, 255)",o.yAxis[0].axisLabel.textStyle.color="rgb(255, 255, 255)"),o.tooltip.formatter=function(n){var r="en-US";let d=o.xAxis[0].axisLabel.formatter(o.xAxis[0].data[n[0].data[0]]);const g=new Intl.NumberFormat(r,{style:"currency",currency:"USD"}),m=new Intl.NumberFormat(r,{});for(let x=n.length-1;x>=0;x--){let P=n[x].seriesName;if("-"!=n[x].data){var f=n[x].data;if("Volume"!=P){const O=f[1],A=f[2],L=f[3],N=f[4];var h;d+=`<p><div style="height: 6px;width: 180px">\n                    <img src="${h=O>A?"../assets/Graph/sellTradePrice.png":"../assets/Graph/buyTradePrice.png"}" style="vertical-align: middle;" width="20px"/>\n                    <span style="vertical-align: middle;color:white;">open:</span>\n                    <span style="vertical-align: middle;color:white;float: right">${g.format(O)}</span>\n                    </div></p><div style="line-height:0;"><br></div>`,d+=`<p><div style="height: 10px;width: 180px">\n                    <img src="${h}" style="vertical-align: middle;" width="20px"/>\n                    <span style="vertical-align: middle;color:white;">close:</span>\n                    <span style="vertical-align: middle;color:white;float: right">${g.format(A)}</span>\n                    </div></p><div style="line-height: 0;"><br></div>`,d+=`<p><div style="height:10px;width: 180px">\n                    <img src="${h}" style="vertical-align: middle;" width="20px"/>\n                    <span style="vertical-align: middle;color:white;">Low:</span>\n                    <span style="vertical-align: middle;color:white;float: right">${g.format(L)}</span>\n                    </div></p><div style="line-height:0;"><br></div>`,d+=`<p><div style="height: 10px;width: 180px">\n                    <img src="${h}" style="vertical-align: middle;" width="20px"/>\n                    <span style="vertical-align: middle;color:white;">High:</span>\n                    <span style="vertical-align: middle;color:white;float: right">${g.format(N)}</span>\n                    </div></p><div style="line-height:0;"><br></div>`}else d+=`<p><div style="height: 20px;width: 180px">\n                    <img src="../assets/Graph/volume.png" style="vertical-align: middle;" width="20px"/>\n                    <span style="vertical-align: middle;color:white;">volume:</span>\n                    <span style="vertical-align: middle;color:white;float: right">${m.format(f)}</span>\n                    </div><div style="line-height:0;"><br></div>`}}return d},console.log("fechas "+typeof e.dateGraph),o.xAxis[0].data=e.dateGraph,o.xAxis[1].data=e.dateGraph,o.series[0].data=e.dataGraph,o.series[1].data=e.volumeGraph,o.animation=!0,e.showgraph=!0,e.myChart.setOption(o,!0)})()}onButtonGroupClick(e){let o=e.target||e.srcElement;if("BUTTON"===o.nodeName){let n=o.parentElement.querySelector(".active");n&&n.classList.remove("active"),o.className+=" active"}}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.spinner.show(),e.client_config=yield e.GetClientConfig(),e.SetPortfolioData(),e.GetEvent()})()}GetEvent(){this.subscription.add(this.manage_data.getSubject(w.Q.ChangeColor.toString()).subscribe(e=>{null!=e&&this.changeTime(this.datainicial)}))}datosSocket(e){var o=this;return(0,u.Z)(function*(){yield o.socket.InitBlox(o.products_id),o.subscription.add(o.socket.GetDataBlox().subscribe(n=>{try{"string"==typeof n&&(o.data=JSON.parse(n),o.SetValues(o.data))}catch(r){console.error(r)}}))})()}GetDataBloxOrder(){var e=this;return(0,u.Z)(function*(){e.subscription.add(e.socket.GetDataBloxOrder().subscribe(o=>{"object"!=typeof o&&"Hey Dude!"!=o&&(null==JSON.parse(o).success||null==JSON.parse(o).success)&&e.ResponseEvent(JSON.parse(o))}))})()}SetValues(e){let o=this.products.find(r=>r.id===e.product_id);o&&(o.price!=e.mid_price&&(o.price=e.mid_price,o.percentage=100*(o.price-o.open)/o.price),o.bid!=e.best_bid&&(o.bid=e.best_bid),o.ask!=e.best_ask&&(o.ask=e.best_ask)),o=this.allProducts.find(r=>r.id===e.product_id),o&&o.price!=e.mid_price&&(o.price=e.mid_price,o.percentage=100*(o.price-o.open)/o.price)}SetPortfolioData(){var e=this;return(0,u.Z)(function*(){yield e.SetList(),yield e.datosSocket(""),yield e.GetDataBloxOrder(),e.spinner.hide()})()}ResponseEvent(e){}SetList(){var e=this;return(0,u.Z)(function*(){e.products_id=[];let o=yield e.GetAllLogos(),n=yield e.GetAllProducts();n&&(n=n.filter(r=>"USD"===r.quote_currency&&!1===r.trading_disabled),n=n.map(r=>({...r,logo:o.filter(a=>a.symbol===r.base_currency).map(a=>a.logo),price:0,ask:0,bid:0,percentage:0})),n=n.sort((r,a)=>r.base_currency>a.base_currency?1:-1),yield e.GetOpenData(n),e.products=n,e.allProducts=JSON.parse(JSON.stringify(n)),e.products_id=n.map(r=>r.id))})()}GetOpenData(e){var o=this;return(0,u.Z)(function*(){yield Promise.all(e.map(function(){var n=(0,u.Z)(function*(r){let a=yield o.GetMarketProducts(r.id).then();if(a.success){let s=JSON.parse(a.payload);r.open=s.open}});return function(r){return n.apply(this,arguments)}}()))})()}GetMarketProducts(e){var o=this;return(0,u.Z)(function*(){const n={ticker:e};return yield o.market.GetProduct24hrStats(n).toPromise()})()}GetAllProducts(){var e=this;return(0,u.Z)(function*(){return yield e.portafolioService.GetAllProducts().toPromise()})()}GetAllLogos(){var e=this;return(0,u.Z)(function*(){return yield e.assetsService.GetAllLogosURL().toPromise()})()}GetClientConfig(){var e=this;return(0,u.Z)(function*(){return new Promise((o,n)=>{e.subscription.add(e.client.GetClientConfig().subscribe(r=>{o(r)},r=>{console.log("Error GetClientConfig:",r),o(null)}))})})()}search(e){let o=this.allProducts.filter(n=>n.base_currency.toLowerCase().startsWith(e.toLowerCase()));this.products=o}stablecoin(e){this.activebtn=!1;let o=this.allProducts.filter(n=>n.fx_stablecoin===e);this.products=o}Buy(e){this.disableButton=!0;const o=new y.vA;o.autoFocus=!1,o.disableClose=!0,o.maxWidth="100vw",o.width="auto";const n={logo:e.logo[0],symbol:e.base_currency,price:e.price,ask:e.ask,bid:e.bid,action:"buy"};if(this.client_config.id_verified){this.manage_data.emitEvent(w.Q.buy_sell.toString(),n);let r=this.dialog.open(Z.K,o);this.subscription.add(r.afterClosed().subscribe(()=>{this.disableButton=!1}))}else this.ConfirmValidateID()}Sell(e){this.disableButton=!0;const o=new y.vA;o.autoFocus=!1,o.disableClose=!0,o.maxWidth="100vw",o.width="auto";const n={logo:e.logo[0],symbol:e.base_currency,price:e.price,ask:e.ask,bid:e.bid,action:"sell"};if(this.client_config.id_verified){this.manage_data.emitEvent(w.Q.buy_sell.toString(),n);let r=this.dialog.open(Z.K,o);this.subscription.add(r.afterClosed().subscribe(()=>{this.disableButton=!1}))}else this.ConfirmValidateID()}actionassest(e){if(this.flagAction=!this.flagAction,this.item=e,void 0===this.myChart?this.changeTime(this.datainicial):this.myChart.clear(),this.flagAction){let o=document.getElementById("top");null!==o&&(console.log("show coin..."),o.scrollIntoView(),o=null)}}ConfirmValidateID(){var e=this;return(0,u.Z)(function*(){const o=new y.vA;o.autoFocus=!1,o.disableClose=!0,o.width="40rem";var n={title:yield e.translate.get("Errores.mustValidateID").toPromise(),icon:"quest",conten:yield e.translate.get("Errores.wantValidateID").toPromise()};e.manage_data.emitEvent(w.Q.ConfirmAction.toString(),n);let r=e.dialog.open(z.S,o);e.subscription.add(r.afterClosed().subscribe(a=>{a==I.d.si.toString()&&e.router.navigate(["/vouched"])}))})()}ShowError(e,o="",n=!0){console.error(e),this.toastr.error(e,o,{closeButton:!0,disableTimeOut:n,positionClass:"toast-center-center"})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.t2),t.Y36(y.uw),t.Y36(S._W),t.Y36(b.uU),t.Y36(B),t.Y36(J.j),t.Y36(C.F0),t.Y36(R.A),t.Y36(H.z),t.Y36(G.u),t.Y36(E.y),t.Y36(M.sK),t.Y36(D.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assets"]],viewQuery:function(e,o){if(1&e&&t.Gf(Y,5),2&e){let n;t.iGM(n=t.CRH())&&(o.myChart=n.first)}},hostBindings:function(e,o){1&e&&t.NdJ("resize",function(r){return o.onResize(r)},!1,t.Jf7)},decls:7,vars:6,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","line-scale-pulse-out",3,"fullScreen"],[2,"color","white"],["id","top"],[4,"ngIf"],["style"," margin-top: 1%;",4,"ngIf"],[1,"container","text-center","shadow",2,"margin-top","1%"],[1,"row"],[1,"col"],[1,"styletitel"],[1,"container","shadow",2,"margin-top","1%"],[1,""],[1,"row",2,"margin-top","1%"],[1,"col-md-6","col-sm-12","mb-2"],["type","search","id","form1",1,"form-control","search",3,"placeholder","keyup"],["searchv",""],["role","group","aria-label","Small button group",1,"btn-group",2,"width","100%"],["type","button",1,"btn","btn-outline-secondary","texbot",3,"ngClass","click"],["type","button",1,"btn","btn-outline-secondary","texbot",3,"click"],["class","row asset-list-item ","style","border-radius: 20px; cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"row","asset-list-item",2,"border-radius","20px","cursor","pointer",3,"click"],[1,"col-xl-4","col-sm-4","col-3","text-center"],[1,"itemintr","my-auto",3,"src"],[1,"texItem",2,"cursor","pointer"],[1,"col-xl-4","col-sm-4","col-6","text-end",2,"cursor","pointer"],[1,"listpoint","mr-3","my-auto"],[1,"texItem"],[1,"",3,"ngClass"],[2,"margin-top","1%"],[1,"container","shadow"],[1,"row","text-center"],[1,"col","my-3"],[3,"src"],[1,"label","label-default","titleinfo"],[1,"ibackcolor",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","35","height","35","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-double-left"],["fill-rule","evenodd","d","M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"],["fill-rule","evenodd","d","M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"],[1,"mt-1"],[1,"col","text-center"],["role","group","aria-label","Basic mixed styles example",1,"btn-group",3,"click"],["type","button ",1,"btn","btn-outline-secondary","butongrus",3,"click"],["type","button ",1,"btn","btn-outline-secondary","butongrus","active",3,"click"],[1,"row",2,"margin-top","8px","margin-bottom","40px"],["id","main",2,"width","100%","height","40vh",3,"resize"],[1,"container"],[1,"row","justify-content-center"],[1,"col-xl-6","col-md-6","col-sm-6","text-center","mt-sm-3","mb-sm-3","mt-1","mb-1"],["type","button",1,"btn","btn-outline-success","texbot","active",3,"click"],["type","button",1,"btn","btn-outline-danger","texbot",3,"click"],[3,"typetable"]],template:function(e,o){1&e&&(t.TgZ(0,"ngx-spinner",0)(1,"p",1),t._uU(2),t.ALo(3,"translate"),t.qZA()(),t._UZ(4,"div",2),t.YNc(5,F,30,17,"div",3),t.YNc(6,K,46,13,"div",4)),2&e&&(t.Q6J("fullScreen",!0),t.xp6(2),t.hij(" ",t.lcZ(3,4,"general.cargando")," "),t.xp6(3),t.Q6J("ngIf",!o.flagAction),t.xp6(1),t.Q6J("ngIf",o.flagAction))},dependencies:[_.Ro,b.mk,b.sg,b.O5,U.E,b.JJ,b.H9,M.X$],styles:[".currtext[_ngcontent-%COMP%]{color:var(--count-color);margin-top:3%;font-weight:700;font-size:15px}.search-bar[_ngcontent-%COMP%]{background-color:#d5e0d8}.assets-tabs[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin:1rem;border-radius:.6rem;background:#cecccc;color:#b60000}.asset-list-item[_ngcontent-%COMP%]{margin:.5em 0;width:100%;justify-content:flex-start;align-items:center;height:60px;background:var(--bg-item-assets)}button[_ngcontent-%COMP%]{padding:.5rem 1.5rem;min-width:1rem}.assets-easy-page[_ngcontent-%COMP%]{height:100%;padding-top:2rem;background-size:10px;color:#837272;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}figure[_ngcontent-%COMP%]{margin-bottom:.2rem}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:5rem}h2.title[_ngcontent-%COMP%]{margin:.5rem;font-size:1rem;color:#4d4d4d}span.amount[_ngcontent-%COMP%]{background-color:#fff;color:#000;font-size:2rem;font-weight:700;border-radius:1.5rem;padding:5px 2rem;z-index:2}.asset-container[_ngcontent-%COMP%]{background-color:#fafafa;border-radius:2rem 2rem 0 0;display:flex;flex-direction:column;justify-content:center;padding:3rem 1rem 1rem;position:relative;top:-1.5rem;width:100%;z-index:1;height:100%;font-size:.8rem;justify-content:flex-start}.buy-sell-message[_ngcontent-%COMP%]{margin:1rem;color:#4d4d4d;display:flex;justify-content:center;align-items:center}.buy-sell-message.green[_ngcontent-%COMP%]{color:green}.buy-sell-message.red[_ngcontent-%COMP%]{color:red}.buy-sell-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.4rem}.send-button[_ngcontent-%COMP%]{margin:1rem auto}.summary[_ngcontent-%COMP%]{padding:1rem;border:solid 1px #2bba4a;border-radius:1rem}.summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}.summary-item[_ngcontent-%COMP%]{color:#000;margin-top:1rem;display:flex;flex-direction:column;justify-content:center}.total[_ngcontent-%COMP%]{font-size:2rem}.listpoint[_ngcontent-%COMP%]{list-style:none;margin-right:0}*[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:rgb(26,26,26) rgba(255,166,0,0)}*[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}*[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(255,166,0,0)}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--table-scroll);border-radius:20px;border:3px solid var(--table-scroll)}.texItem[_ngcontent-%COMP%]{font-size:medium;color:#888787}.styletitel[_ngcontent-%COMP%]{margin-top:1%;color:#2bba4a;font-size:20px;font-weight:bolder}.textprice[_ngcontent-%COMP%]{color:#000;margin-top:20px}.butongrus[_ngcontent-%COMP%]{margin-top:5px;padding:5px;font-size:small}.texbot[_ngcontent-%COMP%]{font-size:13px;width:100%}.itemintr[_ngcontent-%COMP%]{width:40px;margin-top:-15px}@media (min-width: 656px){.texbot[_ngcontent-%COMP%]{font-size:13px;width:100%}.listpoint[_ngcontent-%COMP%]{list-style:none;margin-right:3vw}}@media (min-width: 1046px){.listpoint[_ngcontent-%COMP%]{list-style:none;margin-right:150px}}.positive[_ngcontent-%COMP%]{color:#13e000;font-size:15px}.negative[_ngcontent-%COMP%]{color:red;font-size:15px}#chart[_ngcontent-%COMP%]{max-width:1000px;margin:35px auto;color:#000}.whidbu[_ngcontent-%COMP%]{font-size:8px}.shadow[_ngcontent-%COMP%]{box-shadow:0 .5rem 2rem var(--shadown-color)!important}.form-control[_ngcontent-%COMP%]{height:21px;padding:3px;color:var(--drowdown-text-color);background-color:var(--drowdown-bg);border:1px solid var(--drowdown-brd)}.subtitle[_ngcontent-%COMP%]{color:var(--bs-drown-color)}.titleinfo[_ngcontent-%COMP%]{color:var(--count-color)}.ibackcolor[_ngcontent-%COMP%]{margin-top:-52px;color:var(--ibackcolor);cursor:pointer;width:40px}.ibackcolor[_ngcontent-%COMP%]:hover{color:#0fa}.btn-outline-box[_ngcontent-%COMP%]{--bs-btn-color: var(--bs-btn-color-box);--bs-btn-border-color: var(--bs-btn-border-color-box);--bs-btn-hover-color: var(--bs-btn-hover-color-box);--bs-btn-hover-bg: var(--bs-btn-hover-bg-box);--bs-btn-hover-border-color: var(--bs-btn-hover-border-color-box);--bs-btn-focus-shadow-rgb: var(--bs-btn-focus-shadow-rgb-box);--bs-btn-active-color: var(--bs-btn-active-color-box);--bs-btn-active-bg: var(--bs-btn-active-bg-box);--bs-btn-active-border-color: var(--bs-btn-active-border-color-box);--bs-btn-active-shadow: var(--bs-btn-active-shadow-box);--bs-btn-disabled-color: var(--bs-btn-disabled-color-box);--bs-btn-disabled-bg: var(--bs-btn-disabled-bg-box);--bs-btn-disabled-border-color: var(--bs-btn-disabled-border-color-box);--bs-gradient: var(--bs-gradient-box)}.example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:300px}.example-header[_ngcontent-%COMP%]{min-height:64px;padding:8px 24px 0}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:200px}.mat-column-id[_ngcontent-%COMP%]{flex:0 0 50px}.mat-table[_ngcontent-%COMP%]{background:var(--table-color-bg);overflow:auto;max-height:500px}.mat-paginator[_ngcontent-%COMP%]{background:var(--bg-table-footer);color:var(--tex-pg-table)}.mat-header-cell[_ngcontent-%COMP%]{color:var(--header-text-table);font-weight:700;background-color:--table-header-bg;font-size:8px}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:var(--color-text-table);--bs-table-border-color: var(--margin-table)}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:var(--table-header-bg)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 rem 0 var(--shadown-color)!important}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:var(--border-inter-table)}.mat-header-row[_ngcontent-%COMP%]{background:var(--bg-table-footer)}.mat-input-element[_ngcontent-%COMP%]{color:var(--drowdown-text-color);caret-color:var(--drowdown-text-color)}.mat-cell[_ngcontent-%COMP%]{font-size:10px}.search[_ngcontent-%COMP%]{min-width:90px;min-height:30px;margin-top:-1px}@media (min-width: 656px){.mat-cell[_ngcontent-%COMP%]{font-size:14px}.mat-header-cell[_ngcontent-%COMP%]{color:var(--header-text-table);font-weight:700;background-color:--table-header-bg;font-size:12px}.search[_ngcontent-%COMP%]{min-width:90px;min-height:36px;margin-top:-1px}}.heigthscroll[_ngcontent-%COMP%]{height:60vh;overflow-x:hidden;overflow-y:scroll}.scroll[_ngcontent-%COMP%]{max-height:66vh;overflow-x:hidden;overflow-y:scroll}@media (min-width: 400px){.heigthscroll[_ngcontent-%COMP%]{height:66vh;overflow-x:hidden;overflow-y:scroll}.scroll[_ngcontent-%COMP%]{max-height:71vh;overflow-x:hidden;overflow-y:scroll}}@media (min-width: 1400px){.heigthscroll[_ngcontent-%COMP%]{height:74vh;overflow-x:hidden;overflow-y:scroll}.scroll[_ngcontent-%COMP%]{max-height:76vh;overflow-x:hidden;overflow-y:scroll}}"]}),i})();var Q=l(7250);function W(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.MAs(3),r=t.oxw();return t.KtG(r.deleteaccount(n.value))}),t._UZ(1,"i",18)(2,"input",19,20),t.qZA()}}const V=[{path:"assets",component:$},{path:"",component:(()=>{class i{constructor(e,o,n,r,a,s){this.toastr=e,this.assets=o,this.client=n,this.websocket=r,this.testservice=a,this.spinner=s,this.langs=[],this.portfolio_name="",this.userName="",this.totalCurrentBalance=0,this.show_data=[],this.page=1,this.pageSize=20,this.validating=!1,this.subscription=new T.w0,this.showdeleteaccount=!1}ngOnInit(){this.InitHome(),this.GetDataBloxOrder()}ngOnDestroy(){this.subscription.unsubscribe()}deleteaccount(e){var o=this;return(0,u.Z)(function*(){var n={code:e,notes:"Yeah"},r=yield o.testservice.deleteaccount(n).toPromise();console.log("esto devuelve "+JSON.stringify(r))})()}GetDataBloxOrder(){var e=this;return(0,u.Z)(function*(){e.subscription.add(e.websocket.GetDataBloxOrder().subscribe(o=>{"object"!=typeof o&&"Hey Dude!"!=o&&(null==JSON.parse(o).success||null==JSON.parse(o).success)&&e.ResponseEvent(JSON.parse(o))}))})()}ResponseEvent(e){var o=this;switch(e.header.msg_type){case"EXECUTION":case"TRACKING_EXECUTION":case"DEPOSIT":case"WITHDRAW":case"ORDER_ERROR":case"ORDER_CANCEL":case"ORDER_REJECTED":case"TRACKING_EXECUTION":console.log("Llego notificacion Socket"),setTimeout((0,u.Z)(function*(){let n=yield o.GetPortfolioBalances();n?o.usd_qty=n.find(r=>"USD"==r.base_currency).qty:o.ShowError("Error to get client portafolio balances")}),500)}}InitHome(){var e=this;return(0,u.Z)(function*(){try{e.spinner.show();let o=yield e.GetClientConfig();if(!o)return void e.ShowError("Error to get client config");"danielestebandh@gmail.com"==o.email&&(e.showdeleteaccount=!0),e.userName=e.CapitalizeName(o.fname);let n=yield e.GetDefaultPortafolio();if(!n)return void e.ShowError("Error to get client portafolio");e.portfolio_name=n.name;let r=yield e.GetPortfolioBalances();if(!r)return void e.ShowError("Error to get client portafolio balances");e.usd_qty=r.find(s=>"USD"==s.base_currency).qty,r=r.filter(s=>s.qty>0);let a=r.filter(s=>!1===s.fiat).map(s=>`${s.base_currency}-USD`);r=r.map(s=>({...s,price:"USD"===s.base_currency?1:0,total:"USD"===s.base_currency?s.qty:0})),e.totalCurrentBalance=r.map(s=>s.total).reduce((s,d)=>s+d,0),e.portfolioBalances=r,a.length>0?(e.websocket.InitBlox(a),e.subscription.add(e.websocket.GetDataBlox().subscribe(s=>{try{if("string"==typeof s){let d=JSON.parse(s),p=e.portfolioBalances.find(g=>`${g.base_currency}-USD`===d.product_id);p&&(p.price=d.mid_price,p.total=p.qty*(d.mid_price??1),e.totalCurrentBalance=e.portfolioBalances.map(g=>g.total).reduce((g,m)=>g+m,0))}}catch(d){console.error("error websocket GetDataBlox",d)}}))):console.log("portafolio without coins")}catch(o){console.error("Error on InitDeposit:",o)}e.spinner.hide()})()}GetDefaultPortafolio(){return new Promise((e,o)=>{this.subscription.add(this.assets.GetDefault().subscribe(n=>{e(n)},n=>{console.log("Error GetDefault:",n),e(null)}))})}CapitalizeName(e){if(e){var o=e.split(" ");return e="",o.forEach(n=>{e=e+n[0].toUpperCase()+n.substr(1).toLowerCase()+" "}),e}return e}RealtimeCoinValue(e){try{if("string"==typeof e){let o=JSON.parse(e),n=this.portfolioBalances.find(r=>`${r.name}-USD`===o.product_id);n&&(n.price=o.mid_price,n.total=n.qty*(o.mid_price??1),this.totalCurrentBalance=this.portfolioBalances.map(r=>r.total).reduce((r,a)=>r+a,0))}else console.warn("wrong data websocket",e)}catch(o){console.error("error websocket GetDataBlox",o)}}GetClientConfig(){return new Promise((e,o)=>{this.subscription.add(this.client.GetClientConfig().subscribe(n=>{e(n)},n=>{console.log("Error GetClient:",n),e(null)}))})}GetPortfolioBalances(){const e={portfolio_name:this.portfolio_name};return new Promise((o,n)=>{this.subscription.add(this.assets.GetPortafolioBalances(e).subscribe(r=>{o(r)},r=>{console.log("Error GetAllPaymentMethods:",r),o(null)}))})}ShowError(e,o="",n=!0){console.error(e),this.toastr.error(e,o,{closeButton:!0,disableTimeOut:n,positionClass:"toast-center-center"})}ShowWarning(e,o="",n=!0){console.warn(e),this.toastr.warning(e,o,{closeButton:!0,disableTimeOut:n,positionClass:"toast-center-center"})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(S._W),t.Y36(G.u),t.Y36(D.y),t.Y36(E.y),t.Y36(Q.P),t.Y36(_.t2))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:33,vars:28,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","line-scale-pulse-out",3,"fullScreen"],[2,"color","white"],[1,"container"],[1,"row"],[1,"col"],[1,"textwel"],["type","button","class","btn",3,"click",4,"ngIf"],[1,"princ"],[1,"container","shadow"],[1,"col-md-6","my-3"],[1,"currtext"],[1,"textprice"],[1,"col-md-6","my-3",2,"text-align","center"],["type","button","routerLink","/home/portafolio/deposit",1,"btn","btn-success","buttonc",3,"disabled"],[1,"mt-2"],["type","button","routerLink","/home/portafolio/withdrawal",1,"btn","btn-outline-success","buttonc",3,"disabled"],[3,"typetable"],["type","button",1,"btn",3,"click"],[1,"fa","fa-solid","fa-skull-crossbones"],["type","number"],["inputdelete",""]],template:function(e,o){1&e&&(t.TgZ(0,"ngx-spinner",0)(1,"p",1),t._uU(2),t.ALo(3,"translate"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"h2",5),t._uU(8),t.ALo(9,"translate"),t.YNc(10,W,4,0,"button",6),t.qZA(),t.TgZ(11,"p",7),t._uU(12),t.ALo(13,"translate"),t.qZA()()()(),t.TgZ(14,"div",8)(15,"div",3)(16,"div",9)(17,"p",10),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"p",11),t._uU(21),t.ALo(22,"currency"),t.qZA()(),t.TgZ(23,"div",12)(24,"div")(25,"button",13),t._uU(26),t.ALo(27,"translate"),t.qZA()(),t.TgZ(28,"div",14)(29,"button",15),t._uU(30),t.ALo(31,"translate"),t.qZA()()()()(),t._UZ(32,"app-table-info-transactions",16)),2&e&&(t.Q6J("fullScreen",!0),t.xp6(2),t.hij(" ",t.lcZ(3,13,"general.cargando")," "),t.xp6(6),t.AsE("",t.lcZ(9,15,"home.hi"),", ",o.userName," "),t.xp6(2),t.Q6J("ngIf",o.showdeleteaccount),t.xp6(2),t.hij("",t.lcZ(13,17,"home.lastConnection"),", April 1st, 2022 at 3:50 p.m."),t.xp6(6),t.Oqu(t.lcZ(19,19,"home.yourCurrentBalance")),t.xp6(3),t.hij("USD ",t.xi3(22,21,o.usd_qty,"USD"),""),t.xp6(4),t.Q6J("disabled",o.validating),t.xp6(1),t.Oqu(t.lcZ(27,24,"sidebar.deposit")),t.xp6(3),t.Q6J("disabled",o.validating),t.xp6(1),t.Oqu(t.lcZ(31,26,"sidebar.withdraw")),t.xp6(2),t.Q6J("typetable","home"))},dependencies:[_.Ro,b.O5,C.rH,U.E,b.H9,M.X$],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:46vh}.example-header[_ngcontent-%COMP%]{min-height:64px;padding:8px 24px 0}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:200px}.mat-column-id[_ngcontent-%COMP%]{flex:0 0 50px}.textwel[_ngcontent-%COMP%]{margin-top:.5%;color:#2bba4a;font-size:20px;font-weight:bolder}.princ[_ngcontent-%COMP%]{color:var(--count-color);font-size:15px}.currtext[_ngcontent-%COMP%]{color:var(--count-color);margin-top:3%;font-weight:700;font-size:15px}.textprice[_ngcontent-%COMP%]{color:#1c8d1c}.buttonc[_ngcontent-%COMP%]{width:100%;margin-top:3px;margin-bottom:2px}.labelfil[_ngcontent-%COMP%]{color:var(--label-home);font-size:15px;margin-top:15px}.dropdowndep[_ngcontent-%COMP%]{width:100%;margin-top:-15px}.texttable[_ngcontent-%COMP%]{font-size:8px}@media (min-width: 310px){.texttable[_ngcontent-%COMP%]{font-size:10px}}@media (min-width: 656px){.texttable[_ngcontent-%COMP%]{font-size:medium}}.shadow[_ngcontent-%COMP%]{box-shadow:0 .5rem 2rem var(--shadown-color)!important}.form-control[_ngcontent-%COMP%]{height:21px;padding:3px;color:var(--drowdown-text-color);background-color:var(--drowdown-bg);border:1px solid var(--drowdown-brd)}.table[_ngcontent-%COMP%]{--bs-table-color: var(--color-text-table);--bs-table-bg: transparent;--bs-table-border-color: var(--margin-table);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--color-text-table);--bs-table-striped-bg: rgba(0, 0, 0, .05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, .1);--bs-table-hover-color: var(--activ-text-table);--bs-table-hover-bg: var(--activ-bg-table)}.icondop[_ngcontent-%COMP%]{margin-bottom:-50px;margin-left:88%;color:var(--drowdown-text-color)}.positive[_ngcontent-%COMP%]{color:#000}.negative[_ngcontent-%COMP%]{color:red}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:vertical{width:10px}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment, .contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-button{display:none}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:10px}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--table-scroll);border-radius:20px;border:2px solid var(--table-scroll)}.contenedor[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px}.mat-table[_ngcontent-%COMP%]{background:var(--table-color-bg);overflow:auto;max-height:500px}.mat-paginator[_ngcontent-%COMP%]{background:var(--bg-table-footer);color:var(--tex-pg-table)}.mat-header-cell[_ngcontent-%COMP%]{color:var(--header-text-table);font-weight:700;background-color:--table-header-bg;font-size:8px}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:var(--color-text-table);--bs-table-border-color: var(--margin-table)}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:var(--table-header-bg)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 .5rem 2rem var(--shadown-color)!important}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:var(--border-inter-table)}.mat-header-row[_ngcontent-%COMP%]{background:var(--bg-table-footer)}.mat-input-element[_ngcontent-%COMP%]{color:var(--drowdown-text-color);caret-color:var(--drowdown-text-color)}.mat-cell[_ngcontent-%COMP%]{font-size:10px}@media (min-width: 656px){.mat-cell[_ngcontent-%COMP%]{font-size:14px}.mat-header-cell[_ngcontent-%COMP%]{color:var(--header-text-table);font-weight:700;background-color:--table-header-bg;font-size:12px}}"]}),i})()}];let X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[C.Bz.forChild(V),C.Bz]}),i})();var tt=l(7855),et=l(4006),ot=l(7092),nt=l(2216),rt=l(7846),it=l(2037);let at=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[b.uU],imports:[_.ef,nt.uH,rt.q,et.u5,ot.IJ,tt.Su,b.ez,X,M.aw.forChild(),it.Y]}),i})()}}]);