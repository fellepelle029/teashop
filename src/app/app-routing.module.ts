import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {TeaDetailsComponent} from "./components/teadetails/teadetails.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'tea/details/:id', component: TeaDetailsComponent},
  { path: 'tea/form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
