import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private _http:HttpClient) { }

  public getCountOfCustomers () {
    return this._http.get(`${baseUrl}/api/customer/count`);
  }
  public getCountOfBusses () {
    return this._http.get(`${baseUrl}/api/bus/count`);
  }
  public getCountOfSchedule () {
    return this._http.get(`${baseUrl}/api/schedule/count`);
  }
  public getCountOfUsers () {
    return this._http.get(`${baseUrl}/api/user/count`);
  }
  public getCountOfSeats () {
    return this._http.get(`${baseUrl}/api/seat/count`);
  }

  public getCountOfRoute(){
    return this._http.get(`${baseUrl}/api/route/count`)
  }
}
