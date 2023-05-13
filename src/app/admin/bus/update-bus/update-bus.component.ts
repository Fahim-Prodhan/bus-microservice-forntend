import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';


interface Bus {
  busId:any,
  busName:any,
  busNumber:any,
  busCode:any
}

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit{

bus:Bus = {
  busId:'',
    busName:'',
    busNumber:'',
    busCode:''
}

  constructor(
    private _bus:BusService,
    @Inject(MAT_DIALOG_DATA) public data:{busId:any},
    private dialogRef:MatDialogRef<UpdateBusComponent>,
  ){
    this._bus.getBus(data.busId).subscribe((D:any)=>{
      this.bus = D
    })
  }

  ngOnInit(): void {
      
  }


  updateBus() {
    this._bus.updateBus(this.bus).subscribe(
      (data:any)=>{
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
