import { FindPetComponent } from './find-pet/find-pet.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeRootComponent } from './home-root/home.root.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const ROUTE = [
  {
    path: 'home',
    component: HomeRootComponent,
    children: [
      { path: 'new', component: PetDetailsComponent, outlet: 'new' },
      { path: 'old', component: FindPetComponent, outlet: 'old' }
    ]
  }
];

export const HomeRouter: ModuleWithProviders = RouterModule.forChild(ROUTE);
