import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from './random/random.component';
import { router } from './sample.routing';



@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule,
    router
  ]
})
export class SampleModule { }
