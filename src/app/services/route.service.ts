import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http:HttpClient) { }

  public addRoute(route:any){
    return this.http.post(`${baseUrl}/api/route`,route)
  }

  public deleteRoute(routeId:any) {
    return this.http.delete(`${baseUrl}/api/route/${routeId}`)
  }

  public getAllRoutes(){
    return this.http.get(`${baseUrl}/api/route`)
  }

  public searchRoutes(departure: any, destination: any, date: Date){
    let params = new HttpParams()
    .set('departure', departure)
    .set('destination', destination)
    .set('date', this.formatDate(date));
    
    return this.http.get(`${baseUrl}/api/route/search`,{params:params});
  
  }


  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const milliseconds = ('00' + date.getMilliseconds()).slice(-3);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }
}



