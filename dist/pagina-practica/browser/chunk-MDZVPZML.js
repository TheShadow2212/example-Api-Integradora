import{a as I}from"./chunk-YVGBJIAI.js";import{a as E}from"./chunk-6K4NBGSG.js";import{a as y}from"./chunk-VEZDZCEF.js";import{d as M,e as O}from"./chunk-P4DI4OJ4.js";import{Fa as g,Ha as _,Ia as p,Ja as r,Ka as a,La as s,O as m,Oa as C,Pa as l,Qa as f,S as b,V as x,W as v,ab as k,d as S,sb as w,tb as P,ua as c,va as u}from"./chunk-YH6CFDQH.js";var R=S(I());function D(i,n){if(i&1){let d=C();r(0,"a",14),l("click",function(){x(d);let e=f(2);return v(e.verificarRol())}),s(1,"i",15),a()}if(i&2){let d=f(2);p("active",d.isCurrentRoute("/users"))}}function T(i,n){if(i&1&&(r(0,"div",2),g(1,D,2,2,"a",13),a()),i&2){let d=f();c(),_("ngIf",d.rol_user=="1")}}var B=(()=>{let n=class n{constructor(o,e,t){this.router=o,this.crud=e,this.ss=t,this.rol_user="3",this.authMessage="",this.rol=new m,this.logoutEvent=new m}ngOnInit(){this.rol_user=localStorage.getItem("role_id")||this.rol_user,this.iniciarPusher()}ngOnDestroy(){this.pusher&&this.pusher.disconnect()}iniciarPusher(){this.pusher=new R.default("41abcfed77601deb48a5",{cluster:"us3",forceTLS:!1,wsHost:"18.222.122.162",wsPort:6001,enabledTransports:["ws"]}),this.pusher.subscribe("channel-notifications").bind("App\\Events\\CriticalNoti",e=>{console.log("Evento recibido:",e),this.ss.dataUpdated(e)}),this.pusher.connection.bind("connected",()=>{console.log("Conexi\xF3n establecida")})}isCurrentRoute(o){return this.router.url===o}verificarRol(){this.rol.emit()}logout(){this.logoutEvent.emit()}};n.\u0275fac=function(e){return new(e||n)(u(M),u(y),u(E))},n.\u0275cmp=b({type:n,selectors:[["app-dashboard"]],inputs:{authMessage:"authMessage"},outputs:{rol:"rol",logoutEvent:"logoutEvent"},standalone:!0,features:[k],decls:13,vars:7,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"],[1,"dashboard-container"],[1,"flex-container"],["routerLink","/home",1,"bottom",3,"click"],[1,"fa-solid","fa-seedling"],["routerLink","/habitaciones",1,"top",3,"click"],[1,"fa-solid","fa-building-lock"],["routerLink","/user",1,"top",3,"click"],[1,"fa-solid","fa-id-card"],["class","flex-container",4,"ngIf"],[1,"log-container"],[1,"logout",3,"click"],[1,"fa-solid","fa-arrow-right-from-bracket"],["routerLink","/users","class","top",3,"active","click",4,"ngIf"],["routerLink","/users",1,"top",3,"click"],[1,"fa-solid","fa-users"]],template:function(e,t){e&1&&(s(0,"link",0),r(1,"div",1)(2,"div",2)(3,"a",3),l("click",function(){return t.verificarRol()}),s(4,"i",4),a(),r(5,"a",5),l("click",function(){return t.verificarRol()}),s(6,"i",6),a(),r(7,"a",7),l("click",function(){return t.verificarRol()}),s(8,"i",8),a()(),g(9,T,2,1,"div",9),r(10,"div",10)(11,"button",11),l("click",function(){return t.logout()}),s(12,"i",12),a()()()),e&2&&(c(3),p("active",t.isCurrentRoute("/home")),c(2),p("active",t.isCurrentRoute("/habitaciones")),c(2),p("active",t.isCurrentRoute("/user")),c(2),_("ngIf",t.rol_user=="1"))},dependencies:[O,P,w],styles:['.dashboard-container[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;bottom:0;width:1px;background-color:#4169833d}.dashboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;width:77px;height:100%;background-color:#4d84fe;position:relative}.bottom[_ngcontent-%COMP%]{justify-content:center;color:#fff;height:60px;font-size:25px;text-decoration:none;padding:10px 15px;width:100%;display:flex;align-items:center;transition:all .3s ease-in-out;margin-bottom:50px;margin-top:4px}.top[_ngcontent-%COMP%]{margin-top:5px;justify-content:center;color:#fff;height:50px;font-size:20px;text-decoration:none;padding:10px 15px;width:100%;display:flex;align-items:center;transition:all .2s ease-in-out}.top[_ngcontent-%COMP%]:hover{background-color:#3471f3;font-size:25px;border-right:5px solid white}.bottom[_ngcontent-%COMP%]:hover{color:#2dc091;font-size:30px}.log-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:auto;width:100%;height:40px;border:none}.dashboard-container[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{width:90%;height:40px;border-top-left-radius:20px;border-top-right-radius:20px;border:none;background-color:#2a69f0;color:#fff;cursor:pointer;transition:all .3s ease-in-out;box-shadow:0 0 5px #0003}.dashboard-container[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]:hover{background-color:#702d2d;margin-top:-10px;height:50px;font-size:17px;box-shadow:-5px 5px 10px #0003}.rol[_ngcontent-%COMP%]{margin-top:10px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:stretch;justify-content:space-between;align-items:center;width:100%}.top.active[_ngcontent-%COMP%]{background-color:#3471f3;border-right:5px solid white}.bottom.active[_ngcontent-%COMP%]{color:#2dc091}']});let i=n;return i})();export{B as a};