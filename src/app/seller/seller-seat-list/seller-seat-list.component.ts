import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-seller-seat-list',
  templateUrl: './seller-seat-list.component.html',
  styleUrls: ['./seller-seat-list.component.css']
})
export class SellerSeatListComponent implements OnInit{

  constructor(
    private _schedule:BusScheduleService,
    private _route:ActivatedRoute,
  
    private _routeService:RouteService
    ){}

    public rowIndex: number[] = [1, 2, 3, 4];

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
      price:''
    }],
    seats:[{
      seatId:0,
      seatNo:'',
      booked:null,
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

  ngOnInit(): void {
      this.ScheduleId = this._route.snapshot.params['scheduleId']
      this.route.scheduleId = this.ScheduleId;
      
      this._schedule.getSchedule(this.ScheduleId).subscribe(
        (data:any)=>{
          this.scheduleData = data;          
          console.log(data);
          this.route.busId = this.scheduleData.bus.busId;
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }


  

}
