// @angular Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { CalendarRoutingModule } from './calendar-routing.module';
import { DailyViewComponent } from './views/daily/daily.view.component';


@NgModule({
  declarations: [
    DailyViewComponent,
  ],
  imports: [
    // @angular Modules:
    CommonModule,
    DragDropModule,
    // External Modules:
    // Internal Modules/Components out of this directory:
    // Internal Modules/Components in this directory:
    CalendarRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CalendarModule { }
