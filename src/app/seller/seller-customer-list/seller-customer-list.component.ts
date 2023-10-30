import { Component,OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seller-customer-list',
  templateUrl: './seller-customer-list.component.html',
  styleUrls: ['./seller-customer-list.component.css']
})
export class SellerCustomerListComponent implements OnInit{
  searchText:any
  page=1
  pageSize=10

  customers = [
    {
      routes:{
        date:''
      }
    }
  ]
  user={
    id:0
  }

  constructor(
    private _customer:CustomerService,
    private _user:UserService,
  ){}

  ngOnInit(): void {


    //current user load for find id;
    this._user.getCurrentUser().subscribe(
      (data:any)=>{
        this.user = data;
        //get customer of the current user
        this._customer.getAllCustomersByUserId(this.user.id).subscribe(
          (data:any)=>{
            this.customers = data;
             //sort with data
         this.customers.sort((a,b)=>{
          return new Date(b.routes.date).getTime()-new Date(a.routes.date).getTime();
        })
          },
          (error)=>{
            console.log(error);
            
          }
        )
      },
      (error)=>{
        console.log(error);
        
      }
    )


  }

  

  

}
