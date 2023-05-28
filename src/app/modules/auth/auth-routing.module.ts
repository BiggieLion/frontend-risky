import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/features/auth-featured/login/login.component';
import { RegisterComponent } from 'src/app/features/auth-featured/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    data: {
      title: 'Auth',
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Inicio de sesión',
          routeIdx: 0,
        },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Registro de usuario',
          routeIdx: 1,
        },
      },
      {
        path: '*',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
