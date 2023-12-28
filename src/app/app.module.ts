import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ResultpageComponent } from './pages/resultpage/resultpage.component';
import { ProductdetailpageComponent } from './pages/productdetailpage/productdetailpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component'
import { AuthInterceptor } from './services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginpageComponent,
    RegistrationpageComponent,
    NavbarComponent,
    ResultpageComponent,
    ProductdetailpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
