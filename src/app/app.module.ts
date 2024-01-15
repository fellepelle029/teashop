import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//локализация
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AccordionDirective } from './directives/accordion.directive';
import { CatalogComponent } from './components/catalog/catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { TeaCardComponent } from './components/common/teacard/teacard.component';
import { TextReductionPipe } from './pipes/text-reduction.pipe';
import { TeaDetailsComponent } from './components/teadetails/teadetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AccordionDirective,
    CatalogComponent,
    TeaCardComponent,
    TextReductionPipe,
    TeaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
