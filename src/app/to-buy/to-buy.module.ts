import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToBuyRoutingModule } from './to-buy-routing.module';
import { ToBuyComponent } from './to-buy.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ToBuyComponent],
  imports: [
    CommonModule,
    ToBuyRoutingModule,
    FormsModule
  ]
})
export class ToBuyModule { }
