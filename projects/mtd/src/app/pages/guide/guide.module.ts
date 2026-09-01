import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { GuideComponent } from './guide/guide.component';
import { GuideRoutingModule } from './guide-routing.module';

@NgModule({
  declarations: [GuideComponent],
  imports: [CommonModule, SharedModule, GuideRoutingModule]
})
export class GuideModule {}
