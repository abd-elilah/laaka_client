import { LoginModule } from './Authenticat/login.module';
import { ClientModule } from './client/client.module';
import { CompteModule } from './compte/compte.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CreanciersComponent } from './creanciers/creanciers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreanciersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CompteModule,
    ClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
