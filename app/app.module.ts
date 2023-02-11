import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValidationComponent } from './routing/validation/validation.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ErrorComponent } from './routing/error/error.component';
import { HeaderComponent } from './routing/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

var Routes = [
  { path: '', component: ValidationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
