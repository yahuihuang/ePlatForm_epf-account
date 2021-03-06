import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule, Routes } from "@angular/router";
import { RestaurantDetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: ':slug',
    component: RestaurantDetailComponent,
  },
];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class RestaurantModule { }
