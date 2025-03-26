import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'car-list',
    pathMatch: 'full',
  },
  {
    path: 'car-list',
    component: ListCarsComponent,
  },
  {
    path: 'car/:id',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
