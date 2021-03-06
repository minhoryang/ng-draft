// @angular Modules:
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
