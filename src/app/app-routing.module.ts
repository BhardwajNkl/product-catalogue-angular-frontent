import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';
import { ResultpageComponent } from './pages/resultpage/resultpage.component';
import { ProductdetailpageComponent } from './pages/productdetailpage/productdetailpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
  {
    path:"",
    component:LandingpageComponent
  },
  {
    path: "login",
    component: LoginpageComponent
  },
  {
    path:"register",
    component:RegistrationpageComponent
  },
  {
    path:"result",
    component:ResultpageComponent,
    // canActivate:[AuthguardGuard]
  },
  {
    path:"productdetail",
    component:ProductdetailpageComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:"home",
    component: HomepageComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
