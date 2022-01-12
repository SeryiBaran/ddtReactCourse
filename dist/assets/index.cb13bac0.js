var f=Object.defineProperty;var p=(i,u,n)=>u in i?f(i,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[u]=n;var a=(i,u,n)=>(p(i,typeof u!="symbol"?u+"":u,n),n);import{j as m,R as d,r as h,a as D}from"./vendor.e1fa16de.js";const v=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};v();const t=m.exports.jsx,s=m.exports.jsxs,C="ddtReactCourse";function I(){return s("div",{id:"app",className:"app",children:[s("h1",{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ",C,"!"]}),t("p",{children:"\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 React \u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0437\u0430\u0434\u0435\u043F\u043B\u043E\u0435\u043D \u043D\u0430 Vercel.App."})]})}class E extends d.Component{constructor(u){super(u);a(this,"timerID");this.state={date:new Date},this.timerID=0}componentDidMount(){this.timerID=setInterval(()=>this.tick(),1e3)}componentWillUnmount(){clearInterval(this.timerID)}tick(){this.setState({date:new Date})}render(){return t("div",{id:"clock",children:s("h2",{className:"clock",children:["\u0412\u0440\u0435\u043C\u044F: ",this.state.date.toLocaleTimeString()]})})}}const x=t("p",{children:"\u042F \u0447\u043E\u043A\u043D\u0443\u0442\u044B\u0439 \u043B\u0438\u043D\u0443\u043A\u0441\u043E\u0438\u0434! \u{1F92A}"});function A(){const[i,u]=h.exports.useState(!1);function n(){u(o=>!o)}return s("div",{id:"whoimContainer",children:[s("button",{onClick:n,children:[i?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C"," \u043C\u043E\u0435 \u0438\u043C\u044F"]}),i&&x]})}function B(){const[i,u]=h.exports.useState(0);let n=`\u0412\u044B \u043D\u0430\u0436\u0430\u043B\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043E\u0447\u043A\u0443 ${i} \u0440\u0430\u0437`;const o=()=>{u(e=>e+1)};return h.exports.useEffect(()=>{n=`\u0412\u044B \u043D\u0430\u0436\u0430\u043B\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043E\u0447\u043A\u0443 ${i} \u0440\u0430\u0437`}),s("div",{id:"effectTest",children:[t("button",{onClick:o,children:"\u041D\u0430\u0436\u043C\u0438 \u043C\u0435\u043D\u044F"}),t("p",{children:n})]})}class k extends d.Component{constructor(u){super(u);a(this,"timerID");this.state={liveTime:10,hide:!1},this.timerID=0}componentDidMount(){this.timerID=setInterval(()=>this.tick(),1e3)}componentWillUnmount(){clearInterval(this.timerID)}tick(){this.setState({liveTime:this.state.liveTime-1}),this.state.liveTime<1&&(clearInterval(this.timerID),this.setState({hide:!0}))}render(){return t("div",{id:"stateTest",children:!this.state.hide&&s("h2",{children:["\u042D\u0442\u0430 \u043D\u0430\u0434\u043F\u0438\u0441\u044C \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 ",this.state.liveTime," \u0441\u0435\u043A\u0443\u043D\u0434!"]})})}}function c(){return t("div",{className:"indent"})}D.render(s(d.StrictMode,{children:[t(I,{}),t(c,{}),t(E,{}),t(c,{}),t(A,{}),t(c,{}),t(B,{}),t(c,{}),t(k,{})]}),document.getElementById("root"));