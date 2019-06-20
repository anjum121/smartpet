import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root.component';
import { SharedModules } from '../../shared/components/shared.modules';
import { RootRouter } from '../../shared/routes/root-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, FormsModule, RootRouter, SharedModules],
  providers: [],
  bootstrap: [RootComponent],
  schemas: []
})
export class RootModule {}
