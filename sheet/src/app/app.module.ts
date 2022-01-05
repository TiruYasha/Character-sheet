import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { SheetHeaderComponent } from './sheet/sheet-header/sheet-header.component';
import { BasicInformationComponent } from './sheet/basic-information/basic-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbilityscoreInformationComponent } from './sheet/abilityscore-information/abilityscore-information.component';
import { AbilityscoreControlComponent } from './sheet/abilityscore-information/abilityscore-control/abilityscore-control.component';
import { SheetContentComponent } from './sheet/sheet-content/sheet-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    SheetHeaderComponent,
    BasicInformationComponent,
    AbilityscoreInformationComponent,
    AbilityscoreControlComponent,
    SheetContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
