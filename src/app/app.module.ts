import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HighchartsComponent} from './highcharts/highcharts.component';
import {ChartModule} from 'angular-highcharts';
import {DashbordsalesmanComponent} from './dashbordsalesman/dashbordsalesman.component';
import {DashboardClientsComponent} from './dashboard-clients/dashboard-clients.component';
import {DashboardprospectsComponent} from './dashboardprospects/dashboardprospects.component';
import {DashboardComptabiliteComponent} from './dashboard-comptabilite/dashboard-comptabilite.component';
import {ComptabiliteBootsrapComponent} from './comptabilite-bootsrap/comptabilite-bootsrap.component';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientJsonpModule} from '@angular/common/http';
import { LocationComponent } from './location/location.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ClientLocationComponent } from './components/clients/client-location/client-location.component';
import { ActivitySectorDemandeComponent } from './components/clients/activity-sector-demande/activity-sector-demande.component';
import { ClientBysectorComponent } from './components/clients/client-bysector/client-bysector.component';
// declaration: dans celui ci on doit declarer ajouter les composents qu'on veut ajouter


import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({

  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HighchartsComponent,
    DashbordsalesmanComponent,
    DashboardClientsComponent,
    DashboardprospectsComponent,
    DashboardComptabiliteComponent,
    ComptabiliteBootsrapComponent,
    LocationComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ClientComponent,
    ClientLocationComponent,
    ActivitySectorDemandeComponent,
    ClientBysectorComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    FullCalendarModule
  ],
  exports: [
    DashboardClientsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
