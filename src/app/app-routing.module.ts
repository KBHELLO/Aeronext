import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'solution',
    loadChildren: './solution/solution.module#SolutionModule'
  },
  {
    path: 'buy',
    loadChildren: './to-buy/to-buy.module#ToBuyModule'
  },
  {
    path: 'training',
    loadChildren: './training/training.module#TrainingModule'
  },
  {
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule'
  }
]; */
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'solution',
        loadChildren: './solution/solution.module#SolutionModule'
      },
      {
        path: 'buy',
        loadChildren: './to-buy/to-buy.module#ToBuyModule'
      },
      {
        path: 'training',
        loadChildren: './training/training.module#TrainingModule'
      },
      {
        path: 'gallery',
        loadChildren: './gallery/gallery.module#GalleryModule'
      },
      { path: '**', redirectTo: 'home' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
