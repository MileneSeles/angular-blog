import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'hobbies', component: HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
