import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToBuyComponent} from './to-buy.component';

const routes: Routes = [
  {
    path: '',
    component: ToBuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToBuyRoutingModule {
}
