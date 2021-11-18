import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
// declaration: dans celui ci on doit declarer ajouter les composents qu'on veut ajouter
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
  ],
  exports: [
    DashboardClientsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
