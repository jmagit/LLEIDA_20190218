import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

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
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasViewModelService, PersonasViewModelDAOService } from './personas/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    NotificationComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENT,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    IndraCoreModule, ClientesModule, AppCommonModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
    {provide: PersonasViewModelService, useClass: PersonasViewModelDAOService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
