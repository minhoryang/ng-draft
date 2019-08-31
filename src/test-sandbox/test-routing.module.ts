// @angular Modules:
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// External Modules:
// Internal Modules/Components out of this directory:
// Internal Modules/Components in this directory:
import { TestRootComponent } from './root.component';
import { TestComponent } from './test.component';


const routes: Routes = [
  { path: 'test', component: TestRootComponent, children: [
    // YOUR TEST WORKS IN HERE!
    { path: '', component: TestComponent },
    // SAMPLE: { path: '2', component: TestComponent },  // <- /test/2
    // YOUR TEST WORKS IN HERE!
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
