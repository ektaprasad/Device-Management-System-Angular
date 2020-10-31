import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './service/login.service';
import { RegisterService } from './service/register.service';
import { ToastrModule } from 'ngx-toastr';
import {MatListModule} from '@angular/material/list';
import {DashboardModule} from './dashboard/dashboard.module';
import { SearchDeviceComponent } from './search-device/search-device.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    LoginComponent,
    SearchDeviceComponent
],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    //ToastrModule
    MatSidenavModule,
    MatListModule,
    DashboardModule

    
  ],
  providers: [
    LoginService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }