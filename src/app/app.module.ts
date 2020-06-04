import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UtlisaateurComponent } from './utlisaateur/utlisaateur.component';
import { DonneesService } from './donnees.service';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UtlisaateurComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DonneesService]
})
export class AppModule { }
