function pl6c(a){this.pl74=a;this.pl76=this.pl75=0;this.pl77=document.getElementById("pv"+a+"bn0");this.pl78=document.getElementById("pv"+a+"bn1");this.pl79=document.getElementById("pvrl"+a);this.pl7a=document.getElementById("pvkn"+a);this.pl7b=document.getElementById("pvin"+a);this.pl7c=!1}
pl6c.prototype.pl0=function(a,b,d){this.pl77.style.left=a+"px";this.pl77.style.top=b+"px";this.pl78.style.left=a+d-40+"px";this.pl78.style.top=b+"px";this.pl79.style.left=a+52+"px";this.pl79.style.top=b+16+"px";this.pl79.style.width=d-40-40-12-12+"px";this.pl7d=a+40;this.pl7e=d-40-40-32;this.pl7f=this.pl7d+this.pl7e;this.pl80=a+40;this.pl81=b+4;this.pl7a.style.left=this.pl80+"px";this.pl7a.style.top=this.pl81+"px";this.pl7b.style.left=this.pl80-16+"px";this.pl7b.style.top=this.pl81-44+"px"};
pl6c.prototype.pl1=function(a,b,d){this.pl77.style.visibility="visible";this.pl78.style.visibility="visible";this.pl79.style.visibility="visible";this.pl7a.style.visibility="visible";this.pl7c=!0;this.pl75=a-1;this.pl82=1+d-a;this.pl3(b)};pl6c.prototype.pl2=function(a,b){this.pl82=b-this.pl75;this.pl3(a)};
pl6c.prototype.pl3=function(a){a>this.pl82+this.minValu1?a=this.pl82+this.pl75:a<this.pl75+1&&(a=this.pl75+1);a-=this.pl75;newX=this.pl7d+Math.floor(a*this.pl7e/this.pl82)-1;this.pl7a.style.left=newX+"px";this.pl7b.style.left=newX-16+"px";this.pl80=newX;this.pl83=a;this.pl7a.innerHTML=this.pl83+this.pl75};pl6c.prototype.pl4=function(a,b){return!plcb.plb5.pl99&&this.pl7c&&a>=this.pl80-4&&a<=this.pl80+40&&b>=this.pl81-4&&b<=this.pl81+40};
pl6c.prototype.pl5=function(a,b){this.pl84=a;this.pl85=a-this.pl80;this.pl7b.style.visibility="visible";this.pl8()};pl6c.prototype.pl6=function(a,b){var d=this.pl84+a-this.pl84-this.pl85;d<this.pl7d?d=this.pl7d:d>this.pl7f-1&&(d=this.pl7f-1);this.pl7a.style.left=d+"px";this.pl7b.style.left=d-16+"px";this.pl80=d;this.pl8()};pl6c.prototype.pl7=function(){this.pl7b.style.visibility="hidden";this.pl3(this.pl83+this.pl75);plcb.plc3.pl3b(this.pl74,this.pl83+this.pl75)};
pl6c.prototype.pl8=function(){this.pl83=1+Math.floor(this.pl82*(this.pl80-this.pl7d)/this.pl7e);this.pl7b.innerHTML=this.pl7a.innerHTML=this.pl83+this.pl75};
function pl6d(a,b){var d=document.getElementById("pcan");a?(d.width=a,d.height=b):(a=d.width=window.innerWidth-120,b=d.height=window.innerHeight-0);this.pl86=d.offsetLeft;this.pl87=d.offsetTop;this.pl88=d.getContext("2d");this.pl89=document.getElementById("pev");this.pl89.style.width=a+"px";this.pl89.style.height=b+"px";this.pl8a=a;this.pl8b=b;this.pl8c=a;this.pl8d=b;this.pl8f=this.pl8e=0;this.pl90=1;this.pl92=this.pl91=0;this.pl93=[];this.pl94=[];this.pl95=[];this.pl94[0]=["#000000","#ffff00","#b1b100",
"#5b5b00"];this.pl94[1]=["#000000","#c0c0c0","#808080","#5f5f5f"];this.pl94[2]=["#000000","#303060","#202040","#101020"];this.pl94[3]=["#000000","#E0E0E0","#A0A0A0","#808080"];this.pl94[4]=["#808080","#ffffff","#E0E0E0","#C0C0C0"];this.pl94[5]=["#000000","#A00000","#700000","#400000"];this.pl94[6]=["#808080","rgba(255, 255, 255, 0.09)","rgba(224, 224, 224, 0.09)","rgba(192, 192, 192, 0.09)"];this.pl94[7]=["#333333","#FF8C00","#B16100","#5B3200"];this.pl95[0]=["#000000","#b1b100"];this.pl95[1]=["#000000",
"#808080"];this.pl95[2]=["#000000","#202040"];this.pl95[3]=["#000000","#A0A0A0"];this.pl95[4]=["#000000","#E0E0E0"];this.pl95[5]=["#000000","#700000"];this.pl95[6]=["#000000","#80c0ff"];this.pl95[7]=["#000000","#B16100"];this.pl96=new pl71(32,32,this);this.pl97=Array(4);for(d=0;4>d;d++)this.pl97[d]=new pl6c(d);this.pl98=document.getElementById("pcon");this.pl98.style.display="none";this.pl99=!1;this.pl9a=!0;this.pl9b=!1}
pl6d.prototype.pl9=function(){var a=this.pl90;this.pl90=4>this.pl90?2*this.pl90:1;this.log("zoom="+this.pl90);if(1<this.pl90){this.pl9a?(this.pl9c=document.createElement("canvas"),this.pl9c.width=this.pl8a,this.pl9c.height=this.pl8b,this.pl8c=this.pl8a*this.pl90,this.pl8d=this.pl8b*this.pl90):(this.pl9c=document.createElement("canvas"),this.pl8c=this.pl9c.width=this.pl8a*this.pl90,this.pl8d=this.pl9c.height=this.pl8b*this.pl90);this.pl9d=this.pl9c.getContext("2d");var b=(this.pl8e+this.pl8a/2)/a;
a=(this.pl8f+this.pl8b/2)/a;this.pl9e=this.pl8e=b*this.pl90-this.pl8a/2;this.pl9f=this.pl8f=a*this.pl90-this.pl8b/2;console.log("zoomOffX="+this.pl8e+", this.pl8f="+this.pl8f+", cx="+b+", cy="+a)}else this.pl9d=this.pl9c=null,this.pl8c=this.pl8a,this.pl8d=this.pl8b,this.pl8f=this.pl9f=this.pl8e=this.pl9e=0;0==this.pl91?(this.pl11(),this.plc()):(this.pl10(),this.plb())};
pl6d.prototype.pla=function(a,b,d){a&&(this.pla0=a,this.pl23(0));this.pla1=b;0==this.pl91?this.plc():this.plb();this.pl96.pl82!=this.pla0.length&&(this.pl96.pl82=this.pla0.length);this.pl96.pl3(this.pla1+1);this.pl1f()};
pl6d.prototype.plb=function(){var a,b,d=1==this.pla0.length;var f=this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1;new pl70;if(1<this.pl90){var e=this.pl9d;if(this.pl9a){var g=this.pla5-this.pl8e;var h=this.pla6-this.pl8f;e.clearRect(0,0,this.pl8a,this.pl8b)}else e.clearRect(0,0,this.pl8c,this.pl8d)}else e=this.pl88,g=this.pla5,h=this.pla6;this.pl88.clearRect(0,0,this.pl8a,this.pl8b);var k=this.pla0[0].length;var m=this.pla0[0][0].length;for(a=0;a<k;a++)for(b=0;b<m;b++)e.drawImage(this.pla7,
g+a*this.pla4,h+b*this.pla3);if(0<f){var n=this.pla0[f-1];for(a=0;a<k;a++)for(b=0;b<m;b++)0<n[a][b]&&e.drawImage(this.pla8,g+a*this.pla4,h+b*this.pla3)}n=this.pla0[f];for(a=0;a<k;a++)for(b=0;b<m;b++)f=n[a][b],0>=f||(e.drawImage(this.pla9[f],g+a*this.pla4,h+b*this.pla3),d&&this.pla2++);e.beginPath();e.lineWidth=1;e.strokeStyle="#a00000";a=1+g+Math.floor(k/2)*this.pla4-1;e.moveTo(a+.5,h);e.lineTo(a+.5,1+h+m*this.pla3);k%2&&(a+=this.pla4,e.moveTo(a+.5,h),e.lineTo(a+.5,1+h+m*this.pla3));e.stroke();e.beginPath();
e.lineWidth=1;e.strokeStyle="#008000";b=1+h+Math.floor(m/2)*this.pla3-1;e.moveTo(g,b+.5);e.lineTo(1+g+k*this.pla4,b+.5);m%2&&(b+=this.pla3,e.moveTo(g,b+.5),e.lineTo(1+g+k*this.pla4,b+.5));e.stroke();plcb.plc3.plb6&&this.pl29(e);plcb.plc3.innerEdgeSizes&&this.pl2a(e);1<this.pl90&&this.pl9a&&this.pl88.drawImage(this.pl9c,0,0,this.pl8a,this.pl8b,0,0,this.pl8a,this.pl8b)};
pl6d.prototype.plc=function(){1<this.pl90?(this.pl88.clearRect(0,0,this.pl8a,this.pl8b),this.pl9a?(this.ple(),this.pl88.drawImage(this.pl9c,0,0,this.pl8a,this.pl8b,0,0,this.pl8a,this.pl8b)):(this.plf(),this.pl88.drawImage(this.pl9c,this.pl8e,this.pl8f,this.pl8a,this.pl8b,0,0,this.pl8a,this.pl8b))):this.pld()};
pl6d.prototype.pld=function(){var a,b,d=this.pla1>=this.pla0.length-1,f=this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1,e;d&&(this.pla2=0);this.pl88.clearRect(0,0,this.pl8a,this.pl8b);for(e=0;e<=f;e++){var g=this.pla1<=this.pla0.length-1&&e==this.pla1;var h=this.pla0[e];for(a=0;a<h.length;a++)for(b=0;b<h[a].length;b++){var k=h[a][b];0<k&&(d&&this.pla2++,g&&(k=0),this.pl88.drawImage(this.pl93[k],this.pla5+(a-b)*this.plaa,this.pla6+(a+b)*this.plab/2-e*this.plab))}}document.getElementById("pbc").innerHTML=
this.pla2};pl6d.prototype.ple=function(){var a,b,d=this.pla1>=this.pla0.length-1,f=this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1,e,g=0+this.pla5-this.pl9e,h=0+this.pla6-this.pl9f;this.pl9d.clearRect(0,0,this.pl8a,this.pl8b);for(e=0;e<=f;e++){var k=this.pla1<=this.pla0.length-1&&e==this.pla1;var m=this.pla0[e];for(a=0;a<m.length;a++)for(b=0;b<m[a].length;b++){var n=m[a][b];0<n&&(d&&this.pla2++,k&&(n=0),this.pl9d.drawImage(this.pl93[n],g+(a-b)*this.plaa,h+(a+b)*this.plab/2-e*this.plab))}}};
pl6d.prototype.plf=function(){var a,b,d=this.pla1>=this.pla0.length-1,f=this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1,e;this.pl9d.clearRect(0,0,this.pl8c,this.pl8d);for(e=0;e<=f;e++){var g=this.pla1<=this.pla0.length-1&&e==this.pla1;var h=this.pla0[e];for(a=0;a<h.length;a++)for(b=0;b<h[a].length;b++){var k=h[a][b];0<k&&(d&&this.pla2++,g&&(k=0),this.pl9d.drawImage(this.pl93[k],this.pla5+(a-b)*this.plaa,this.pla6+(a+b)*this.plab/2-e*this.plab))}}};
pl6d.prototype.pl10=function(){var a=this.pla0[0].length,b=this.pla0[0][0].length;this.pl8a/a<this.pl8b/b?this.pla3=this.pla4=Math.floor((this.pl8a-40)/a)*this.pl90:this.pla4=this.pla3=Math.floor((this.pl8b-40)/b)*this.pl90;this.pla5=Math.floor((this.pl8a*this.pl90-a*this.pla4)/2);this.pla6=Math.floor((this.pl8b*this.pl90-b*this.pla3)/2);this.pla7=this.pl12("#e0e0e0","#ffffff");this.pla8=this.pl12("#a0a0a0","#e8e8e8");this.pla9=[];for(a=0;a<this.pl95.length;a++)this.pla9[a]=this.pl12(this.pl95[a][0],
this.pl95[a][1])};
pl6d.prototype.pl11=function(){var a,b,d,f=-1E4,e=-1E4,g=1E4,h=1E4;var k=this.pla0.length;var m=this.pla0[0].length;var n=this.pla0[0][0].length;for(a=0;a<k;a++)for(b=0;b<m;b++)for(d=0;d<n;d++)if(0<this.pla0[a][b][d]){var l=64*(b-d)/2;l<g&&(g=l);l>f&&(f=l);l=36*(b+d)/2-36*a;l<h&&(h=l);l>e&&(e=l)}(f-g)/this.pl8a>(e-h)/this.pl8b?(this.pla4=Math.floor((this.pl8a-40)/((f-g)/64+1)*this.pl90),this.pla3=Math.round(72*this.pla4/64)):(this.pla3=Math.floor((this.pl8b-40)/((e-h)/72+1)*this.pl90),this.pla4=Math.round(64*
this.pla3/72));this.pla5=Math.floor((this.pl8c-(f+g)/64*this.pla4-this.pla4)/2);this.pla6=Math.floor((this.pl8d-(e+h)/72*this.pla3-this.pla3)/2);this.plaa=this.pla4/2;this.plab=this.pla3/2;for(a=0;a<this.pl94.length;a++)this.pl93[a]=this.pl13(a)};pl6d.prototype.pl12=function(a,b){var d=document.createElement("canvas");d.width=this.pla4+2;d.height=this.pla3+2;var f=d.getContext("2d");f.strokeStyle=a;f.fillStyle=b;f.lineWidth=1;f.beginPath();f.rect(.5,.5,this.pla4,this.pla3);f.fill();f.stroke();return d};
pl6d.prototype.pl13=function(a){var b=Array(7);b[0]=[.5*this.pla4,0];b[1]=[this.pla4,.25*this.pla3];b[2]=[this.pla4,.75*this.pla3];b[3]=[.5*this.pla4,this.pla3];b[4]=[0,.75*this.pla3];b[5]=[0,.25*this.pla3];b[6]=[.5*this.pla4,.5*this.pla3];var d=document.createElement("canvas");d.width=this.pla4+1;d.height=this.pla3+1;var f=d.getContext("2d");f.lineWidth=.75;f.strokeStyle=this.pl94[a][0];f.beginPath();f.moveTo(.5+b[0][0],.5+b[0][1]);f.lineTo(.5+b[1][0],.5+b[1][1]);f.lineTo(.5+b[6][0],.5+b[6][1]);
f.lineTo(.5+b[5][0],.5+b[5][1]);f.closePath();f.fillStyle=this.pl94[a][1];f.fill();f.stroke();f.beginPath();f.moveTo(.5+b[5][0],.5+b[5][1]);f.lineTo(.5+b[6][0],.5+b[6][1]);f.lineTo(.5+b[3][0],.5+b[3][1]);f.lineTo(.5+b[4][0],.5+b[4][1]);f.closePath();f.fillStyle=this.pl94[a][2];f.fill();f.stroke();f.beginPath();f.moveTo(.5+b[1][0],.5+b[1][1]);f.lineTo(.5+b[2][0],.5+b[2][1]);f.lineTo(.5+b[3][0],.5+b[3][1]);f.lineTo(.5+b[6][0],.5+b[6][1]);f.closePath();f.fillStyle=this.pl94[a][3];f.fill();f.stroke();
return d};pl6d.prototype.pl14=function(a,b,d,f){this.pl88.drawImage(this.pl93,this.pla5+(b-d)*this.plaa,this.pla6+(b+d)*this.plab/2-a*this.plab)};pl6d.prototype.pl15=function(a){if(this.pl96.pl4(a.clientX,a.clientY))this.pl92=1,this.pl96.pl5(a.clientX,a.clientY);else{var b;for(b=0;b<this.pl97.length;b++)if(this.pl97[b].pl4(a.clientX,a.clientY)){this.pl92=3;this.plac=b;this.pl97[b].pl5(a.clientX,a.clientY);return}1<this.pl90&&(this.pl92=2,this.pl1b(a.clientX,a.clientY))}};
pl6d.prototype.pl16=function(a){this.log("touchStart"+a.touches);if(this.pl96.pl4(a.touches[0].pageX,a.touches[0].pageY))this.log("dragMode = 1"),this.pl92=1,this.pl96.pl5(a.touches[0].pageX,a.touches[0].pageY);else{var b;for(b=0;b<this.pl97.length;b++)if(this.pl97[b].pl4(a.touches[0].pageX,a.touches[0].pageY)){this.pl92=3;this.plac=b;this.pl97[b].pl5(a.touches[0].pageX,a.touches[0].pageY);return}1<this.pl90&&(this.pl92=2,this.pl1b(a.touches[0].pageX,a.touches[0].pageY))}};
pl6d.prototype.pl17=function(a){1==this.pl92?this.pl96.pl6(a.touches[0].pageX,a.touches[0].pageY):2==this.pl92?this.pl1c(a.touches[0].pageX,a.touches[0].pageY):3==this.pl92&&this.pl97[this.plac].pl6(a.touches[0].pageX,a.touches[0].pageY)};pl6d.prototype.pl18=function(a){1==this.pl92?this.pl96.pl6(a.clientX,a.clientY):2==this.pl92?this.pl1c(a.clientX,a.clientY):3==this.pl92&&this.pl97[this.plac].pl6(a.clientX,a.clientY)};
pl6d.prototype.pl19=function(a){1==this.pl92?this.pl96.pl7():2==this.pl92?this.pl1d():3==this.pl92&&this.pl97[this.plac].pl7();this.pl92=0};pl6d.prototype.pl1a=function(a){1==this.pl92?this.pl96.pl7():2==this.pl92?this.pl1d():3==this.pl92&&this.pl97[this.plac].pl7();this.pl92=0};pl6d.prototype.pl1b=function(a,b){this.plad=a;this.plae=b};
pl6d.prototype.pl1c=function(a,b){var d=this.pl8e+this.plad-a,f=this.pl8f+this.plae-b;0>d&&(a+=d,d=0);0>f&&(b+=f,f=0);d>this.pl8c-this.pl8a&&(a=a+d-(this.pl8c-this.pl8a),d=this.pl8c-this.pl8a);f>this.pl8d-this.pl8b&&(b=b+f-(this.pl8d-this.pl8b),f=this.pl8d-this.pl8b);this.pl9e=d;this.pl9f=f;this.pl88.clearRect(0,0,this.pl8a,this.pl8b);this.pl9a?this.pl88.drawImage(this.pl9c,0,0,this.pl8a,this.pl8b,a-this.plad,b-this.plae,this.pl8a,this.pl8b):this.pl88.drawImage(this.pl9c,d,f,this.pl8a,this.pl8b,0,
0,this.pl8a,this.pl8b)};pl6d.prototype.pl1d=function(){this.pl8e=this.pl9e;this.pl8f=this.pl9f;console.log("panStop() - "+this.pl8e+", "+this.pl8f);this.pl9a&&(this.pl88.clearRect(0,0,this.pl8a,this.pl8b),0==this.pl91?this.ple():this.plb(),this.pl88.drawImage(this.pl9c,0,0,this.pl8a,this.pl8b,0,0,this.pl8a,this.pl8b))};pl6d.prototype.log=function(a){this.pl98.innerHTML+=a+"<br/>";this.pl98.scrollTop=this.pl98.scrollHeight};
pl6d.prototype.pl1e=function(a,b){a.preventDefault();var d=plcb.plb5;if(d.plaf)b();else{s=a.target.className;if("bn"!=s.substring(s.length-2)){var f=a.target.getElementsByTagName("div");if(0==f.length){setTimeout(b,10);return}f=f[0]}else f=a.target;f.style.background="#ffffff";f.style.color="#000000";d.plaf=f;setTimeout(b,10)}};pl6d.prototype.pl1f=function(){this.plaf&&(this.plaf.style.background="#000000",this.plaf.style.color="#ffffff",this.plaf=null)};
pl6d.prototype.pl20=function(){var a=document.getElementById("ppro");a.style.left=(this.pl8a-a.offsetWidth)/2+"px";a.style.top=this.pl8b/2-32+"px";a.style.visibility="visible"};pl6d.prototype.pl21=function(a){document.getElementById("ppro").innerHTML=a};pl6d.prototype.pl22=function(){document.getElementById("ppro").style.visibility="hidden"};
pl6d.prototype.pl23=function(a){document.getElementById("seglbn").style.background=0==a?"#003000":"#808080";document.getElementById("seglbn").style.color=0==a?"#ffffff":"#000000";document.getElementById("segrbn").style.background=0==a?"#808080":"#003000";document.getElementById("segrbn").style.color=0==a?"#000000":"#ffffff";this.pl91=a;0==a?this.pl11():this.pl10()};pl6d.prototype.pl24=function(){plcb.plc3.pl24(parseInt(plcb.plb5.plaf.id.substring(1)))};pl6d.prototype.pl25=function(){plcb.plc3.pl25(parseInt(plcb.plb5.plaf.id.substring(1)))};
pl6d.prototype.pl26=function(){for(var a=0,b="";;){el=document.getElementById("tl"+a);if(!el)break;b+=el.innerHTML+"<br/>";a++}a=40*++a;document.getElementById("pvl").style.height=a+"px";document.getElementById("pvlp").innerHTML=b};pl6d.prototype.pl27=function(){this.pl9b=!1;this.pl28();document.getElementById("pctl").style.visibility="visible"};
pl6d.prototype.pl28=function(){console.log("hideValues");for(i=0;i<this.pl97.length;i++)document.getElementById("pv"+i+"bn0").style.visibility="hidden",document.getElementById("pv"+i+"bn1").style.visibility="hidden",document.getElementById("pvrl"+i).style.visibility="hidden",document.getElementById("pvkn"+i).style.visibility="hidden";document.getElementById("pvl").style.visibility="hidden"};
pl6d.prototype.pl29=function(a){var b=this.pla0[this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1],d=Math.floor((b.length+1)/2-1),f=Math.floor((b[0].length+1)/2-1),e,g,h=[],k=0;if(1<this.pl90&&this.pl9a){var m=this.pla5-this.pl8e;var n=this.pla6-this.pl8f}else m=this.pla5,n=this.pla6;if(14<this.pla3){var l=Math.floor((this.pla3-14)/2);a.font="bold 14px Helvetica"}else l=0,a.font="bold "+this.pla3+"px Helvetica";for(e=0;e<=d;e++){for(g=0;0>=b[e][g]&&g<=f;)g++;if(!(g>f)){var r=1;var q=g+1;if(0==
e)for(;0<b[e][q]&&q<=f;)q++,r++;else for(;0<b[e][q]&&0>=b[e-1][q]&&q<=f;)q++,r++;q=!1;1==r&&0<g&&0<b[e+1][g-1]&&(0==e||0>=b[e-1][g])&&(q=!0);if(q||1<r)q?h[k++]=new pl6e(r,m+e*this.pla4,n+l+g*this.pla3-this.pla3,"top","right"):h[k++]=new pl6e(r,m+e*this.pla4-1,n+l+g*this.pla3+Math.floor(r*this.pla3/2)-this.pla3/2,"top","right")}}for(g=0;g<=f;g++){for(e=0;0>=b[e][g]&&e<=d;)e++;if(!(e>d)){r=1;l=e+1;if(0==g)for(;0<b[l][g]&&l<=d;)l++,r++;else for(;0<b[l][g]&&0>=b[l][g-1]&&l<=d;)l++,r++;1<r&&(h[k++]=new pl6e(r,
m+e*this.pla4+Math.floor(r*this.pla4/2),n+g*this.pla3,"bottom","center"))}}this.pl2b(a,h)};
pl6d.prototype.pl2a=function(a){var b=this.pla0[this.pla1>this.pla0.length-1?this.pla0.length-1:this.pla1],d=Math.floor((b.length+1)/2-1),f=Math.floor((b[0].length+1)/2-1),e,g,h=[],k=0;if(1<this.pl90&&this.pl9a){var m=this.pla5-this.pl8e;var n=this.pla6-this.pl8f}else m=this.pla5,n=this.pla6;if(14<this.pla3){var l=Math.floor((this.pla3-14)/2);a.font="bold 14px Helvetica"}else l=0,a.font="bold "+this.pla3+"px Helvetica";a.fillStyle="#000";a.textBaseline="top";a.textAlign="left";var r=Math.floor(this.pla3/
2);for(e=d;0<=e;e--){for(g=f;0<=g&&0>=b[e][g];)g--;if(!(0>g)){var q=1;var u=g-1;if(0==e)for(;0<=u&&0<b[e][u];)u--,q++;else for(;0<=u&&0<b[e][u]&&0>=b[e+1][u];)u--,q++;u=!1;1==q&&g<f&&0<b[e+1][g-1]&&0>=b[e+1][g]&&(0==e||0<b[e-1][g+1])&&(u=!0);if(u||1<q)u?h[k++]=new pl6e(q,m+1+(e+1)*this.pla4,n+(g+1)*this.pla3,"top","bottom"):h[k++]=new pl6e(q,m+1+(e+1)*this.pla4,n+l+(g+1)*this.pla3-q*this.pla3/2-r,"top","bottom");if(g==f)break}}for(g=f-1;0<=g;g--){for(e=d;0<=e&&0>=b[e][g];)e--;if(!(0>e)){q=1;for(f=
e-1;0<=f&&0<b[f][g]&&0>=b[f][g+1];)f--,q++;1<q&&(h[k++]=new pl6e(q,m+1+(e+1)*this.pla3-q*this.pla4/2-r/2,n+(g+1)*this.pla4,"top","bottom"));if(e==d)break}}this.pl2b(a,h)};
pl6d.prototype.pl2b=function(a,b){var d=65535,f=0,e=0,g=["#c00000","#008000","#0000c0"];for(c=0;c<b.length;c++){yp=-1;for(idx=0;idx<b.length;idx++)b[idx].plb2<d&&b[idx].plb2>yp&&(yp=b[idx].plb2,yFound=idx);d=yp;a.fillStyle=g[e];a.textBaseline=b[yFound].plb3;a.textAlign=b[yFound].plb4;a.fillText(b[yFound].plb0,b[yFound].plb1,b[yFound].plb2);5<=++f&&(f=0,++e>=g.length&&(e=0))}};
pl6d.prototype.pl2c=function(){var a=plcb.plb5,b=document.getElementById("pcan"),d=window.innerWidth-120;b.width=d;b.height=window.innerHeight;a.pl9c&&(a.pl9c.width=b.width,a.pl9c.height=b.height);a.pl8a=d;a.pl8b=window.innerHeight;a.pl89.style.width=d+"px";a.pl89.style.height=window.innerHeight+"px";a.pl8c=a.pl8a*a.pl90;a.pl8d=a.pl8b*a.pl90;0==a.pl91?(a.pl11(),a.plc()):(a.pl10(),a.plb());a.pl96.pl3d();document.getElementById("pvl");"visible"==pvl.style.visibility&&plcb.plc3.pl3a()};
function pl6e(a,b,d,f,e){this.plb0=a;this.plb1=b;this.plb2=d;this.plb3=f;this.plb4=e}function pl6f(a){this.plb5=a;this.plb6=!0;this.plb7=11;this.plb8=6;this.plb9=2;this.plba=4;a=document.getElementById("pctl");/*var b=new XMLHttpRequest;b.open("GET","./plotzhtml5/pclt.php?o=5",!1);b.send(null);200===b.status&&(a.style.width="204px",a.style.height="160px",a.innerHTML=b.responseText)*/}
pl6f.prototype.pl2d=function(){var a=this.plb5.touch?"touchstart":"click";document.getElementById("b0").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl33);return!1},!1);document.getElementById("b1").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl32);return!1},!1);document.getElementById("b2").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl35);return!1},!1);document.getElementById("b3").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl34);return!1},
!1);document.getElementById("b4").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl37);return!1},!1);document.getElementById("b5").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl36);return!1},!1);document.getElementById("b6").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl39);return!1},!1);document.getElementById("b7").addEventListener(a,function(a){plcb.plb5.pl1e(a,plcb.plc3.pl38);return!1},!1);document.getElementById("ptbmv").innerHTML="Wizard"};
pl6f.prototype.pl2e=function(){this.plb5.pl99=!0;this.pl31();this.pl2f()};pl6f.prototype.pl2f=function(){this.pl30()};
pl6f.prototype.pl30=function(){for(var a,b,d,f,e,g,h,k,m,n,l,r,q;;)if(a=2+2*Math.floor((this.plb7+1)/2),b=Math.floor((128-a)/4),0>=b)this.plb7--;else break;this.plb8>b&&(this.plb8=b,this.pl31());h=this.plb7;b=4*this.plb8-1;n=e=0;for(m=[];0<=b;)m[n++]=h,b-=4,++e>=this.plb9&&(h+=2,e=0);this.plba?(l=Math.floor(2*this.plb7/3),r=Math.floor(this.plb8/2),this.plb7%2!=l%2&&l++,console.log("objectSize "+this.plb7+" = towerDiameter "+l),h=m[m.length-r-1]+l+4,console.log("limit="+h),m[m.length-1]>h&&(h=m[m.length-
1],console.log("limit adjusted to "+h)),h%2!=this.plb7%2&&h++):(f=m[m.length-1],h=f>this.plb7+2?f:this.plb7+2);k=new pl73(a+4*this.plb8,h,h);k.plc6=2;b=k.plc4-a;d=this.plb7+2;for(g=Math.floor((k.plc5-d)/2);b<k.plc4-1;)h=k.plc5-g-1,k.pl57(g,g,h,h,0,b),k.pl58(b,0),d-=2,b++,k.pl57(g,g,h,h,0,b),k.pl58(b,0),d-=2,g++,b++;for(b=k.plc4-1-a;b<k.plc4-2;)k.pl5a(b,b+1),b+=2;k.plc6=1;b=k.plc4-a-1;e=0;g=Math.floor((k.plc5-this.plb7)/2);n=0;for(m=[];0<=b;){h=k.plc5-g-1;m[n]=h-g+1;n++;for(f=0;4>f;f++)k.pl57(g,g,
h,h,0,b),0==f?k.pl58(b,1):k.pl58(b,0),d-=2,b--;++e>=this.plb9&&(g--,e=0)}k.plc6=2;b=k.plc4-a;k.pl5a(b,b-1);if(this.plba){a=2+2*Math.floor((l+1)/2);q=Math.floor((l-1)/2);h=l+2;e=new pl73(a+this.plba+q,h,h);e.plc6=2;b=e.plc4-a;d=l+2;for(g=Math.floor((h-d)/2);b<e.plc4-1;)e.pl57(g,g,h-g-1,h-g-1,0,b),d-=2,b++,e.pl57(g,g,h-g-1,h-g-1,0,b),d-=2,g++,b++;for(b=e.plc4-1-a;b<e.plc4-2;)e.pl5a(b,b+1),b+=2;e.plc6=3;b=e.plc4-a-1;g=Math.floor((h-l)/2);n=this.plba;for(f=0;f<n+q;f++)f>=n&&g++,e.pl57(g,g,h-g-1,h-g-1,
0,b),0==f%4&&e.pl58(b,3),b--;e.plc6=2;b=e.plc4-a;e.pl5a(b,b-1);b=4*r-q;0>b&&(b=0);g=Math.floor((k.plc5+m[m.length-r-1]-e.plc5)/2);a=Math.floor((k.plc5-e.plc5)/2);k.pl68(k.pla0,e.pla0,b,g+1,a)}this.plb5.pla(k.pla0,k.plc4,0);this.plb5.pl22();this.plb5.pl99=!1};pl6f.prototype.pl31=function(){document.getElementById("sz0").innerHTML=this.plb7;document.getElementById("sz1").innerHTML=this.plb8;document.getElementById("sz2").innerHTML=this.plb9;document.getElementById("sz3").innerHTML=this.plba};
pl6f.prototype.pl32=function(){var a=plcb.plc3;128>a.plb7?(a.plb7++,a.pl2e()):a.plb5.pl1f()};pl6f.prototype.pl33=function(){var a=plcb.plc3;8<a.plb7?(a.plb7--,a.pl2e()):a.plb5.pl1f()};pl6f.prototype.pl34=function(){var a=plcb.plc3;a.plb8++;a.pl2e()};pl6f.prototype.pl35=function(){var a=plcb.plc3;1<a.plb8?(a.plb8--,a.pl2e()):a.plb5.pl1f()};pl6f.prototype.pl36=function(){var a=plcb.plc3;a.plb9++;a.pl2e()};pl6f.prototype.pl37=function(){var a=plcb.plc3;1<a.plb9?(a.plb9--,a.pl2e()):a.plb5.pl1f()};
pl6f.prototype.pl38=function(){var a=plcb.plc3;a.plba++;a.pl2e()};pl6f.prototype.pl39=function(){var a=plcb.plc3;0<a.plba?(a.plba--,a.pl2e()):a.plb5.pl1f()};pl6f.prototype.pl3a=function(){};pl6f.prototype.pl3b=function(a,b){0==a&&(this.plbb=b);this.pl2e()};pl6f.prototype.pl24=function(a){0==a&&(this.pl33(),this.plb5.pl97[0].pl3(this.plbb));this.pl2e()};pl6f.prototype.pl25=function(a){0==a&&(this.pl32(),this.plb5.pl97[0].pl3(this.plbb));this.pl2e()};function pl70(){this.plbc=(new Date).getTime()}
pl70.prototype.pl3c=function(){return(new Date).getTime()-this.plbc};function pl71(a,b,d){this.pl82=b;this.plb5=d;this.pl3d();this.pl83=a;this.pl8()}
pl71.prototype.pl3d=function(){var a=this.plb5.pl8b-160;this.plbd=a-32;this.pl80=this.plb5.pl8a-32-16;this.pl81=this.plbe=Math.floor((this.plb5.pl8b-a)/2);this.plbf=this.plbe+a-1-32;var b=document.getElementById("pslrl");b.style.left=this.pl80+12+"px";b.style.top=this.pl81+12+"px";b.style.height=a-28+"px";this.pl7a=document.getElementById("pslkn");this.pl7a.style.top=this.pl81+"px";this.pl7a.style.left=this.pl80+"px";this.pl7b=document.getElementById("pslin");this.pl7b.style.top=this.pl81-4+"px";
this.pl7b.style.left=this.pl80-70+"px";b=document.getElementById("pslbn0");b.style.left=this.pl80-4+"px";b.style.top=this.pl81-40+"px";b=document.getElementById("pslbn1");b.style.left=this.pl80-4+"px";b.style.top=this.pl81+a+"px";this.pl3(this.pl83)};pl71.prototype.pl4=function(a,b){return!this.plb5.pl99&&a>=this.pl80&&a<=this.pl80+32&&b>=this.pl81&&b<=this.pl81+32};pl71.prototype.pl5=function(a,b){this.plc0=b;this.plc1=b-this.pl81;this.pl7b.style.visibility="visible";this.pl8()};
pl71.prototype.pl6=function(a,b){var d=this.plc0+b-this.plc0-this.plc1;d<this.plbe?d=this.plbe:d>this.plbf&&(d=this.plbf);this.pl7a.style.top=d+"px";this.pl7b.style.top=d-4+"px";this.pl81=d;this.pl8()};pl71.prototype.pl7=function(){this.pl7b.style.visibility="hidden";this.plb5.pla(null,this.pl83-1,-1)};pl71.prototype.pl8=function(){this.pl83=this.pl82-Math.floor(this.pl82*(this.pl81-this.plbe)/this.plbd);this.pl7b.innerHTML=this.pl7a.innerHTML=this.pl83};
pl71.prototype.pl3=function(a){a>this.pl82?a=this.pl82:1>a&&(a=1);newY=this.plbe+this.plbd-1-Math.floor((a-1)*(this.plbd-1)/(this.pl82-1));this.pl7a.style.top=newY+"px";this.pl7b.style.top=newY-4+"px";this.pl81=newY;this.pl83=a;this.pl7b.innerHTML=this.pl7a.innerHTML=this.pl83};function pl72(){this.plc2=0}
pl72.prototype.pl3e=function(){document.getElementById("ptb").innerHTML='<div class="seglt" id="ptbiso"><div id="seglbn">3D</div></div><div class="segrt" id="ptbflt"><div id="segrbn">2D</div></div><div class="ptbt48" id="ptbz"><div class="ptbbn" id="ptbzv">zoom</div></div><div class="ptbt96" id="ptbm"><div class="ptbbn" id="ptbmv"></div></div>';this.plb5=new pl6d(0,0);this.plc3=new pl6f(this.plb5);this.plc3.pl2e();this.plc3.pl2d();this.pl2d();this.plb5.pl26();this.pl42(!0);this.plc3.pl3a()};
pl72.prototype.pl42=function(a){var b=a?"visible":"hidden";document.getElementById("pctl").style.visibility=b;document.getElementById("ptb").style.visibility=b;document.getElementById("pslrl").style.visibility=b;document.getElementById("pslbn0").style.visibility=b;document.getElementById("pslbn1").style.visibility=b;document.getElementById("pslkn").style.visibility=b;document.getElementById("pcon").style.visibility=b;document.getElementById("pbc").style.visibility=b;a||this.plb5.pl9b&&this.plb5.pl28()};
pl72.prototype.pl2d=function(){document.getElementById("pev").addEventListener("click",this.pl47,!1);document.getElementById("pev").addEventListener("mousedown",this.pl49,!1);document.getElementById("pev").addEventListener("mousemove",this.pl4a,!1);document.getElementById("pev").addEventListener("mouseout",this.pl4b,!1);document.getElementById("pev").addEventListener("mouseup",this.pl4b,!1);document.getElementById("pev").addEventListener("touchstart",this.pl48,!1);document.getElementById("pev").addEventListener("touchmove",
this.pl4c,!1);document.getElementById("pev").addEventListener("touchend",this.pl4d,!1);document.getElementById("pslbn0").addEventListener("click",function(a){plcb.plb5.pl1e(a,plcb.pl45)},!1);document.getElementById("pslbn1").addEventListener("click",function(a){plcb.plb5.pl1e(a,plcb.pl46)},!1);document.getElementById("ptbz").addEventListener("click",function(a){plcb.plb5.pl1e(a,plcb.pl9)},!1);document.getElementById("ptbiso").addEventListener("click",function(a){plcb.pl4e()},!1);document.getElementById("ptbflt").addEventListener("click",
function(a){plcb.pl4f()},!1);document.getElementById("ptbm").addEventListener("click",function(a){a.preventDefault();plcb.pl44()},!1);document.getElementById("pvlhd").addEventListener("click",function(a){plcb.plb5.pl27()},!1);var a;for(a=0;a<this.plb5.pl97.length;a++)document.getElementById("pv"+a+"bn0").addEventListener("click",function(a){plcb.plb5.pl1e(a,plcb.plb5.pl24)},!1),document.getElementById("pv"+a+"bn1").addEventListener("click",function(a){plcb.plb5.pl1e(a,plcb.plb5.pl25)},!1);window.onresize=
function(a){pto&&clearTimeout(pto);pto=setTimeout(plcb.plb5.pl2c,200)};"onorientationchange"in window&&(window.onorientationchange=function(a){pto=setTimeout(plcb.plb5.pl2c,10)})};pl72.prototype.pl43=function(){alert("objectUpdate")};pl72.prototype.pl44=function(){window.top.location.href="./plotz-menu.php"};pl72.prototype.pl9=function(){plcb.plb5.pl9();document.getElementById("ptbzv").innerHTML=1==plcb.plb5.pl90?"100%":100*plcb.plb5.pl90+"%";plcb.plb5.pl1f()};
pl72.prototype.pl45=function(a){plcb.plb5.pl99||(a=plcb.plb5.pla1,a<plcb.plb5.pla0.length?(a++,plcb.plb5.pla(null,a,-1)):plcb.plb5.pl1f())};pl72.prototype.pl46=function(a){plcb.plb5.pl99||(a=plcb.plb5.pla1,1==plcb.plb5.pl91&&plcb.plb5.pla1>=plcb.plb5.pla0.length&&a--,a?(a--,plcb.plb5.pla(null,a,-1)):plcb.plb5.pl1f())};pl72.prototype.pl47=function(a){};pl72.prototype.pl48=function(a){a.preventDefault();plcb.plb5.pl16(a)};pl72.prototype.pl49=function(a){plcb.plb5.pl15(a)};pl72.prototype.pl4a=function(a){plcb.plb5.pl18(a)};
pl72.prototype.pl4b=function(a){plcb.plb5.pl1a(a)};pl72.prototype.pl4c=function(a){plcb.plb5.pl17(a)};pl72.prototype.pl4d=function(a){plcb.plb5.pl19(a)};pl72.prototype.pl4e=function(){plcb.pl50(0)};pl72.prototype.pl4f=function(){plcb.pl50(1)};pl72.prototype.pl50=function(a){this.plb5.pl23(a);this.plb5.pla(null,this.plb5.pla1,-1)};var plcb;function plcc(){plcb=new pl72;plcb.pl3e()}window.onload=setTimeout(plcc,100);function pl73(a,b,d){this.plc4=a;this.plc5=b;this.plc6=1;this.pl51(a,b,d)}
pl73.prototype.pl51=function(a,b,d){this.pla0=Array(a);var f;for(f=0;f<a;f++)this.pla0[f]=this.pl53(b,d)};pl73.prototype.pl52=function(a,b){var d;this.plc7=Array(a);for(d=0;d<a;d++)this.plc7[d]=new Int8Array(b)};pl73.prototype.pl53=function(a,b){var d=Array(a),f,e;for(f=0;f<a;f++)for(d[f]=new Int8Array(b),e=0;e<b;e++)d[f][e]=-1;return d};
pl73.prototype.pl54=function(a,b,d,f,e){var g=Math.abs(d-a),h=Math.abs(f-b),k=h&1,m=4*(1-g)*h*h,n=4*(k+1)*g*g,l=m+n+k*g*g,r=this.plc6;a>d&&(a=d,d+=g);b>f&&(b=f);b+=Math.floor((h+1)/2);f=b-k;g*=8*g;k=8*h*h;do{e[d][b]=r;e[a][b]=r;e[a][f]=r;e[d][f]=r;var q=2*l;q>=m&&(a++,d--,l+=m+=k);q<=n&&(b++,f--,l+=n+=g)}while(a<=d);for(;b-f<h;)e[a-1][++b]=r,e[a-1][--f]=r};
pl73.prototype.pl55=function(a,b){switch(this.plc8){case 0:this.pla0[this.plc9][a][b]=this.plc6;break;case 1:this.pla0[b][this.plc9][a]=this.plc6;break;case 2:this.pla0[b][a][this.plc9]=this.plc6}};pl73.prototype.pl56=function(a,b){switch(this.plc8){case 0:return this.pla0[this.plc9][a][b];case 1:return this.pla0[b][this.plc9][a];case 2:return this.pla0[b][a][this.plc9]}return 0};
pl73.prototype.pl57=function(a,b,d,f,e,g){var h=Math.abs(d-a),k=Math.abs(f-b),m=k&1,n=4*(1-h)*k*k,l=4*(m+1)*h*h,r=n+l+m*h*h;this.plc8=e;this.plc9=g;a>d&&(a=d,d+=h);b>f&&(b=f);b+=Math.floor((k+1)/2);f=b-m;h*=8*h;m=8*k*k;do this.pl55(d,b),this.pl55(a,b),this.pl55(a,f),this.pl55(d,f),e=2*r,e>=n&&(a++,d--,r+=n+=m),e<=l&&(b++,f--,r+=l+=h);while(a<=d);for(;b-f<k;)this.pl55(a-1,++b),this.pl55(a-1,--f)};
pl73.prototype.pl58=function(a,b){var d,f,e,g=this.pla0[0].length;for(f=0;f<g;f++){for(d=0;d<g&&-1==this.pla0[a][d][f];)d++;if(!(d>=g)){for(;d<g&&1<=this.pla0[a][d][f];)d++;for(e=g-d;d<e;)this.pla0[a][d++][f]=b}}};pl73.prototype.pl59=function(a,b){var d,f,e;for(d=a;d<=b;d++)for(f=a;f<=b;f++)for(e=a;e<=b;e++)this.pla0[d][f][e]=0};
pl73.prototype.pl5a=function(a,b){var d,f,e;var g=this.pla0[0].length;for(e=0;e<g;e++){for(d=0;d<g&&0>=this.pla0[a][d][e];)d++;if(!(d>=g||0<this.pla0[b][d][e])){for(;0<this.pla0[a][d][e];)d++;var h=g-d;for(f=g-1-d;d<h&&!(0<this.pla0[b][d][e]);)this.pla0[a][d][e]=this.plc6,this.pla0[a][f][e]=this.plc6,d++,f--}}};
pl73.prototype.pl5d=function(a,b,d){d=3;var f=b*d,e=this.pl53(f,f),g=Math.floor((b+1)/4),h,k=Math.floor(d*d*d/8),m=Math.floor((b+1)/2),n=b-1;console.log("prec "+d+", quadLimit"+k);new pl70;var l=Array(d);for(h=0;h<d;h++)l[h]=this.pl53(f,f);this.pl54(0,0,f-1,f-1,e);for(a&&(zpSoFar=0);zpSoFar<g;){var r=zpSoFar*d;for(a=0;a<d;a++){for(h=0;h<f;h++)for(g=0;g<f;g++)l[a][h][g]=-1;for(h=0;h<f&&!(0<e[h][r]);h++);this.pl54(h,h,f-h-1,f-h-1,l[a]);this.pl61(l[a],1)}for(f=0;f<m;f++)for(e=0;e<m;e++){for(a=h=0;a<
d;a++)h+=this.pl63(l[a],f*d,e*d,d);h>k&&(this.pla0[zpSoFar][f][e]=1,this.pla0[zpSoFar][n-f][e]=1,this.pla0[zpSoFar][f][n-e]=1,this.pla0[zpSoFar][n-f][n-e]=1,this.pla0[e][zpSoFar][f]=1,this.pla0[e][zpSoFar][n-f]=1,this.pla0[e][f][zpSoFar]=1,this.pla0[e][n-f][zpSoFar]=1,this.pla0[e][f][n-zpSoFar]=1,this.pla0[e][n-f][n-zpSoFar]=1,this.pla0[e][n-zpSoFar][f]=1,this.pla0[e][n-zpSoFar][n-f]=1)}break}this.pla0[b-1]=this.pla0[0];d=Math.floor((b+1)/2);for(l=1;l<d;l++)this.pl5e(l,l-1),this.pla0[b-1-l]=this.pla0[l];
return!0};
pl73.prototype.pl5b=function(a,b,d,f){var e=b*d,g=this.pl53(e,e),h=this.pl53(e,e),k,m=Math.floor((b+1)/4),n=Math.floor((d+1)/2-1),l=Math.floor(d*d/2),r=Math.floor((b+1)/2),q=b-1,u=new pl70;this.pl54(0,0,e-1,e-1,g);a&&(this.plca=0);for(;this.plca<m;this.plca++){var v=this.plca*d+n;for(a=0;a<e;a++)for(k=0;k<e;k++)h[a][k]=-1;for(a=0;a<e&&!(0<g[a][v]);a++);if(0!=this.plca)for(this.pl54(a,a,e-a-1,e-a-1,h),this.pl61(h,1),a=0;a<r;a++)for(k=0;k<r;k++)this.pl63(h,a*d,k*d,d)>l&&(this.pla0[this.plca][a][k]=this.plc6,
this.pla0[this.plca][q-a][k]=this.plc6,this.pla0[this.plca][a][q-k]=this.plc6,this.pla0[this.plca][q-a][q-k]=this.plc6,this.pla0[k][this.plca][a]=this.plc6,this.pla0[k][this.plca][q-a]=this.plc6,this.pla0[k][a][this.plca]=this.plc6,this.pla0[k][q-a][this.plca]=this.plc6,this.pla0[k][a][q-this.plca]=this.plc6,this.pla0[k][q-a][q-this.plca]=this.plc6,this.pla0[k][q-this.plca][a]=this.plc6,this.pla0[k][q-this.plca][q-a]=this.plc6);else for(a=Math.round(a/d),this.pl54(a,a,q-a,q-a,this.pla0[0]),this.pl61(this.pla0[0],
this.plc6),p=this.pla0[0],a=0;a<r;a++)for(k=0;k<r;k++)0<p[a][k]&&(this.pla0[k][this.plca][a]=this.plc6,this.pla0[k][this.plca][q-a]=this.plc6,this.pla0[k][a][this.plca]=this.plc6,this.pla0[k][q-a][this.plca]=this.plc6,this.pla0[k][a][q-this.plca]=this.plc6,this.pla0[k][q-a][q-this.plca]=this.plc6,this.pla0[k][q-this.plca][a]=this.plc6,this.pla0[k][q-this.plca][q-a]=this.plc6);if(f&&500<u.pl3c())return!1}this.pla0[b-1]=this.pla0[0];d=Math.floor((b+1)/2);for(f=1;f<d;f++)this.pl5e(f,f-1),this.pla0[b-
1-f]=this.pla0[f];return!0};pl73.prototype.pl5e=function(a,b){for(var d=this.pla0[a],f=this.pla0[b],e=Math.floor((d.length+1)/2)-1,g=Math.floor((d[0].length+1)/2)-1,h=d.length-1,k=d[0].length-1,m=0;m<e&&!(0<d[m][g]);)m++;for(var n=0;n<g&&!(0<d[e][n]);)n++;var l;n++;for(l=g;l>=n;l--){for(g=m;g<=e&&!(0<d[g++][l]););for(;g<=e&&!(0<d[g][l-1]&&-1!=f[g][l]);)g++;for(;g<=e;)d[g][l]=0,d[g][k-l]=0,d[h-g][l]=0,d[h-g][k-l]=0,g++}};
pl73.prototype.pl5f=function(a,b,d,f,e){var g=b*e,h=d*e,k=f*e,m=this.pl53(g,k),n=this.pl53(h,k),l=this.pl53(g,h),r=Math.floor((f+1)/2),q=Math.floor((e+1)/2-1),u=Math.floor(e*e/2),v=Math.floor((b+1)/2),x=Math.floor((d+1)/2);--b;--d;var t=new pl70;this.pl54(0,0,g-1,k-1,m);this.pl54(0,0,h-1,k-1,n);a&&(this.plca=0);for(;this.plca<r;this.plca++){var w=this.plca*e+q;for(a=0;a<g;a++)for(k=0;k<h;k++)l[a][k]=-1;for(a=0;a<g&&!(0<m[a][w]);a++);for(k=0;k<h&&!(0<n[k][w]);k++);this.pl54(a,k,g-a-1,h-k-1,l);this.pl61(l,
1);for(a=0;a<v;a++)for(k=0;k<x;k++)this.pl63(l,a*e,k*e,e)>u&&(this.pla0[this.plca][a][k]=1,this.pla0[this.plca][b-a][k]=1,this.pla0[this.plca][a][d-k]=1,this.pla0[this.plca][b-a][d-k]=1);if(500<t.pl3c())return!1}this.pla0[f-1]=this.pla0[0];for(e=1;e<r;e++)this.pl5e(e,e-1),this.pla0[f-1-e]=this.pla0[e];return!0};
pl73.prototype.pl60=function(a,b,d,f,e,g){var h=Math.floor((g+1)/2-1);f*=g;var k=Math.floor((e+1)/2),m=b*g,n=d*g,l=this.pl53(f,f),r=this.pl53(m,n),q=Math.floor((b+1)/2),u=Math.floor((d+1)/2);--b;--d;var v=Math.floor(g*g/2);this.pl54(0,0,f-1,f-1,l);var x=new pl70;a&&(this.plca=0);for(;this.plca<k;this.plca++){if(500<x.pl3c())return!1;var t=this.plca*g+h;for(a=0;a<f&&!(0<l[a][t]);a++);var w;for(t=0;t<m;t++)for(w=0;w<n;w++)r[t][w]=-1;t=a;this.pl54(t,t,m-1-t,m-1-t,r);t=f-a-1;this.pl54(t,t,m-1-t,m-1-t,
r);this.pl62(r,1);for(t=0;t<q;t++)for(a=0;a<u;a++)this.pl63(r,t*g,a*g,g)>v&&(this.pla0[this.plca][t][a]=1,this.pla0[this.plca][b-t][a]=1,this.pla0[this.plca][t][d-a]=1,this.pla0[this.plca][b-t][d-a]=1);if(this.plca)for(a=u-1;0<a;a--){for(t=0;t<q&&!(0<this.pla0[this.plca][t][a]);)t++;if(t==q)break;for(t++;t<q&&0>=this.pla0[this.plca][t][a-1];)t++;for(;t<q&&!(0>this.pla0[this.plca][t+1][a])&&!(0>this.pla0[this.plca][t][a+1]);)0<=this.pla0[this.plca-1][t][a]&&(this.pla0[this.plca][t][a]=0,this.pla0[this.plca][b-
t][a]=0,this.pla0[this.plca][t][d-a]=0,this.pla0[this.plca][b-t][d-a]=0),t++}this.pla0[e-1-this.plca]=this.pla0[this.plca]}return this.plca>=k};pl73.prototype.pl61=function(a,b){var d,f,e,g=a.length,h=a[0].length;for(f=0;f<h;f++){for(d=0;d<g&&-1==a[d][f];)d++;if(!(d>=g)){for(;d<g&&1<=a[d][f];)d++;for(e=g-d;d<e;)a[d++][f]=b}}};
pl73.prototype.pl62=function(a,b){var d=Math.floor((a.length+1)/2),f=Math.floor((a[0].length+1)/2),e,g,h,k=a.length-1,m=a[0].length-1;for(g=0;g<f;g++){for(e=0;e<d&&-1==a[e][g];)e++;if(!(e>=d-1)){for(;e<d&&1<=a[e][g];)e++;if(!(e>=d-1)){for(h=e+1;h<d&&-1==a[h][g];)h++;if(!(h>=d))for(;e<=d&&-1==a[e][g];)a[e][g]=b,a[e][m-g]=b,a[k-e][g]=b,a[k-e][m-g]=b,e++}}}for(e=0;e<d;e++){for(g=0;g<f&&-1==a[e][g];)g++;if(!(g>=f-1)){for(;g<f&&1<=a[e][g];)g++;if(!(g>=f-1)){for(h=g+1;h<f&&-1==a[e][h];)h++;if(!(h>=f))for(;g<
f&&-1==a[e][g];)a[e][g]=b,a[e][m-g]=b,a[k-e][g]=b,a[k-e][m-g]=b,g++}}}};pl73.prototype.pl63=function(a,b,d,f){var e=b+f;f=d+f;for(var g,h=0;b<e;b++)for(g=d;g<f;g++)0<a[b][g]&&h++;return h};pl73.prototype.pl64=function(a,b,d){var f,e;for(f=0;f<b;f++){var g="";for(e=0;e<d;e++)g+=0<a[f][e]?"*":"-";console.log(g)}};pl73.prototype.pl65=function(a,b,d,f,e){for(var g,h,k,m;b<a.length;b++){k=f;for(g=0;g<a.length;g++){m=e;for(h=0;h<a.length;h++)this.pla0[d][k][m++]=a[b][g][h];k++}d++}};
pl73.prototype.pl66=function(a,b){var d,f;for(d=0;d<a.length;d++)for(f=0;f<a[d].length;f++)b[d][f]=a[d][f]};pl73.prototype.pl67=function(a,b){var d,f;for(d=0;d<a.length;d++)for(f=0;f<a[d].length;f++)b[d][f]=0<a[d][f]?0:b[d][f]};
pl73.prototype.pl68=function(a,b,d,f,e){var g,h,k,m;var n=a.length;var l=b.length;var r=d+l<=n?d+l:n;n=a[0].length;l=b[0].length;var q=f+l<=n?f+l:n;n=a[0][0].length;l=b[0][0].length;n=e+l<=n?e+l:n;for(l=k=m=0;d<r;d++){for(g=f;g<q;g++){for(h=e;h<n;h++){var u=b[l][k][m];var v=a[d][g][h];-1==v&&(a[d][g][h]=u);m++}k++;m=0}l++;k=0}};
pl73.prototype.pl69=function(a,b,d,f,e){var g,h,k,m;var n=a.length;var l=b.length;var r=d+l<=n?d+l:n;n=a[0].length;l=b[0].length;var q=f+l<=n?f+l:n;n=a[0][0].length;l=b[0][0].length;n=e+l<=n?e+l:n;for(l=k=m=0;d<r;d++){for(g=f;g<q;g++){for(h=e;h<n;h++){var u=b[l][k][m];a[d][g][h]=u;m++}k++;m=0}l++;k=0}};pl73.prototype.pl6a=function(a,b,d){b=Math.floor(a*b);return b%2!=a%2?d?b+1:b-1:b};
pl73.prototype.pl6b=function(a,b,d){var f,e,g;for(f=0;f<a.length;f++)for(e=0;e<a[0].length;e++)if(0<a[f][e])for(g=this.pla0[0].length-1;0<=g;){if(0<this.pla0[b+e][g][d+f]){this.pla0[b+e][g][d+f]=a[f][e];break}g--}};
