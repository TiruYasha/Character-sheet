import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { SheetHeaderComponent } from './sheet/sheet-header/sheet-header.component';
import { BasicInformationComponent } from './sheet/basic-information/basic-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    SheetHeaderComponent,
    BasicInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
