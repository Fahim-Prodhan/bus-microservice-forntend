import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {

  constructor(private http:HttpClient) { }


  public addSchedule(schedule:any){
    return this.http.post(`${baseUrl}/api/schedule`,schedule);
  }

  public getAllSchedule(){
    return this.http.get(`${baseUrl}/api/schedule`)
  }

  public getSchedule(scheduleId:any){
    return this.http.get(`${baseUrl}/api/schedule/${scheduleId}`)
  }
   //update schedule
   public updateSchedule (schedule:any) {
    return this.http.put(`${baseUrl}/api/schedule`,schedule)
  }

  //delete schedule
  public deleteSchedule(scheduleId:any) {
    return this.http.delete(`${baseUrl}/api/schedule/${scheduleId}`)
  }

}
