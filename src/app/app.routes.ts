import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'register', loadComponent:()=>import('./register-user/register-user.component').then(m=>m.RegisterUserComponent)},
    { path: 'home', loadComponent:()=>import('./hub/hub.component').then(m=>m.HubComponent),canActivate: [authGuard]},
    { path: 'habitaciones', loadComponent:()=>import('./habitaciones/habitaciones.component').then(m=>m.HabitacionesComponent),canActivate: [authGuard]},
    { path: 'habitaciones/habitacion/:id', loadComponent:()=>import('./habitacion/habitacion.component').then(m=>m.HabitacionComponent),canActivate: [authGuard]},
    { path: 'habitacion/create' , loadComponent:()=>import('./habitaciones-create-form/habitaciones-create-form.component').then(m=>m.HabitacionesCreateFormComponent), canActivate: [authGuard]},
    { path: 'habitacion/update/:id', loadComponent:()=>import('./habitaciones-update-form/habitaciones-update-form.component').then(m=>m.HabitacionesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'historial/:nombre/:id', loadComponent:()=>import('./historial/historial.component').then(m=>m.HistorialComponent), canActivate: [authGuard]},
    { path: 'users', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'user', loadComponent:()=>import('./user/user.component').then(m=>m.UserComponent), canActivate: [authGuard]},
    {path: 'usuarios/update/:id', loadComponent:()=>import('./usuario-update-form/usuario-update-form.component').then(m=>m.UsuarioUpdateFormComponent), canActivate: [authGuard]},

    { path: '', redirectTo: '/home', pathMatch: 'full' }

];
