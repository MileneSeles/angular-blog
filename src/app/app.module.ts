import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {MatToolbarModule} from 'node_modules/@angular/material/toolbar';
import { AboutComponent } from './components/about/about.component';
import {MatCardModule} from '@angular/material/card';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    // MatMenuModule
    // MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
