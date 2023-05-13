import { Component , OnInit} from '@angular/core';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';

@Component({
  selector: 'app-normal-schedules',
  templateUrl: './normal-schedules.component.html',
  styleUrls: ['./normal-schedules.component.css']
})
export class NormalSchedulesComponent implements OnInit{
  filter: any;
  page=1
  searchText:any;
  pageSize = 30;

  constructor(
    private _schedule:BusScheduleService,
    ){}

    

  schedules =[ {
    scheduleId:'',
    busId:'',
    startAndEnd:'',
    date:'',
    bus:{
      busCode:'',
      busNumber:'',
      busName:''
    }
  }
]


  ngOnInit(): void {

    this._schedule.getAllSchedule().subscribe(
      (data:any)=>{
        this.schedules = data;

        //sort with data
        this.schedules.sort((a,b)=>{
          return new Date(a.date).getTime()-new Date(b.date).getTime();
        })
      },
      (error)=>{
        console.log(error);
        
      }
    )
      
  }



}
