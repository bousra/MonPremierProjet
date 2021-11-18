import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardClientsComponent} from './dashboard-clients/dashboard-clients.component';
import {DashboardComptabiliteComponent} from './dashboard-comptabilite/dashboard-comptabilite.component';
import {DashboardprospectsComponent} from './dashboardprospects/dashboardprospects.component';
import {HighchartsComponent} from './highcharts/highcharts.component';
import {ComptabiliteBootsrapComponent} from './comptabilite-bootsrap/comptabilite-bootsrap.component';
import {LocationComponent} from './location/location.component';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'salesman', component: HighchartsComponent},
  {path: 'clients', component: DashboardClientsComponent},
  { path: 'comptabilite', component: DashboardComptabiliteComponent},
  {path: 'prospects', component: DashboardprospectsComponent},
  {path: 'comptabilite-bootstrap', component: ComptabiliteBootsrapComponent},
  {path: 'location', component: LocationComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
