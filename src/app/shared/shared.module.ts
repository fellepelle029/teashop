import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AccordionDirective} from "./directives/accordion.directive";
import {TextReductionPipe} from "./pipes/text-reduction.pipe";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AccordionDirective,
    TextReductionPipe,
    FooterComponent,
  ],
  exports: [
    TextReductionPipe,
    HeaderComponent,
    AccordionDirective,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
