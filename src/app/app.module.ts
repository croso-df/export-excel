import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExportToExcelComponent } from './export-to-excel/export-to-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    ExportToExcelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
