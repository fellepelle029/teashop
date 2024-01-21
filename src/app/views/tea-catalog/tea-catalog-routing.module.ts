import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {TeaDetailsComponent} from "./teadetails/teadetails.component";

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent},
  { path: 'tea/details/:id', component: TeaDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaCatalogRoutingModule { }
