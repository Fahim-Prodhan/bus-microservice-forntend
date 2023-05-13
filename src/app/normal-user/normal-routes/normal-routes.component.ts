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
        price:''
      }]
    }
  



}
