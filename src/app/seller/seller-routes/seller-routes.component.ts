import { Component,OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-seller-routes',
  templateUrl: './seller-routes.component.html',
  styleUrls: ['./seller-routes.component.css']
})
export class SellerRoutesComponent implements OnInit{

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
        departure:'',
        destination:'',
        time:'',
        price:''
      }]
    }
  


}
