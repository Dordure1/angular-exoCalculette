import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { Four0fourComponent } from './four0four/four0four.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculetteComponent,
    Four0fourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
