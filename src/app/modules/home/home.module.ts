import { SearchResultsComponent } from './find-pet/search-results/search-results.component';
import { BookingStepsComponent } from './pet-details/booking-steps/booking-steps.component';
import { WantToSendComponent } from './pet-details/want-to-send/want-to-send.component';
import { NgModule } from '@angular/core';

import { HomeRootComponent } from './home-root/home.root.component';
import { HomeRouter } from './home.route';
import { SharedModules } from '../../shared/components/shared.modules';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { FindPetComponent } from './find-pet/find-pet.component';
import { CrateTypeListComponent } from './pet-details/crate-type-list/crate-type-list.component';

@NgModule({
  declarations: [
    HomeRootComponent,
    FindPetComponent,
    PetDetailsComponent,
    WantToSendComponent,
    BookingStepsComponent,
    CrateTypeListComponent,
    SearchResultsComponent
  ],
  imports: [HomeRouter, SharedModules],
  exports: [HomeRootComponent, SharedModules]
})
export class HomeModule {}
