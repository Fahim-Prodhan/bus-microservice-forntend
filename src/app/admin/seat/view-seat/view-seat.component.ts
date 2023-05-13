import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { AddRouteComponent } from '../../routes/add-route/add-route.component';
import { RouteService } from 'src/app/services/route.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-seat',
  templateUrl: './view-seat.component.html',
  styleUrls: ['./view-seat.component.css']
})
export class ViewSeatComponent implements OnInit{


  constructor(
    private _schedule:BusScheduleService,
    private _route:ActivatedRoute,
    private _mat:MatDialog,
    private _routeService:RouteService
    ){}

    // public rowIndex: number[] = [1, 2, 3, 4];

  ScheduleId:any
  scheduleData ={
    scheduleId:'',
    date:'',
    bus:{
      busId:'',
      busCode:''
    },
    routes:[{
      routeId:'',
      departure:'',
      destination:'',
      time:'',
      price:'',
      date:''
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
    date:'',
    time:'',
    price:'',
    
  }

  ngOnInit(): void {
      this.ScheduleId = this._route.snapshot.params['scheduleId']
      this.route.scheduleId = this.ScheduleId;
      
      this._schedule.getSchedule(this.ScheduleId).subscribe(
        (data:any)=>{
          this.scheduleData = data;          
          this.route.date = this.scheduleData.date; 
          this.route.busId = this.scheduleData.bus.busId;
          // console.log(data);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }

  openAddForm() {
    this._mat.open(AddRouteComponent,{
      width:"500px"
    })
  }

  addRoute(){
    this._routeService.addRoute(this.route).subscribe(
      (data:any)=>{
        this.route = data;
        Swal.fire("Successful","Schedule is added Successfully", "success").then((e)=>{
          window.location.reload();
        })
        
      },
      (error)=>{
        console.log(error);
        Swal.fire("Bus Id Has already schedule","Bus Id Has already Schedule","error")
        
      }
    )
  }


  deleteRoute(routeId:any) {
    Swal.fire(
      {
        icon:'info',
        title:'Are You Sure?',
        confirmButtonText:'Delete',
        showCancelButton:true
      }
    ).then((result)=>{
  
      if(result.isConfirmed) {
  
      
         this._routeService.deleteRoute(routeId).subscribe(
        (data:any)=> {
      
          this.scheduleData.routes = this.scheduleData.routes.filter((froute)=>froute.routeId != routeId);
      
          Swal.fire("Deleted","Bus is deleted","success")
        },
        (error)=>{
          console.log(error);
          
        }
      )}
    })
  
  }

  
}
