"use strict";(self["webpackChunkportofolio"]=self["webpackChunkportofolio"]||[]).push([[443],{8781:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var i=t(3396),n=t.p+"img/1077042.e9003e54.png",l=t.p+"img/messenger.e0bae29b.png";const s=(0,i.uE)('<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Cards Hover2</title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" type="text/css" media="screen" href="style.css"><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></head>',1),r={class:"container"},c=(0,i.uE)('<div class="card"><div class="face face1"><div class="content"><div class="icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></div></div></div><div class="face face2"><div class="content"><h3><a href="https://www.linkedin.com/in/tamir-rusydi-hega-678996212/" target="_blank">Tamir Rusydi Hega</a></h3><p>This is where I network and build my professional protfolio.</p></div></div></div><div class="card"><div class="face face1"><div class="content"><div class="icon"><i class="fab fa-instagram-square share" aria-hidden="true"><img src="'+n+'" alt="" style="max-width:100%;"></i></div></div></div><div class="face face2"><div class="content"><h3><a href="https://www.instagram.com/tamsmir/" target="_blank">@tamsmir</a></h3><p>This is where I read news and network with different social groups.</p></div></div></div><div class="card"><div class="face face1"><div class="content"><div class="icon"><i class="fa fa-github-square" aria-hidden="true"></i></div></div></div><div class="face face2"><div class="content"><h3><a href="https://github.com/tamir3232" target="_blank">tamir3232</a></h3><p>This is where I share code and work on projects.</p></div></div></div>',3),d={class:"card"},o=(0,i.uE)('<div class="face face1"><div class="content"><div class="icon"><i class="fab fa-instagram-square share" aria-hidden="true"><img src="'+l+'" alt="" style="max-width:100px;"></i></div></div></div>',1),u={class:"face face2"},m={class:"content"},p=(0,i._)("a",null,"Berikan Pesan Mu pada ku",-1),h=(0,i._)("p",null,"Anda boleh memberikan pesan untuk ku kedepannya",-1);function v(e,a){const t=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("html",null,[s,(0,i._)("body",null,[(0,i._)("div",r,[c,(0,i._)("div",d,[o,(0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("h3",null,[(0,i.Wm)(t,{to:"/form"},{default:(0,i.w5)((()=>[p])),_:1})]),h])])])])])])}var f=t(89);const g={},b=(0,f.Z)(g,[["render",v]]);var w=b},4763:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var i=t(3396),n=t(9242);const l={lang:"en"},s=(0,i._)("head",null,[(0,i._)("meta",{charset:"UTF-8"}),(0,i._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i._)("title",null,"Document")],-1),r={style:{margin:"250px 650px"}},c={action:""},d=(0,i._)("br",null,null,-1),o=(0,i._)("option",{enable:"",value:""},"Please select Your gender",-1),u=(0,i._)("option",null,"male",-1),m=(0,i._)("option",null,"female",-1),p=[o,u,m],h=(0,i._)("br",null,null,-1);function v(e,a,t,o,u,m){const v=(0,i.up)("BaseInput");return(0,i.wg)(),(0,i.iD)("html",l,[s,(0,i._)("body",null,[(0,i._)("div",r,[(0,i._)("form",c,[(0,i.Wm)(v,{modelValue:u.input.name,"onUpdate:modelValue":a[0]||(a[0]=e=>u.input.name=e),name:"name",label:"Name",type:"text"},null,8,["modelValue"]),(0,i.Wm)(v,{modelValue:u.input.email,"onUpdate:modelValue":a[1]||(a[1]=e=>u.input.email=e),name:"email",label:"Email",type:"email"},null,8,["modelValue"]),d,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>u.input.gender=e)},p,512),[[n.bM,u.input.gender]]),(0,i.Wm)(v,{modelValue:u.input.message,"onUpdate:modelValue":a[3]||(a[3]=e=>u.input.message=e),name:"message",label:"message",type:"message"},null,8,["modelValue"]),h,(0,i._)("button",{onClick:a[4]||(a[4]=(0,n.iM)(((...e)=>m.submitt&&m.submitt(...e)),["prevent"]))},"SUBMIT")])])])])}var f=t(7139);const g=["for"],b=["type","placeholder","value"];function w(e,a,t,n,l,s){return(0,i.wg)(),(0,i.iD)("label",{for:t.name},[(0,i._)("p",null,(0,f.zw)(t.label),1),(0,i._)("input",{type:t.type,placeholder:t.label,value:t.modelValue,onInput:a[0]||(a[0]=a=>e.$emit("update:modelValue",a.target.value))},null,40,b)],8,g)}var y={name:"BaseInput",emits:["update:modelValue"],props:{name:String,label:String,modelValue:String,type:{type:String,default:"text"}}},_=t(89);const k=(0,_.Z)(y,[["render",w]]);var I=k,V={name:"TestView",data(){return{title:"Test",input:{name:"",email:"",gender:null,message:""},gender:[{text:"Select One",value:null},"male","female"]}},components:{BaseInput:I},methods:{submitt(){console.log(JSON.stringify(this.input))}}};const A=(0,_.Z)(V,[["render",v]]);var S=A},6583:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var i=t(3396);const n={lang:"en"},l=(0,i.uE)('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><div class="name-project" style="margin:100px auto;margin-left:120px;"><h1 style="color:aliceblue;font-family:sans-serif;font-size:40px;"> PROJECT</h1></div><div class="project-container" style="margin:120px;font-family:Arial, Helvetica, sans-serif;"><a href="https://github.com/tamir3232/TUGAS_Bingleshop" class="card1"><div class="inner"><h2 class="title">API ONLINE SHOP</h2><time class="subtitle">25 JULI 2022</time></div></a><a href="https://github.com/tamir3232/Website-Hotel-Menggunakan-Semantic-Web" class="card2"><div class="inner"><h2 class="title">Website hotel menggunakan RDF dan Semantic Web</h2><time class="subtitle">08 JULI 2022</time></div></a><a href="https://github.com/tamir3232/APLIKASI-KASIR-JAVA-" class="card3"><div class="inner"><h2 class="title">APLIKASI KASIR SEDERHANA</h2><time class="subtitle">09 September 2021</time></div></a></div></body>',2),s=[l];function r(e,a){return(0,i.wg)(),(0,i.iD)("html",n,s)}var c=t(89);const d={},o=(0,c.Z)(d,[["render",r]]);var u=o}}]);
//# sourceMappingURL=about.516c141e.js.map