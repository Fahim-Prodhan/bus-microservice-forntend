import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css']
})
export class ViewAllTicketsComponent {

  searchText:any
  page=1
  pageSize=10

  customers = [
    {
      customerId:'',
      routes:{
        date:''
      }
    },
    
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
             this.customers.sort((a, b) => {
              return new Date(a.routes.date).getTime() - new Date(b.routes.date).getTime();
            });
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
