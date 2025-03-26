import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  carId: number = 0;
  carObj: any = {};
  constructor(
    private myActivatedRoute: ActivatedRoute,
    private carsService: CarsService
  ) {
    this.carId = this.myActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCarById();
  }

  getCarById(): void {
    this.carsService.getCarById(this.carId).subscribe({
      next: (res) => {
        this.carObj = res;
      },
    });
  }
}
