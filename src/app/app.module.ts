import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApplicationComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FactCardComponent } from './components/fact-card/fact-card.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { RandomViewComponent } from './components/random-view/random-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ChuckInputComponent } from './components/chuck-input/chuck-input.component';
import { ChuckButtonComponent } from './components/chuck-button/chuck-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ...ApplicationComponents,
    FactCardComponent,
    SearchViewComponent,
    RandomViewComponent,
    ChuckInputComponent,
    ChuckButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
