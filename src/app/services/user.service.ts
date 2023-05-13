import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

   // add user
   public addUser(user:any) {
    return this.http.post(`${baseUrl}/api/user/register`, user)
  }

  public getAllUsers(){
    return this.http.get(`${baseUrl}/api/user`)
  }

  public deleteUser(id:any){
    return this.http.delete(`${baseUrl}/api/user/delete/${id}`)
  }

  //add admin
  public addAdmin(admin:any){
    return this.http.post(`${baseUrl}/api/user/admin-register`,admin);
  }

  public addSeller(seller:any){
    return this.http.post(`${baseUrl}/api/user/seller-register`,seller);
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/auth/current-user`)
  }

}
