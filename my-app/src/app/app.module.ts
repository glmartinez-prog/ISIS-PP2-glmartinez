import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarshipListComponent } from './starship/starship-list/starship-list.component'; 
import { StarshipService } from './starship/starship.service';

@NgModule({
  declarations: [
    AppComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }


