import { Component,OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-normal-dashboard',
  templateUrl: './normal-dashboard.component.html',
  styleUrls: ['./normal-dashboard.component.css']
})
export class NormalDashboardComponent implements OnInit{


  constructor(
    private login:LoginService, 
    private _dash:AdminDashboardService,
    private _user:UserService,
    private _customer:CustomerService
    ){}

  customerCount:any
  busCount:any
  scheduleCount:any
  userCount:any
  seatCount:any
  routeCount:any
  ticketCount:any

  user = {
    id:0
  }


  ngOnInit(): void {

    //tickets counts
    this._user.getCurrentUser().subscribe(
      (data:any)=>{
        this.user = data;
        //get customer of the current user
        this._customer.countTicktsOfCurrentUser(this.user.id).subscribe(
          (data:any)=> {
            this.ticketCount = data;
          },
          (error) =>{
            console.log(error);
            
          }
        )
      },
      (error)=>{
        console.log(error);
        
      }
    )
    

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
