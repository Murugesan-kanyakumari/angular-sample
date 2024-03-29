import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDataService } from './services/store-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
