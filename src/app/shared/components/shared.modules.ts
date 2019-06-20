import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import * as UI from './_uisdk/uisdk.components';

const AllComponents = [MenuComponent];

@NgModule({
  declarations: [AllComponents],
  imports: [CommonModule, FormsModule, UI.SDK],
  exports: [FormsModule, CommonModule, AllComponents, UI.SDK]
})
export class SharedModules {}
