import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http:HttpClient) { }


  public getSeat(seatId:any){
    return this.http.get(`${baseUrl}/api/seat/${seatId}`)
  }

  public updatSeat(seat:any){
    return this.http.put(`${baseUrl}/api/seat`,seat);
  }


}
