import{a as P}from"./chunk-7AOZMRSP.js";import{a as j}from"./chunk-XPCZBMAJ.js";import{a as R}from"./chunk-H7ECQN7I.js";import{b as k,c as p,d as L,e as O,f as T,g as v,i as z,j as V,k as q,l as N,p as D,r as G}from"./chunk-WHYPLDBK.js";import"./chunk-KGX3I5MG.js";import{d as w,e as E}from"./chunk-GWR3QFH3.js";import{Fa as m,Ha as l,Ia as h,Ja as n,Ka as o,La as u,Oa as S,Pa as x,Qa as g,S as b,Ua as a,V as C,W as y,Wa as _,ab as M,sb as I,tb as F,ua as c,va as f}from"./chunk-XYLY6XG4.js";function A(e,r){e&1&&u(0,"app-spinner")}function B(e,r){e&1&&(n(0,"div",15),a(1," El email es requerido "),o())}function H(e,r){e&1&&(n(0,"div",15),a(1," Por favor, ingrese un email v\xE1lido "),o())}function U(e,r){e&1&&(n(0,"div",15),a(1," La contrase\xF1a es requerida "),o())}function X(e,r){if(e&1&&(n(0,"button",16),a(1,"Iniciar sesi\xF3n"),o()),e&2){let i=g();l("disabled",!i.loginForm.valid)}}function Y(e,r){if(e&1&&(n(0,"div",17),a(1),o()),e&2){let i=g();h("message-success",i.state)("message-error",!i.state),c(),_(" ",i.loginMessage," ")}}function J(e,r){e&1&&(n(0,"div",23),a(1," El c\xF3digo es requerido "),o())}function K(e,r){e&1&&(n(0,"div",23),a(1," El c\xF3digo debe tener 6 caracteres "),o())}function Q(e,r){if(e&1&&(n(0,"div",17),a(1),o()),e&2){let i=g(2);h("message-success",i.activate)("message-error",!i.activate),c(),_(" ",i.authMessage," ")}}function W(e,r){if(e&1&&(n(0,"div",18)(1,"label",19),a(2,"*Se ha enviado un codigo de verificaci\xF3n a tu correo*"),o(),n(3,"div",4)(4,"label",20),a(5,"C\xF3digo de verificaci\xF3n"),o(),u(6,"input",21),m(7,J,2,0,"div",22)(8,K,2,0,"div",22),o(),m(9,Q,2,5,"div",11),o()),e&2){let i=g();c(6),l("formControl",i.code),c(),l("ngIf",(i.code.errors==null?null:i.code.errors.required)&&i.code.touched),c(),l("ngIf",i.code.errors==null?null:i.code.errors.minlength),c(),l("ngIf",i.authMessage)}}function Z(e,r){if(e&1){let i=S();n(0,"button",24),x("click",function(s){C(i);let t=g();return y(t.verifyCode(s))}),a(1,"Verificar"),o()}if(e&2){let i=g();l("disabled",!i.code.valid)}}var me=(()=>{let r=class r{constructor(d,s,t){this.loginService=d,this.router=s,this.crud=t,this.code=new v("",[p.required,p.minLength(6)]),this.authCode="",this.loginMessage="",this.authMessage="",this.state=!1,this.activate=!1,this.role_id=0,this.token="",this.loading=!1,this.loginForm=new T({email:new v("",[p.required,p.email]),password:new v("",p.required)})}login(){this.loginMessage="",this.loading=!0;let d=this.loginForm.value.email,s=this.loginForm.value.password;d&&s&&this.loginService.login(d,s).subscribe({next:t=>{this.auth(d),this.state=!0,this.token=t.access_token,this.role_id=t.role_id,this.loading=!1,console.log(this.role_id)},error:t=>{console.log(t.error.error),t.error.error==="Unauthorized"?(this.loading=!1,this.loginMessage="Error. Verifica tus credenciales."):t.error.error==="Email not verified"&&(this.loading=!1,this.loginMessage="Verifica tu correo para iniciar sesi\xF3n"),this.state=!1}})}auth(d){this.loginService.Auth(d).subscribe({next:s=>{console.log(s),this.state=!0,this.authCode=s.code},error:s=>{console.log(s)}})}verifyCode(d){setTimeout(()=>{this.authMessage=""},1500),console.log(this.code.value),d.preventDefault(),this.code.value===this.authCode?(localStorage.setItem("auth","true"),this.activate=!0,this.authMessage="C\xF3digo correcto. Redirigiendo...",localStorage.setItem("token",this.token),localStorage.setItem("role_id",this.role_id.toString()),setTimeout(()=>{this.router.navigate(["/habitaciones"]),this.crud.emitLoginSuccessful()},1500)):(this.activate=!1,this.authMessage="C\xF3digo incorrecto. Int\xE9ntalo de nuevo.")}};r.\u0275fac=function(s){return new(s||r)(f(P),f(w),f(R))},r.\u0275cmp=b({type:r,selectors:[["app-login"]],standalone:!0,features:[M],decls:24,vars:9,consts:[[4,"ngIf"],[1,"login-container"],[3,"formGroup","ngSubmit"],[1,"title"],[1,"form-group"],["for","email"],["type","email","id","email","placeholder","Ingrese su email","formControlName","email"],["class","error",4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Password","formControlName","password"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],["class","message",3,"message-success","message-error",4,"ngIf"],["class","verification-container",4,"ngIf"],["class","btn btn-primary","style","margin-top: 20px;",3,"disabled","click",4,"ngIf"],["routerLink","/register"],[1,"error"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"message"],[1,"verification-container"],[1,"verification-label"],[1,"verification-code-label"],["type","text","id","verificationCode","placeholder","Ingrese su c\xF3digo de verificaci\xF3n","maxlength","6",1,"verification-input",3,"formControl"],["class","error-message",4,"ngIf"],[1,"error-message"],[1,"btn","btn-primary",2,"margin-top","20px",3,"disabled","click"]],template:function(s,t){s&1&&(m(0,A,1,0,"app-spinner",0),n(1,"div",1)(2,"form",2),x("ngSubmit",function(){return t.login()}),n(3,"h2",3),a(4,"Iniciar sesi\xF3n"),o(),n(5,"div",4)(6,"label",5),a(7,"Email"),o(),u(8,"input",6),m(9,B,2,0,"div",7)(10,H,2,0,"div",7),o(),n(11,"div",4)(12,"label",8),a(13,"Password"),o(),u(14,"input",9),m(15,U,2,0,"div",7),o(),m(16,X,2,1,"button",10)(17,Y,2,5,"div",11)(18,W,10,4,"div",12)(19,Z,2,1,"button",13),n(20,"p"),a(21,"No tienes una cuenta? "),n(22,"a",14),a(23,"Crea una"),o()()()()),s&2&&(l("ngIf",t.loading),c(2),l("formGroup",t.loginForm),c(7),l("ngIf",(t.loginForm.controls.email.errors==null?null:t.loginForm.controls.email.errors.required)&&t.loginForm.controls.email.touched),c(),l("ngIf",t.loginForm.controls.email.errors==null?null:t.loginForm.controls.email.errors.email),c(5),l("ngIf",(t.loginForm.controls.password.errors==null?null:t.loginForm.controls.password.errors.required)&&t.loginForm.controls.password.touched),c(),l("ngIf",!t.state),c(),l("ngIf",t.loginMessage),c(),l("ngIf",t.state),c(),l("ngIf",t.state))},dependencies:[G,z,k,L,O,D,V,q,N,F,I,E,j],styles:['[_nghost-%COMP%]{font-family:Open Sans,sans-serif;font-weight:100;font-size:17px;color:#000}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;height:100vh;background-image:linear-gradient(#80808080,#80808080),url("./media/background-form-H4T5BY3X.png");background-repeat:no-repeat;background-size:cover;background-color:#f0f0f0}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:400;margin-top:90px;margin-bottom:20px;font-size:28px;text-align:center}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:27%;padding:20px;border-top-left-radius:20px;border-bottom-left-radius:20px;background-color:#fff;box-shadow:0 0 5px #00000026}.message-success[_ngcontent-%COMP%]{text-align:center;margin-top:20px;background-color:#4caf50;color:#fff;padding:10px;border-radius:5px;margin-left:auto;margin-right:auto}.message-error[_ngcontent-%COMP%]{text-align:center;margin-top:20px;background-color:#f44336;color:#fff;padding:10px;border-radius:5px;margin-left:auto;margin-right:auto}h2[_ngcontent-%COMP%]{margin-bottom:10px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}input[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:5px;margin-top:5px}button[_ngcontent-%COMP%]{padding:10px;border:none;border-radius:5px;background-color:#007bff;color:#fff;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.error[_ngcontent-%COMP%]{color:red;margin-top:4px;margin-left:1px;font-size:12px}.verification-container[_ngcontent-%COMP%]{margin-top:10px}.verification-label[_ngcontent-%COMP%]{display:block;text-align:center;color:green;font-weight:400;font-size:16px;margin-bottom:10px}.verification-input[_ngcontent-%COMP%]{margin-bottom:3px}.error-message[_ngcontent-%COMP%]{color:red;font-size:15px}p[_ngcontent-%COMP%]{margin-top:10px;font-size:12px;text-align:center}.verification-code-label[_ngcontent-%COMP%]{font-weight:400;font-size:16px}']});let e=r;return e})();export{me as LoginComponent};
