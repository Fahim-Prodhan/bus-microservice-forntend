import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public addCustomer(customer:any){
    return this.http.post(`${baseUrl}/api/customer`, customer);
  }

  public getCustomersOfSeat(seatId:any){
    return this.http.get(`${baseUrl}/api/customer/seat/${seatId}`)
  }

  public deleteCustomer(customerId:any){
    return this.http.delete(`${baseUrl}/api/customer/${customerId}`)
  }

  public getCustomer(customerId:any){
    return this.http.get(`${baseUrl}/api/customer/${customerId}`)
  }

  public getAllCustomers(){
    return this.http.get(`${baseUrl}/api/customer`)
  }

  public getAllCustomersByUserId(userId:any){
    return this.http.get(`${baseUrl}/api/customer/user/${userId}`)
  }

}
