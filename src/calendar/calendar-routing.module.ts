// @angular Modules:
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { DailyViewComponent } from './views/daily/daily.view.component';
import { WeeklyViewComponent } from './views/weekly/weekly.view.component';


const routes: Routes = [
  { path: 'daily', component: DailyViewComponent, },
  { path: 'weekly', component: WeeklyViewComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
