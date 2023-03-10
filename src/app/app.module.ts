import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'; 
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from '../environments/environment'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }