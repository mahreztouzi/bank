// simulation.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationComponent } from './simulation.component';

import { SimulationRoutingModule } from './simulation-routing.module';
import { FormsComponent } from './forms/forms.component';
import { ResultComponent } from './result/result.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    FormsComponent,
    ResultComponent,
    TypeComponent
  ],
  imports: [CommonModule, SimulationRoutingModule],
})
export class SimulationModule {}
