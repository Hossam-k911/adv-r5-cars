import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  // as7b mno instance lya bta3y 3shan eh ast3mlo || DI
  constructor(private http: HttpClient) {}
  name = 'Hossam';
  getAllCars(): Observable<any> {
    return this.http.get('https://www.freetestapi.com/api/v1/cars');

    // API  =>> stream ofdata    REQ=> REsp "stream of data"
  }

  get4Cars(): Observable<any> {
    return this.http.get('https://freetestapi.com/api/v1/cars?limit=4');
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(`https://freetestapi.com/api/v1/cars/${id}`);
  }
}
