import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-routes-search',
  templateUrl: './routes-search.component.html',
  styleUrls: ['./routes-search.component.css']
})
export class RoutesSearchComponent implements OnInit {

  myControl = new FormControl('');
  fiteredOptions!: Observable<string[]>;
  fiteredOptionsDestination!: Observable<string[]>;
  departureOptions: string[]=[]
  destinationOptions: string[]=[];
  
  departure: any;
  destination: any;
  date = '';
  table=false

    routes=[{
      routeId:'',
      scheduleId:'',
      departure:'',
      destination:'',
      time:'',
      price:'',
      date:new Date
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



   //departure filter
      this.fiteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value: any) => {
          if (this.departureOptions.length > 0) {
            return this._filterDeparture(value);
          } else {
            return [];
          }
        })
      );


// destination filter
      this.fiteredOptionsDestination = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value: any) => {
          if (this.destinationOptions.length > 0) {
            return this._filterDestination(value);
          } else {
            return [];
          }
        })
      );

  }



  private _filterDeparture(value:string):string[]{
    const filterValue = value.toLowerCase()
    if (this.departureOptions) {
      return this.departureOptions
      .filter((opt, index, self) => self.indexOf(opt) === index)//remove the repeat value
      .filter(opt=> opt.toLowerCase().includes(filterValue))
    } else {
      return [];
    }
  }



  private _filterDestination(value:string):string[]{
    const filterValue = value.toLowerCase()
    if (this.destinationOptions) {
      return this.destinationOptions
      .filter((opt, index, self) => self.indexOf(opt) === index)//remove the repeat value
      .filter(opt=> opt.toLowerCase().includes(filterValue))
    } else {
      return [];
    }
  }



  selectDeparture(departure:any){
    // console.log(departure);
    
  }



  searchRotues(){
    const searchDate = new Date(this.date);
    this._route.searchRoutes(this.departure,this.destination,searchDate).subscribe(
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



