import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'details-page',
    loadChildren: () => import('./details-page/details-page.module').then( m => m.DetailsPagePageModule)
  },
  {
    path: 'history-page',
    loadChildren: () => import('./history-page/history-page.module').then( m => m.HistoryPagePageModule)
  },
  {
    path: 'mens-page',
    loadChildren: () => import('./mens-page/mens-page.module').then( m => m.MensPagePageModule)
  },
  {
    path: 'womens-page',
    loadChildren: () => import('./womens-page/womens-page.module').then( m => m.WomensPagePageModule)
  },
  {
    path: 'hat-page',
    loadChildren: () => import('./hat-page/hat-page.module').then( m => m.HatPagePageModule)
  },
  {
    path: 'product-page',
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPagePageModule)
  },
  {
    path: 'demo-page',
    loadChildren: () => import('./demo-page/demo-page.module').then( m => m.DemoPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
