import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path:'', redirectTo:'/albums', pathMatch:'full' },
  { path:'albums', component:AlbumsComponent },
  { path:'photos/:albumId', component:PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
