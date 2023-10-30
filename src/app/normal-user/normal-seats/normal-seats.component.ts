import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LoaderControlService } from 'src/app/services/loader-control.service';
import { RouteService } from 'src/app/services/route.service';
import { SeatService } from 'src/app/services/seat.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-normal-seats',
  templateUrl: './normal-seats.component.html',
  styleUrls: ['./normal-seats.component.css']
})
export class NormalSeatsComponent implements OnInit{
  constructor(
    private _schedule:BusScheduleService,
    private _snak:MatSnackBar,
    private _customer: CustomerService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _user:UserService,
    private _busRoute: RouteService,
    private _seat:SeatService,
    private loaderControlService: LoaderControlService
  ){
    this.loaderControlService.setShowLoader(false);
  }

  isRouteSelected: boolean = false;
  click:boolean = false;
  totalPrice: number = 0;
  calculatedPrice: number = 0;
  selectedRouteIndex: number = 0;
  selectedSeatIds: any[] = [];
  selectedSeatInfo: any[] = [];
  public rowIndex: number[] = [1, 2, 3, 4];
    
 busRoute = {
  price:0
}

  ScheduleId:any
  scheduleData ={
    scheduleId:'',
    bus:{
      busId:'',
      busCode:''
    },
    routes:[{
      routeId:'',
      departure:'',
      destination:'',
      time:'',
      price:0
    }],
    seats:[{
      seatId:0,
      seatNo:'',
      booked:false,
      selected:false,
      ScheduleId:''
    }]
  }


  route={
    scheduleId:'',
    busId:'',
    departure:'',
    destination:'',
    time:'',
    price:'',
    date:''
  }

   // New Maintain part
   customers = {
    customerName:"",
    customerNumber:'',
    scheduleId:'',
    routeId:'',
    bookedSeats:'',
    totalPrice:0,
    userId:0
  }

  user = {
    id:0,
    firstName:'',
    lastName:'',
    phone:''
  }

  ngOnInit(): void {
  
    this.ScheduleId = this._route.snapshot.params['scheduleId']
    this.customers.scheduleId = this.ScheduleId
     //schedule Load
          this._schedule.getSchedule(this.ScheduleId).subscribe(
            (data:any)=>{
              this.scheduleData = data;
              console.log(this.scheduleData); 
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
    
  }


  selectSeat(seatId: any) {
    const index = this.selectedSeatIds.indexOf(seatId);

    if (index === -1) {
      // If not in the array and the maximum limit is not reached, add it.
      if (this.selectedSeatIds.length < 4) {
        this.selectedSeatIds.push(seatId);
        console.log('Selected Seat ID: ' + seatId);

        // Retrieve seat details and add them to selectedSeatInfo
        const seatDetails = this.scheduleData.seats.find(seat => seat.seatId === seatId);
        this.selectedSeatInfo.push(seatDetails);

        //total price
        this.customers.totalPrice = this.busRoute.price*this.selectedSeatInfo.length;
       
        // Update the bookedSeats property with seatNo values from selectedSeatInfo
        this.customers.bookedSeats = this.selectedSeatInfo.map(selectedSeat => selectedSeat.seatNo).join(', '); // Join selected seatNo values with a comma
      } else {
        console.log('Maximum 4 seats can be selected.');
        alert('Maximum 4 seats can be selected.');
      }
    } else {
      // If already in the array, remove it.
      this.selectedSeatIds.splice(index, 1);
      console.log('Deselected Seat ID: ' + seatId);

      // Find the index of the seat in selectedSeatInfo and remove it
      const selectedSeatIndex = this.selectedSeatInfo.findIndex(seat => seat.seatId === seatId);
      if (selectedSeatIndex !== -1) {
        this.selectedSeatInfo.splice(selectedSeatIndex, 1);
      }
 
      this.customers.totalPrice = this.busRoute.price*this.selectedSeatInfo.length;

      // Update the bookedSeats property with seatNo values from selectedSeatInfo
      this.customers.bookedSeats = this.selectedSeatInfo.map(selectedSeat => selectedSeat.seatNo).join(', '); // Join selected seatNo values with a comma
    }
  }

  isSelected(seatId: any): boolean {
    return this.selectedSeatIds.includes(seatId);
}

  
  onRouteSelectionChange() {
    this._busRoute.getRouteById(this.customers.routeId).subscribe(
      (data:any)=>{
        this.busRoute = data;
        this.customers.totalPrice = this.busRoute.price*this.selectedSeatInfo.length;
       
      },
      (error)=>{
        console.log(error);  
      }
    )
    this.click = true;
  
    
  }

  isBuyButtonEnabled(): boolean {
    // Check if all required fields are filled
    const isCustomerNameFilled = this.customers.customerName.trim() !== "";
    const isCustomerNumberFilled = this.customers.customerNumber.trim() !== "";
    // Check if at least one seat is selected
    const isSeatSelected = this.selectedSeatIds.length > 0;
    // Check if a route is selected
    this.isRouteSelected = this.customers.routeId !== '' && this.customers.routeId !== null && this.customers.routeId !== undefined;


    // Return true if all conditions are met
    return isCustomerNameFilled && isCustomerNumberFilled && isSeatSelected && this.isRouteSelected;
  }
  
  addCustomer() {
    // Check if all selected seats have a 'booked' value of false
    const allSeatsAvailable = this.selectedSeatInfo.every(seat => !seat.booked);
  
    if (this.customers.customerName.trim() === "" || this.customers.customerName.trim() === null) {
      this._snak.open('Customer Name is Required!', 'ok', {
        duration: 3000,
      });
    } else if (this.customers.customerNumber.trim() === "" || this.customers.customerNumber.trim() === null) {
      this._snak.open('Customer Number is Required!', 'ok', {
        duration: 3000,
      });
    } else if (!allSeatsAvailable) {
      Swal.fire("Error", "Some selected seats are already booked", "error");
    } else {
      // Update the seat booking status
      this._seat.updateSeatBookStatus(this.selectedSeatIds).subscribe(
        (data: any) => {
          console.log("Seat booking status updated successfully");
        },
        (error) => {
          console.log("Error updating seat booking status: ", error);
        }
      );
  
      // Add the customer
      this._customer.addCustomer(this.customers).subscribe(
        (data: any) => {
          Swal.fire("Successful", "Customer is added successfully", "success").then(() => {
            this._router.navigate(['/normal/tickets']);
          });
        },
        (error) => {
          console.log("Error adding customer: ", error);
          Swal.fire("Something went wrong", "Customer is not added", "error");
        }
      );
    }
  }
  
}




  

