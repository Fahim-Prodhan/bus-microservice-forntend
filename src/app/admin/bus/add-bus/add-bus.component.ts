import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {


  constructor(private _snack: MatSnackBar, private _bus:BusService){}

  bus = {
    busCode: "",
    busNumber: "",
    busName: ""
  }

  formSubmit(){
    if(this.bus.busName.trim()=='' || this.bus.busName==null) {
      this._snack.open("Bus Name Required!",'Ok',{
        duration:3000
      })
      return;
    }
    if(this.bus.busNumber.trim()=='' || this.bus.busNumber==null) {
      this._snack.open("Bus Number Required!",'Ok',{
        duration:3000
      })
      return;
    }

    // adding
    this._bus.addBus(this.bus).subscribe(
      (data:any)=>{
        Swal.fire("Success!!","Bus is add sucessfully", 'success').then((e)=>{
          window.location.reload();
        })
      },
      (error)=> {
        console.log(error);
        Swal.fire("Error!!","Bus is not add ", 'error')
      }
    )
  }


}
