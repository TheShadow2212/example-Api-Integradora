import{a as y}from"./chunk-IHFH6B4X.js";import{a as _}from"./chunk-XPCZBMAJ.js";import"./chunk-KGX3I5MG.js";import{Fa as p,Ha as m,Ja as o,Ka as a,La as r,Qa as x,S as u,Ua as c,Va as d,Xa as h,ab as b,sb as v,tb as C,ua as i,va as g}from"./chunk-XYLY6XG4.js";function M(e,t){e&1&&r(0,"app-spinner")}function O(e,t){if(e&1&&(o(0,"div",8)(1,"p",9),c(2),a(),o(3,"p",10),c(4),a(),o(5,"p",11),r(6,"i",12),c(7),a()()),e&2){let s=x();i(2),h("",s.usuario.nombre," #",s.usuario.id,""),i(2),d(s.usuario.email),i(3),d(s.usuario.rol)}}var k=(()=>{let t=class t{constructor(n){this.usuarioService=n,this.loading=!0}ngOnInit(){this.obtenerUsuario()}obtenerUsuario(){this.usuarioService.obtenerElemento().subscribe(n=>{this.usuario=n,this.stopLoading()},n=>{console.error("Error al obtener elementos",n)})}stopLoading(){setTimeout(()=>{this.loading=!1},500)}};t.\u0275fac=function(l){return new(l||t)(g(y))},t.\u0275cmp=u({type:t,selectors:[["app-user"]],standalone:!0,features:[b],decls:8,vars:2,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"],[4,"ngIf"],[1,"container"],[1,"blue-container"],[1,"data-container"],[1,"user-icon"],[1,"fa-solid","fa-user-large","symbol"],["class","data",4,"ngIf"],[1,"data"],[1,"user-name"],[1,"user-mail"],[1,"user-rol"],[1,"fa-solid","fa-suitcase-rolling","data-symbol"]],template:function(l,f){l&1&&(r(0,"link",0),p(1,M,1,0,"app-spinner",1),o(2,"div",2),r(3,"div",3),o(4,"div",4)(5,"div",5),r(6,"i",6),a(),p(7,O,8,4,"div",7),a()()),l&2&&(i(),m("ngIf",f.loading),i(6),m("ngIf",f.usuario))},dependencies:[C,v,_],styles:["[_nghost-%COMP%]{font-family:Open Sans,sans-serif;font-weight:100;font-size:18px}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#fff;height:91.5%}.blue-container[_ngcontent-%COMP%]{background-color:#57a1ec;height:200px;width:100%}.data-container[_ngcontent-%COMP%]{position:relative;box-shadow:0 0 10px #0000001a;width:400px;height:220px;border-radius:20px;margin-top:-80px;background-color:#fff;transition:transform .3s ease-in-out,box-shadow .3s ease-in-out}.user-icon[_ngcontent-%COMP%]{position:absolute;top:-50px;left:50%;transform:translate(-50%);width:130px;height:130px;border-radius:50%;background:#d2f1ff;display:flex;justify-content:center;align-items:center}.symbol[_ngcontent-%COMP%]{font-size:60px;color:#57a1ec}.data[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:100px}.user-name[_ngcontent-%COMP%]{font-weight:600;font-size:17px;margin-bottom:5px}.user-mail[_ngcontent-%COMP%]{font-weight:400;font-size:15px;color:#443446;margin-bottom:5px}.user-rol[_ngcontent-%COMP%]{font-weight:600;font-size:17px}.data-symbol[_ngcontent-%COMP%]{margin-right:10px}.data-container[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 5px 15px #0003;transition:transform .3s ease-in-out,box-shadow .3s ease-in-out}"]});let e=t;return e})();export{k as UserComponent};
