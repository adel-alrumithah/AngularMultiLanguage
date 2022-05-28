import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: "ar/login",
        pathMatch: "full"
    },
   // { path: 'login',component: LoginComponent },
    { path: ':languageCode/login',component: LoginComponent},
    //{ path: 'signup',component: SignUpComponent},
    { path: ':languageCode/signup',component: SignUpComponent},
    { path: '**',  redirectTo: "ar/login"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
