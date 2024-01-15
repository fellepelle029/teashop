import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AccordionDirective } from './directives/accordion.directive';
import { CatalogComponent } from './components/catalog/catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { TeacardComponent } from './components/common/teacard/teacard.component';
import { TextReductionPipe } from './pipes/text-reduction.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AccordionDirective,
    CatalogComponent,
    TeacardComponent,
    TextReductionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
