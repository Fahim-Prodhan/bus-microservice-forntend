import { Component,OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.css']
})
export class SearchByDateComponent implements OnInit{
  departureOptions: string[]=[]
  destinationOptions: string[]=[];
  date = '';
  table=false

  routes=[{
    routeId:'',
    scheduleId:'',
    departure:'',
    destination:'',
    time:'',
    price:'',
    date:new Date,
    bus:{
      busName:'',
      busNumber:''
    }
  }]

  constructor(
    private _route:RouteService,
    ){}

    ngOnInit(): void {
      this._route.getAllRoutes().subscribe(
        (data:any)=>{
          this.routes = data;
          this.departureOptions = this.routes.map(route => route.departure);
          this.destinationOptions = this.routes.map(route => route.destination)
          // console.log(this.departureOptions);
          
        },
        (error)=>{
          console.log(error);    
        }
      );
    }

    searchRotues(){
      const searchDate = new Date(this.date);
      this._route.serachbyDate(searchDate).subscribe(
        (data:any)=>{
          this.routes = data;
          this.table=true
          // console.log(data); 
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }

}
