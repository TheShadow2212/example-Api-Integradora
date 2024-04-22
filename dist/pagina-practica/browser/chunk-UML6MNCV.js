import{a as A}from"./chunk-XPCZBMAJ.js";import{a as D}from"./chunk-H7ECQN7I.js";import{b as U,c as u,d as I,e as w,f as P,g as c,i as N,k as T,l as k,m as q,n as z,o as L,r as j}from"./chunk-WHYPLDBK.js";import"./chunk-KGX3I5MG.js";import{b as y,d as M,e as O}from"./chunk-GWR3QFH3.js";import{Fa as d,Ha as l,Ja as i,Ka as r,La as p,Pa as h,S as _,Ua as a,Va as b,ab as F,rb as C,sb as E,tb as S,ua as s,va as f}from"./chunk-XYLY6XG4.js";function G(t,n){t&1&&p(0,"app-spinner")}function V(t,n){t&1&&(i(0,"div",20),a(1," El nombre es requerido "),r())}function B(t,n){t&1&&(i(0,"div",20),a(1," El nombre debe tener al menos 3 caracteres "),r())}function $(t,n){t&1&&(i(0,"div",20),a(1," El nombre debe tener menos de 15 caracteres "),r())}function H(t,n){t&1&&(i(0,"div",20),a(1," El email es requerido "),r())}function J(t,n){t&1&&(i(0,"div",20),a(1," Por favor, ingrese un email v\xE1lido "),r())}function K(t,n){if(t&1&&(i(0,"option",21),a(1),r()),t&2){let x=n.$implicit;l("value",x.id),s(),b(x.name)}}function Q(t,n){t&1&&(i(0,"div",20),a(1," El rol es requerido "),r())}var ae=(()=>{let n=class n{constructor(m,o,e){this.crud=m,this.router=o,this.route=e,this.roles=[],this.loading=!0,this.showPassword=new c(!1),this.usuarioForm=new P({name:new c("",[u.required,u.minLength(3),u.maxLength(15)]),email:new c("",[u.required,u.email]),role_id:new c("",u.required)})}ngOnInit(){this.crud.getRoles().subscribe({next:o=>{console.log(o),this.roles=o,console.log(this.roles)},error:o=>{console.log(o)}});let m=this.route.snapshot.paramMap.get("id");m&&this.crud.getUsuario(m).subscribe({next:o=>{console.log(o),this.usuario=o,this.stopLoading(),this.usuarioForm.setValue({name:this.usuario.name,email:this.usuario.email,role_id:this.usuario.role_id})},error:o=>{console.log(o)}})}update(){let m=this.usuarioForm.value.name,o=this.usuarioForm.value.email,e=this.usuarioForm.value.role_id,g=this.route.snapshot.paramMap.get("id");if(m&&o&&e&&g){let R=parseInt(g,10);this.crud.updateUsuario(m,o,e,R).subscribe({next:v=>{console.log(v),this.router.navigate(["/users"])},error:v=>{console.log(v)}})}}stopLoading(){setTimeout(()=>{this.loading=!1},500)}};n.\u0275fac=function(o){return new(o||n)(f(D),f(M),f(y))},n.\u0275cmp=_({type:n,selectors:[["app-usuario-update-form"]],standalone:!0,features:[F],decls:33,vars:10,consts:[[4,"ngIf"],[1,"container"],[1,"form-container"],[1,"ttl"],["routerLink","/users",1,"back-button"],[1,"fa-solid","fa-arrow-left","symbol"],[1,"form-title"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name",1,"txt"],["id","name","placeholder","Ingrese su nombre","formControlName","name",1,"input"],["class","text-danger",4,"ngIf"],["for","email",1,"txt"],["type","email","id","email","placeholder","Ingrese su email","formControlName","email",1,"input"],["for","role_id",1,"txt"],["id","role_id","formControlName","role_id",1,"input"],[3,"value",4,"ngFor","ngForOf"],[1,"footer"],["routerLink","/users",1,"button","left"],["type","submit",1,"button","right",3,"disabled"],[1,"text-danger"],[3,"value"]],template:function(o,e){o&1&&(d(0,G,1,0,"app-spinner",0),i(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),p(5,"i",5),r(),i(6,"p",6),a(7,"Actualizar usuario"),r()(),i(8,"form",7),h("ngSubmit",function(){return e.update()}),i(9,"div",8)(10,"label",9),a(11,"Nombre"),r(),p(12,"input",10),d(13,V,2,0,"div",11)(14,B,2,0,"div",11)(15,$,2,0,"div",11),r(),i(16,"div",8)(17,"label",12),a(18,"Email"),r(),p(19,"input",13),d(20,H,2,0,"div",11)(21,J,2,0,"div",11),r(),i(22,"div",8)(23,"label",14),a(24,"Rol"),r(),i(25,"select",15),d(26,K,2,2,"option",16),r(),d(27,Q,2,0,"div",11),r(),i(28,"div",17)(29,"a",18),a(30,"cancelar"),r(),i(31,"button",19),a(32,"actualizar"),r()()()()()),o&2&&(l("ngIf",e.loading),s(8),l("formGroup",e.usuarioForm),s(5),l("ngIf",(e.usuarioForm.controls.name.errors==null?null:e.usuarioForm.controls.name.errors.required)&&e.usuarioForm.controls.name.touched),s(),l("ngIf",e.usuarioForm.controls.name.errors==null?null:e.usuarioForm.controls.name.errors.minlength),s(),l("ngIf",e.usuarioForm.controls.name.errors==null?null:e.usuarioForm.controls.name.errors.maxlength),s(5),l("ngIf",(e.usuarioForm.controls.email.errors==null?null:e.usuarioForm.controls.email.errors.required)&&e.usuarioForm.controls.email.touched),s(),l("ngIf",e.usuarioForm.controls.email.errors==null?null:e.usuarioForm.controls.email.errors.email),s(5),l("ngForOf",e.roles),s(),l("ngIf",(e.usuarioForm.controls.role_id.errors==null?null:e.usuarioForm.controls.role_id.errors.required)&&e.usuarioForm.controls.role_id.touched),s(4),l("disabled",!e.usuarioForm.valid))},dependencies:[j,N,z,L,U,q,I,w,T,k,S,C,E,O,A],styles:["[_nghost-%COMP%]{font-family:Open Sans,sans-serif;font-weight:100;font-size:18px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:91%;background-color:#f6f7fc}.symbol[_ngcontent-%COMP%]{color:#9a9a9a;margin-right:7px;font-size:15px;margin-left:20px}.ttl[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:2px solid #E9EAEB;padding-bottom:20px}.form-container[_ngcontent-%COMP%]{width:40%;padding-top:20px;padding-bottom:20px;background-color:#fff;border-radius:10px;box-shadow:0 0 10px #00000026}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px 40px}.form-title[_ngcontent-%COMP%]{font-weight:400;font-size:23px}.footer[_ngcontent-%COMP%]{display:flex;align-items:center;border-top:2px solid #E9EAEB;padding-bottom:10px;justify-content:space-between}.button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:#65b9fc;background-color:#fff;font-size:17px;font-weight:400;padding:3px 10px;margin-top:20px;text-decoration:none;border-radius:20px;border:2px solid #65B9FC;cursor:pointer;transition:background-color .3s,color .3s,border .3s,scale .3s}.button[_ngcontent-%COMP%]:hover{scale:1.1;text-decoration:none;background-color:#006dfd;border:2px solid #006DFD;color:#fff}.left[_ngcontent-%COMP%]{margin-left:20px}.right[_ngcontent-%COMP%]{margin-right:20px}.txt[_ngcontent-%COMP%]{color:#575c62;font-weight:400;font-size:16px}.input[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #E3E4E5;padding:8px}.text-danger[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:5px;margin-left:10px}"]});let t=n;return t})();export{ae as UsuarioUpdateFormComponent};
