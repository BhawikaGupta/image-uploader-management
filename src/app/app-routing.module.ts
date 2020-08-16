import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { ImageUploaderComponent } from './imageUploader/imageUploader.component';


const routes: Routes = [
  { path: 'images', component: ImageComponent },
  { path: 'imageUploader', component: ImageUploaderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
