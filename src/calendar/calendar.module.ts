// @angular Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { CalendarRoutingModule } from './calendar-routing.module';
import { DailyViewComponent } from './views/daily/daily.view.component';
import { WeeklyViewComponent } from './views/weekly/weekly.view.component';


@NgModule({
  declarations: [
    DailyViewComponent,
    WeeklyViewComponent,
  ],
  imports: [
    // @angular Modules:
    CommonModule,
    DragDropModule,
    MatGridListModule,
    // External Modules:
    // Internal Modules/Components out of this directory:
    // Internal Modules/Components in this directory:
    CalendarRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CalendarModule { }
