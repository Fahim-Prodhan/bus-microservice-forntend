import { Component,OnInit,ViewChild} from '@angular/core';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { UpdateBusComponent } from '../../bus/update-bus/update-bus.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateScheduleComponent } from '../update-schedule/update-schedule.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit{

@ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  filter: any;
  page=1
  searchText:any;
  pageSize = 30;

  constructor(
    private _schedule:BusScheduleService,
    private _mat:MatDialog,
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
    //delete schedule
    deleteSchedule(scheduleId:any) {
      Swal.fire(
        {
          icon:'info',
          title:'Are You Sure?',
          confirmButtonText:'Delete',
          showCancelButton:true
        }
      ).then((result)=>{
    
        if(result.isConfirmed) {
    
        
           this._schedule.deleteSchedule(scheduleId).subscribe(
          (data:any)=> {
        
            this.schedules = this.schedules.filter((schedule)=>schedule.scheduleId != scheduleId);
        
            Swal.fire("Deleted","Bus is deleted","success")
          },
          (error)=>{
            console.log(error);
            
          }
        )}
      })
    
    }
  


    // open update schedule form
    openUpdateForm (scheduleId:any) {
      const dialogRef = this._mat.open(UpdateScheduleComponent,{
         width:"500px",
         data:{scheduleId}
       })
     }

}
