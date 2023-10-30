import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-normal-ticket',
  templateUrl: './normal-ticket.component.html',
  styleUrls: ['./normal-ticket.component.css']
})
export class NormalTicketComponent implements OnInit{

  constructor(
    private _customer:CustomerService,
    private _route:ActivatedRoute,
    private _location:Location
  ){}

  customerData={
    customerName:'',
    customerNumber:'',
    bookedSeats:'',
    totalPrice:0,
    routes:{
      destination:'',
      departure:'',
      time:'',
      date:'',
      price:''
    },
    busSchedule:{
      date:''
    },
    seat:{
      seatNo:''
    }
  }
  customerId:any

  ngOnInit(): void {
    this.customerId = this._route.snapshot.params['customerId']
      this._customer.getCustomer(this.customerId).subscribe(
        (data:any)=>{
          this.customerData = data;
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }

  printPage() {
    window.print();
  }
  
  backPage() {
    this._location.back();
  }

  



}
