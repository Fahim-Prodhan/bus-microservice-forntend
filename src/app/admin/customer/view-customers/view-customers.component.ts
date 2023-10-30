import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit{


  searchText:any
  page=1
  pageSize=10

  customers = [
    {
      customerId:'',
      customerName:'',
      customerNumber:'',
      busSchedule:{
        date:''
      },
      routes:{
        date:''
      }
    }
  ]

  constructor(
    private _customer:CustomerService,
  ){}

  ngOnInit(): void {
    this._customer.getAllCustomers().subscribe(
      (data:any)=> {
        this.customers = data;
         //sort with data
         this.customers.sort((a,b)=>{
          return new Date(a.routes.date).getTime()-new Date(b.routes.date).getTime();
        })
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  deleteCustomer(customerId:any) {
    Swal.fire(
      {
        icon:'info',
        title:'Are You Sure?',
        confirmButtonText:'Delete',
        showCancelButton:true
      }
    ).then((result)=>{
  
      if(result.isConfirmed) {
  
        this._customer.deleteCustomer(customerId).subscribe(
        (data:any)=> {
      
          this.customers = this.customers.filter((customer)=>customer.customerId != customerId);
      
          Swal.fire("Deleted","Customer is deleted","success")
        },
        (error)=>{
          console.log(error);
          
        }
      )}
    })
  }



}
