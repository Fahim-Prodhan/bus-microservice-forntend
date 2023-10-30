import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-normal-routes',
  templateUrl: './normal-routes.component.html',
  styleUrls: ['./normal-routes.component.css']
})
export class NormalRoutesComponent implements OnInit{


  constructor(private _routeService:RouteService){}

  pageSize=10
  page = 1

  ngOnInit(): void {
      this._routeService.getAllRoutes().subscribe(
        (data:any)=>{
          this.scheduleData.routes = data;
           //sort with data
         this.scheduleData.routes.sort((a,b)=>{
          return new Date(b.date).getTime()-new Date(a.date).getTime();
        })
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }
  
  
    scheduleData ={
      scheduleId:'',
      bus:{
        busId:''
      },
      routes:[{
        routeId:'',
        scheduleId:'',
        departure:'',
        destination:'',
        time:'',
        price:'',
        date:''
      }]
    }
  



}
