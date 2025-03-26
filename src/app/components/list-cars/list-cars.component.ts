import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent {
  carsList: any[] = [];
  pageNumber: number = 1;
  constructor(private myCarsService: CarsService) {
    this.onGettingCars();

    console.log(myCarsService.name);
  }

  // onGettingCars(): void {
  //   this.myCarsService.getAllCars().subscribe({
  //     next: (res) => {
  //       this.carsList = res;
  //     },
  //     // error: () => {},
  //     // complete: () => {},
  //   });
  // }

  onGettingCars(): void {
    this.myCarsService.getAllCars().subscribe((res) => {
      this.carsList = res;
    });
  }
}
