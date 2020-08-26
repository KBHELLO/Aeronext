import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FcTopbarComponent } from './fc-topbar/fc-topbar.component';
import { FcFooterComponent } from './fc-footer/fc-footer.component';

@NgModule({
  declarations: [MainLayoutComponent, FcTopbarComponent, FcFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
