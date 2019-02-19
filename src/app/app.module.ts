import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';
import { ClientesModule } from './clientes/clientes.module';
import { AppCommonModule } from './app-common/app-common.module';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    IndraCoreModule, ClientesModule, AppCommonModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
