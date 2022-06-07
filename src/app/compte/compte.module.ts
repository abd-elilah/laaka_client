import { CompteComponent } from './compte/compte.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';


@NgModule({
  declarations: [CompteComponent],
  imports: [
    CommonModule,
    CompteRoutingModule,
    SharedModule
  ]
})
export class CompteModule { }
