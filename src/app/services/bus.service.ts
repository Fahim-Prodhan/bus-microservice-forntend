import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  public getAllBus() {
    return this.http.get(`${baseUrl}/api/bus`)
  }

  public addBus(bus:any) {
    return this.http.post(`${baseUrl}/api/bus`,bus);
  }

  // delete bus
  public deleteBus(busId:any) {
    return this.http.delete(`${baseUrl}/api/bus/${busId}`)
  }

  //get single bus
  public getBus(busId:any) {
    return this.http.get(`${baseUrl}/api/bus/${busId}`)
  }

  //update bus
  public updateBus(bus:any) {
    return this.http.put(`${baseUrl}/api/bus`,bus);
  }

}
