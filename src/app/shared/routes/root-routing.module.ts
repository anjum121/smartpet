import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: '../../modules/home/home.module#HomeModule' }
];

export const RootRouter: ModuleWithProviders = RouterModule.forRoot(routes);
