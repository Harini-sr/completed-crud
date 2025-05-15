import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './component/add-form/add-form.component';
import { ViewFormComponent } from './component/view-form/view-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import {MatTableModule} from '@angular/material/table';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { DisplayComponent } from './component/display/display.component';
import { DeleteComponent } from './component/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ViewFormComponent,
    EditFormComponent,
    DisplayComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
