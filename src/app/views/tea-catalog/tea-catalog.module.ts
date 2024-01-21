import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from "./catalog/catalog.component";
import { TeaCardComponent } from "./teacard/teacard.component";
import { TeaDetailsComponent } from "./teadetails/teadetails.component";
import { TeaCatalogRoutingModule } from "./tea-catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    CatalogComponent,
    TeaCardComponent,
    TeaDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeaCatalogRoutingModule,
    SharedModule
  ]
})
export class TeaCatalogModule { }
