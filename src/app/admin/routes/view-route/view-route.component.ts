import { Component,OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.css']
})
export class ViewRouteComponent implements OnInit{

  constructor(private _routeService:RouteService){}

  page=1
  pageSize = 10

ngOnInit(): void {
    this._routeService.getAllRoutes().subscribe(
      (data:any)=>{
        this.scheduleData.routes = data;
         //sort with data
         this.scheduleData.routes.sort((a,b)=>{
          return new Date(a.date).getTime()-new Date(b.date).getTime();
        })
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
      price:'',
      date:new Date
    }]
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
      
          Swal.fire("Deleted","Route is deleted","success")
        },
        (error)=>{
          console.log(error);
          
        }
      )}
    })
  
  }


}
