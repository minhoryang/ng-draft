// @angular Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatGridListModule } from '@angular/material/grid-list';
// External Modules:
// Internal Modules/Components out of this directory:
import { environment } from '../environments/environment';
import { CalendarModule } from '../calendar/calendar.module';
import { TestModule } from '../test-sandbox/test.module';
// Internal Modules/Components in this directory:
import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './root.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRootComponent,
  ],
  imports: [
    // @angular Modules:
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    // External Modules:
    // Internal Modules/Components out of this directory:
    CalendarModule,
    TestModule,
    // Internal Modules/Components in this directory:
  ],
  providers: [],
  bootstrap: [AppRootComponent, ],
})
export class AppModule { }
