// @angular Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { TestRoutingModule } from './test-routing.module';
import { TestRootComponent } from './root.component';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestRootComponent,
    TestComponent,
  ],
  imports: [
    // @angular Modules:
    CommonModule,
    // External Modules:
    // Internal Modules out of this directory:
    // Internal Modules in this directory:
    TestRoutingModule,
  ],
  providers: [],
  bootstrap: [TestComponent],
})
export class TestModule { }
