import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//локализация
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AccordionDirective } from './directives/accordion.directive';
import { CatalogComponent } from './components/catalog/catalog.component';
import { TeaCardComponent } from './components/common/teacard/teacard.component';
import { TextReductionPipe } from './pipes/text-reduction.pipe';
import { TeaDetailsComponent } from './components/teadetails/teadetails.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AccordionDirective,
    CatalogComponent,
    TeaCardComponent,
    TextReductionPipe,
    TeaDetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
