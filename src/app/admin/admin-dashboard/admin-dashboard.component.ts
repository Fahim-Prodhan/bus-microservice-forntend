import { Component,OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  constructor(private login:LoginService, private _dash:AdminDashboardService){}

  customerCount:any
  busCount:any
  scheduleCount:any
  userCount:any
  seatCount:any
  routeCount:any


  ngOnInit(): void {

    // customer count
      this._dash.getCountOfCustomers().subscribe(
        (data:any)=> {
          this.customerCount = data;
        },
        (error)=>{
          console.log(error);
          
        }
      )

      //bus Count
      this._dash.getCountOfBusses().subscribe(
        (data:any)=> {
          this.busCount = data;
        },(error)=>{
          console.log(error);
          
        }
      )
      //bus schedule
      this._dash.getCountOfSchedule().subscribe(
        (data:any)=> {
          this.scheduleCount = data;
        },(error)=>{
          console.log(error);
          
        }
      )

      //bus User
      this._dash.getCountOfUsers().subscribe(
        (data:any)=> {
          this.userCount = data;
        },(error)=>{
          console.log(error);
          
        }
      )
      //bus Seats
      this._dash.getCountOfSeats().subscribe(
        (data:any)=> {
          this.seatCount = data;
        },(error)=>{
          console.log(error);
          
        }
      )

      //routes 
      this._dash.getCountOfRoute().subscribe(
        (data:any)=>{
          this.routeCount = data;
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }


}
