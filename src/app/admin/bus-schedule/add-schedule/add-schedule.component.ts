import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BusScheduleService } from 'src/app/services/bus-schedule.service';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit{

  constructor(
    private _bus:BusService,
    private _route:ActivatedRoute,
    private _location:Location,
    private _schedule:BusScheduleService,
    private _router:Router,
    private _snak:MatSnackBar
    ){}

  busId:any;

  schedule = {
    busId:"",
    startAndEnd:"",
    date:""
  }

  ngOnInit(): void {

    this.busId = this._route.snapshot.params['busId']
    this.schedule.busId = this.busId;

  }

  formSubmit(){

    if(this.schedule.startAndEnd.trim() == "" || this.schedule.startAndEnd.trim()==null) {
      this._snak.open('Start and End is Required!',"ok",{
        duration:3000,
      })
      return
    }
   

     //adding part
     this._schedule.addSchedule(this.schedule).subscribe(
      (data:any) =>{
        Swal.fire("Successful","Schedule is add Successfully", "success").then((e)=>{
          this._router.navigate(['/admin/schedule'])
        });
        this.schedule = {
          busId:"",
          startAndEnd:"",
          date:""
        }
      },
      (error) =>{
        console.log(error);
        Swal.fire("Something is went wrong","Schedule is not added","error")
        
      }
    )
  
  }

  goBack(){
    this._location.back();
  }

}
