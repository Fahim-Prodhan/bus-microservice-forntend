import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { CustomerService } from 'src/app/services/customer.service';
import { SeatService } from 'src/app/services/seat.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit{
  constructor(
    private _snak:MatSnackBar,
    private _route:ActivatedRoute,
    private _customer: CustomerService,
    private _location:Location,
    private _schedule:BusScheduleService,
    private _seat:SeatService,
    private _user:UserService

  ){}


  ngOnInit(): void {
      this.scheduleId = this._route.snapshot.params['scheduleId']
      this.seatId = this._route.snapshot.params['seatId']

      this.customers.seatId = this.seatId;
      this.customers.scheduleId = this.scheduleId

      //schedule Load
      this._schedule.getSchedule(this.scheduleId).subscribe(
        (data:any)=>{
          this.schedules = data;
          console.log(this.schedules); 
        },
        (error)=>{
          console.log(error);
          
        }
      )

      //load current user
      this._user.getCurrentUser().subscribe(
        (data:any)=>{
          this.user = data;
          this.customers.userId = this.user.id
          this.customers.customerName = this.user.firstName
          this.customers.customerNumber = this.user.phone
        },
      (error)=>{
        console.log(error);
        
      }
      )


      //seat load
      this._seat.getSeat(this.seatId).subscribe(
        (data:any)=>{
          this.seats = data;
        },
        (error)=>{
          console.log(error);         
        }
      )

      this._customer.getCustomersOfSeat(this.seatId).subscribe(
        (data:any)=>{
          this.seatCustomer = data;
          // console.log(data);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )


  }

  seatId:any
  scheduleId:any

  seatCustomer:any

  user = {
    id:0,
    firstName:'',
    lastName:'',
    phone:''
  }

  customers = {
    customerName:"",
    customerNumber:'',
    scheduleId:'',
    routeId:'',
    seatId:'',
    userId:0
  }

  seats={
    SeatId:'',
    seatNo:'',
    booked:false
  }

  schedules = {
    scheduleId:'',
    routes:[{
        routeId:'',
        departure:'',
        destination:'',
        price:'',
        time:''
      }
    ]
  }


  addCustomer(){
    if(this.customers.customerName.trim() == "" || this.customers.customerName.trim()==null) {
      this._snak.open('Customer Name is Required!',"ok",{
        duration:3000,
      })
      return
    }
    else if(this.customers.customerNumber.trim() == "" || this.customers.customerNumber.trim()==null) {
      this._snak.open('Customer Number is Required!',"ok",{
        duration:3000,
      })
      return
    }
    else if(!this.seats.booked) {
      this._snak.open('Booked is Required!',"ok",{
        duration:3000,
      })
      return
    }

    //  updating part
     this._seat.updatSeat(this.seats).subscribe(
      (data:any)=>{
        this.seats = data;
      },
      (error)=>{
        console.log(error);       
      }
    );


    //adding
    this._customer.addCustomer(this.customers).subscribe(
      (data:any)=>{
        Swal.fire("Successful","Customer is add Successfully", "success").then((e)=>{
          window.location.reload()
        });

      },
      (error)=>{
        console.log(error);
        Swal.fire("Something is went wrong","Customer is not added","error")
        
      }
    )
  }

  //delete customer
  deleteCustomer(customerId:any){
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
      
          this.seatCustomer = this.seatCustomer.filter((c:any)=>c.customerId != customerId);
      
          Swal.fire("Deleted","Customer is deleted","success")
        },
        (error)=>{
          console.log(error);
          
        }
      )}
    })
  }


    //update the booking status
    updateBooking() {

      this._seat.updatSeat(this.seats).subscribe(
        (data:any)=>{
          this.seats = data;
          Swal.fire("Booking Status Updated","","success")
        },
        (error)=>{
          console.log(error);       
        }
      );
  
    }
  
    goBack() {
     this._location.back();
    }



}
