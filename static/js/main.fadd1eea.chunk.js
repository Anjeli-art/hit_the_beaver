(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,c){e.exports={App:"Bober_App__2vcH9",wrapper:"Bober_wrapper__2uj5e",znakomstvo:"Bober_znakomstvo__3e2xf",playbober:"Bober_playbober__1H8Kh",score:"Bober_score__2g7CG",lifes:"Bober_lifes__zEUkW",life:"Bober_life__1BeoL",layer:"Bober_layer__30qPS",mouseblock:"Bober_mouseblock__2Ewh7",error:"Bober_error__1jsjP"}},10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var r=c(2),a=c.n(r),n=c(5),s=c.n(n),i=(c(10),c(1)),l=c.n(i),o=c(3),b=c.p+"static/media/bober.ca733838.png",j=c.p+"static/media/heart.da5cdae6.png",d=c.p+"static/media/back2.eb72f190.png",u=c.p+"static/media/back3.34823540.png",p=c.p+"static/media/back4.62ec6e59.png",h=c.p+"static/media/back5.d435411f.png",f=c(0),v=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(10),s=Object(o.a)(n,2),i=s[0],v=s[1],x=Object(r.useState)(40),O=Object(o.a)(x,2),m=O[0],g=O[1],_=Object(r.useState)([j,j,j,j,j]),k=Object(o.a)(_,2),y=k[0],I=k[1],N=function(){v(Math.round(400*Math.random())),g(Math.round(1e3*Math.random()))};function B(){y.push(j,j,j,j,j),y.length>5&&(y.length=5)}Object(r.useEffect)((function(){if(c>0&&1===c){var e=setInterval(N,2500);return function(){clearInterval(e)}}if(c>1&&c<=10){var t=setInterval(N,2e3);return function(){clearInterval(t)}}if(c>10&&c<=30){var r=setInterval(N,1700);return function(){clearInterval(r)}}if(c>30&&c<=50){var a=setInterval(N,1500);return function(){clearInterval(a)}}if(c>50&&c<=80){var n=setInterval(N,1200);return function(){clearInterval(n)}}if(c>80&&c<=99){var s=setInterval(N,1e3);return function(){clearInterval(s)}}}));var w={marginTop:i,marginLeft:m,width:"100px"},C={width:c<1?"500px":"100px"},S={margin:"30px auto 0",width:"1200px",height:"600px",backgroundColor:"#deff25",backgroundImage:c<30&&c>=10?"url(".concat(u,")"):c<50&&c>=30?"url(".concat(p,")"):c<80&&c>=50?"url(".concat(d,")"):c<100&&c>=80?"url(".concat(h,")"):"",padding:"20px",border:"#0c7116 solid 20px"};return Object(f.jsx)("div",{style:S,children:Object(f.jsxs)("div",{className:l.a.wrapper,children:[c>0&&110!==c&&c<100&&Object(f.jsxs)("div",{className:l.a.playbober,children:[Object(f.jsx)("div",{className:l.a.score,children:c}),Object(f.jsx)("div",{className:l.a.lifes,children:y.map((function(e){return Object(f.jsx)("div",{className:l.a.life,children:Object(f.jsx)("img",{src:e,alt:"life"})})}))})]}),Object(f.jsx)("div",{className:l.a.mouseblock,onClick:function(e){e&&e.target===e.currentTarget&&function(){if(c>0&&c<100&&0!==y.length){y.shift();var e=y.filter((function(e){return e}));I(e)}0===y.length&&100!==c&&(a(c=110),B())}()},children:Object(f.jsx)("div",{style:w,onClick:function(){c<100?a(c+1):100!==c&&110!==c||(a(c=1),B()),N()},children:Object(f.jsx)("img",{style:C,src:b,alt:"bober"})})}),0===c&&Object(f.jsxs)("div",{className:l.a.znakomstvo,children:[Object(f.jsx)("h1",{children:"\u041f\u043e\u0439\u043c\u0430\u0439 \u0433\u043e\u0432\u043d\u044f\u0441\u0442\u043e\u0433\u043e \u0431\u043e\u0431\u0440\u0430"}),Object(f.jsxs)("p",{children:["\u042d\u0442\u043e \u0438\u0433\u0440\u0430 \u043d\u0430 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c.",Object(f.jsx)("br",{}),"\u0421 \u043a\u0430\u0436\u0434\u044b\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0431\u043e\u0431\u0435\u0440 \u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u0435 \u0431\u044b\u0441\u0442\u0440\u0435\u0435.",Object(f.jsx)("br",{}),"\u0422\u0435\u0431\u0435 \u0434\u0430\u0435\u0442\u0441\u044f 5 \u0436\u0438\u0437\u043d\u0435\u0439 \u0447\u0442\u043e\u0431 \u043e\u0431\u044b\u0433\u0440\u0430\u0442\u044c \u0431\u043e\u0431\u0440\u0430.",Object(f.jsx)("br",{}),"\u0415\u0441\u043b\u0438 \u043e\u043d\u0438 \u0441\u0433\u043e\u0440\u044f\u0442,\u0438\u0433\u0440\u0430 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0437\u0430\u043d\u043e\u0432\u043e.",Object(f.jsx)("br",{}),"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 \u043d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0431\u043e\u0431\u0440\u0430."]})]}),c<11&&c>9&&Object(f.jsx)("div",{className:l.a.layer,children:"2 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),c<31&&c>29&&Object(f.jsx)("div",{className:l.a.layer,children:"3 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),c<51&&c>49&&Object(f.jsx)("div",{className:l.a.layer,children:"4 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),c<81&&c>79&&Object(f.jsx)("div",{className:l.a.layer,children:"5 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}),c>99&&c<110&&Object(f.jsxs)("div",{className:l.a.znakomstvo,children:[Object(f.jsxs)("h1",{children:["\u0411\u043e\u0431\u0435\u0440 \u043f\u043e\u0439\u043c\u0430\u043d ",c," \u0440\u0430\u0437"]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["\u0418\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u0430.\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0438\u0437\u043d\u0435\u0439 ",y.length]}),Object(f.jsx)("p",{children:"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 \u0437\u0430\u043d\u043e\u0432\u043e \u043d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0431\u043e\u0431\u0440\u0430."})]})]}),110===c&&Object(f.jsxs)("div",{className:l.a.error,children:[Object(f.jsx)("h1",{children:"\u0411\u043e\u0431\u0435\u0440 \u041d\u0435 \u043f\u043e\u0439\u043c\u0430\u043d!"}),Object(f.jsxs)("p",{children:["\u0411\u043e\u0431\u0435\u0440 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0445\u0438\u0442\u0440\u0435\u0435 \u0442\u0435\u0431\u044f!",Object(f.jsx)("br",{}),"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 \u0437\u0430\u043d\u043e\u0432\u043e \u043d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0431\u043e\u0431\u0440\u0430."]})]})]})})};var x=function(){return Object(f.jsx)("div",{className:l.a.App,children:Object(f.jsx)(v,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),O()}},[[12,1,2]]]);
//# sourceMappingURL=main.fadd1eea.chunk.js.map