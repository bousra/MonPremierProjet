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
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

const routes: Routes = [
  {path: 'salesman', component: HighchartsComponent},
  {path: 'clients', component: DashboardClientsComponent},
  { path: 'comptabilite', component: DashboardComptabiliteComponent},
  {path: 'prospects', component: DashboardprospectsComponent},
  {path: 'comptabilite-bootstrap', component: ComptabiliteBootsrapComponent},
  {path: 'location', component: LocationComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'newProduct', component: ProductAddComponent},
  {path: 'editProduct/:id', component: ProductEditComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
