import{i as m,g,a as u,s as p,r as b,o as h}from"./index-dfc2d82f-CG6sA5pC.js";const f=()=>{const n=m({apiKey:"AIzaSyDYSjXVHK9N9H_sQYF9jEb1k4Nhtl-V-us",authDomain:"joblist-kang.firebaseapp.com",databaseURL:"https://joblist-kang.firebaseio.com",projectId:"joblist-kang",storageBucket:"joblist-kang.firebasestorage.app",messagingSenderId:"704002182844",appId:"1:704002182844:web:636b84021295c9c629cab9",measurementId:"G-W779X1QZW2"}),r=g(n);console.log(r);const l=u();p(l,"kjhlr@hotmail.com","671691").then(o=>{v();const e=o.user;return console.log(e.uid),e.uid}).catch(o=>{const e=o.code,c=o.message;return console.log(c+"="+e),c+"="+e})};var s=new Map,a=[];const v=()=>{var t="registeredPeople";const n=g(),r=b(n,"/"+t);s.clear,a=[],h(r,l=>{l.forEach(o=>{const e=o.val();a.push(Object.values(e)[5]),s.set(Object.values(e)[5],Object.values(e))}),console.log(a),console.log(s)},{onlyOnce:!0})};f();const I=()=>{var t=document.getElementById("un").value,n=document.getElementById("pw").value;if(console.log(s),t!==""&&n!=="")if(console.log(a),console.log(t),a.includes(t)){var r=s.get(t);if(n===r[3]){document.getElementById("demo").textContent="password ok";var l=s.get(t),o=JSON.stringify(l);window.localStorage.setItem("userInfo",o);var e=new Array;a.map(d=>{s.get(d)[1]==l[1]&&e.push(s.get(d)[5])});var c=JSON.stringify(e);window.localStorage.setItem("driverArr",c),console.log(e),window.location.replace("navbar.html")}else document.getElementById("demo").textContent="PassWord is Wrong"}else document.getElementById("demo").textContent="username is wrong";else console.log(a),document.getElementById("demo").textContent="UserName or PassWord is Empty"};var i;(i=document.getElementById("cpw"))==null||i.addEventListener("click",I);
