import{S as e,C as t,P as n,W as o,A as a,s as i,F as s,D as r,G as c,f as l,E as d,N as u,Q as h,a as p,b as m,c as f}from"./vendor.b7c543e3.js";let w,g,y,b,E,v,x,I,R=!1,L=[],j=document.querySelector("#videoElement");const B=document.createElement("a");function q(e,t){B.href=URL.createObjectURL(e),B.download=t,B.click()}B.style.display="none",document.body.appendChild(B),navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){j.srcObject=e})).catch((function(e){console.log("Something went wrong!")})),function(){g=new m,w=document.querySelector("#bg");const l=new e;l.background=new t(16777215);const d=new n(45,4/3,.1,100);d.position.set(0,0,50);const j=new o({canvas:w,antialias:!0});j.setPixelRatio(window.devicePixelRatio),j.setSize(w.clientWidth,w.clientWidth/4*3),j.toneMapping=a,j.outputEncoding=i,(new s).load("face.fbx",(e=>{b=e,y=e.getObjectByName("head"),E=e.getObjectByName("eyeLeft"),v=e.getObjectByName("eyeRight");for(let t=0;t<52;t++)y.morphTargetDictionary[t]=t;x=y.morphTargetDictionary,I=y.morphTargetInfluences,l.add(e)}),(e=>{}),(e=>{console.log(e)}));const B=new r(16777215);B.position.set(0,200,100),B.castShadow=!0,l.add(B),j.setAnimationLoop((()=>{j.render(l,d)})),window.addEventListener("resize",(()=>{d.aspect=w.clientWidth/w.clientHeight,d.updateProjectionMatrix(),j.setSize(w.clientWidth,w.clientWidth/4*3)})),document.getElementById("download").addEventListener("click",(()=>{let e={binary:!0,animations:[function(){if(0!=L.length){let e=[];for(let u=0;u<52;u++)e.push([]);let t=[],n=[],o=0,a=0;L.forEach(((i,s)=>{if(0==s)o=i.time,Object.entries(i.blendshapes).forEach((([t,n])=>{e[x[t]].push(n)})),t.push(i.rotation),n.push(a/30),a++;else for(;i.time>a/30+o;){let r=a/30+o-L[s-1].time,c=i.time-(a/30+o);Object.entries(i.blendshapes).forEach((([t,n])=>{let o=n,a=L[s-1].blendshapes[t];e[x[t]].push((a*c+o*r)/(r+c))}));let l=new f;l.slerpQuaternions(L[s-1].rotation,i.rotation,r/(r+c)),t.push(l),n.push(a/30),a++}}));let i=[];Object.entries(L[0].blendshapes).forEach((([t,o])=>{let a=x[t],s=new u(`head.morphTargetInfluences[${a}]`,n,e[a]);i.push(s)}));let s=[],r=[];t.forEach((e=>{s.push(e.x),s.push(e.y),s.push(e.z),s.push(e.w);let t=e.clone();t.invert(),r.push(t.x),r.push(t.y),r.push(t.z),r.push(t.w)}));let c=new h("grp_scale.quaternion",n,s);i.push(c);let l=new h("eyeLeft.quaternion",n,r),d=new h("eyeRight.quaternion",n,r);i.push(l),i.push(d);return new p("animation",-1,i)}return null}()]};(new c).parse(b,(function(e){if(e instanceof ArrayBuffer)t="scene.glb",q(new Blob([e],{type:"application/octet-stream"}),t);else{!function(e,t){q(new Blob([e],{type:"text/plain"}),t)}(JSON.stringify(e,null,2),"scene.gltf")}var t}),e)})),document.getElementById("record").addEventListener("click",(()=>{R?(document.getElementById("record").innerText="Record",R=!1,document.getElementById("download").classList.remove("hidden")):(L=[],document.getElementById("record").innerText="Stop",R=!0,document.getElementById("download").classList.add("hidden"))})),document.getElementById("download").classList.add("hidden")}(),function(){const e=new l.exports.ApplicationContext(window.location.href),t=new l.exports.ResourceFileSystem(e);l.exports.FacemojiAPI.initialize("dfe3er64ijyqmqtqg2nt6btjuus754busbnboca7ef553iw32qyf27i",e).then((e=>{e?console.info("API successfully activated"):console.info("API could not be activated")}));const n=l.exports.FaceTracker.createVideoTracker(t).then((e=>(requestAnimationFrame(o),e))).logError("Could not start tracking");function o(){requestAnimationFrame(o);var e=n.currentValue;if(!e||null===j)return;var t=e.track(j);if(null==t)return;let a={},i=0,s=0;const r=(c=t.rotationQuaternion,l=c.toEuler(),u=.5*Math.PI,[["headLeft",Math.max(0,l.y)/u],["headRight",-Math.min(0,l.y)/u],["headUp",-Math.min(0,l.x)/u],["headDown",Math.max(0,l.x)/u],["headRollLeft",-Math.min(0,l.z)/u],["headRollRight",Math.max(0,l.z)/u]]);var c,l,u;b.setRotationFromEuler(new d(r[3][1]-r[2][1],r[0][1]-r[1][1],r[5][1]-r[4][1],"XYZ")),E.setRotationFromEuler(new d(-r[3][1]+r[2][1],-r[0][1]+r[1][1],-r[5][1]+r[4][1],"XYZ")),v.setRotationFromEuler(new d(-r[3][1]+r[2][1],-r[0][1]+r[1][1],-r[5][1]+r[4][1],"XYZ"));for(const[n,o]of t.blendshapes)"browInnerUp_R"==n&&(i=o),"browInnerUp_L"==n&&(s=o),null!=x[n]&&(I[x[n]]=o,R&&(a[n]=o));if(I[x.browInnerUp]=(i+s)/2,R&&(a.browInnerUp=(i+s)/2),R){let e=g.getElapsedTime(),t=new d(r[3][1]-r[2][1],r[0][1]-r[1][1],r[5][1]-r[4][1],"XYZ"),n=new f;n.setFromEuler(t);let o={time:e,blendshapes:a,rotation:n};L.push(o)}}}();