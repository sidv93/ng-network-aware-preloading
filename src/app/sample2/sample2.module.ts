import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Random2Component } from './random2/random2.component';
import { router } from './sample2.routing';



@NgModule({
  declarations: [Random2Component],
  imports: [
    CommonModule,
    router
  ]
})
export class Sample2Module { }
