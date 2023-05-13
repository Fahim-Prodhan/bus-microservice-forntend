import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';

interface Schedule {
  scheduleId:any,
  
  startAndEnd:any
  date:any,
  bus:{
    busId:any
  }
  
}

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit{



  schedule:Schedule = {
    scheduleId:"",
    startAndEnd:'',
    date:"",
    bus:{
      busId:''
    }
    }
  
    busses = 
    [
      {
      busId:"",
      busNumber:"",
      busName:"",
      busCode:''
      
      }
   ]
  

   constructor(
    private _schedule:BusScheduleService,
    private dialogRef:MatDialogRef<UpdateScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{scheduleId:any},
    private _bus:BusService,
  
  ){
   this._schedule.getSchedule(data.scheduleId).subscribe(
    (data:any)=>{
      this.schedule=data;
    })
  }
  ngOnInit(): void {
    this._bus.getAllBus().subscribe(
      (data:any) => {
        this.busses = data;
        
      }
    )
}


  updateSchedule(){
    this._schedule.updateSchedule(this.schedule).subscribe((data:any)=>{
      Swal.fire("Success!!","Bus is Updated sucessfully", 'success').then((e)=>{
        window.location.reload();
      })
      this.dialogRef.close();
    },
    (error) =>{
      console.log(error);
        Swal.fire("Error!!","Error! Bus can't update ", 'error')
      
    }
    )
  }



}
