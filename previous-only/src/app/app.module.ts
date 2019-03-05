import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatBottomSheetModule,
  MatBottomSheetRef,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatListModule,
MatTabsModule,
  MatExpansionModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SerieComponent } from './serie/serie.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SerieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
