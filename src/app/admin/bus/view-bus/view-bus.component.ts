import { Component,OnInit } from '@angular/core';
import { AddBusComponent } from '../add-bus/add-bus.component';
import { MatDialog } from '@angular/material/dialog';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';
import { UpdateBusComponent } from '../update-bus/update-bus.component';


@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit{

constructor(
  private _dialog:MatDialog,
  private _bus:BusService,
  
  ) {}


  searchText:any
  pageSize =10
  page=1


public allBus = [
  {
  busId: "",
  busCode: "",
  busNumber: "",
  busName: ""
  }
];


ngOnInit(): void {
    this._bus.getAllBus().subscribe(
      (data:any)=>{
        this.allBus=data;
      },
      (erorr)=>{
        Swal.fire("Error","Error in loading data",'error')
      }
    )
}


   //pop up form to add bus
   openAddForm() {
    this._dialog.open(AddBusComponent,{
      width:'400px',
    })
  }


   //open update dialog
   openUpdateDialog(busId:any) {
    const dialogRef = this._dialog.open(UpdateBusComponent,{
      width:'400px',
      data:{busId}
    })

  }
  

//delete quiz
deleteBus(busId:any){
  Swal.fire(
    {
      icon:'info',
      title:'Are You Sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }
  ).then((result)=>{

    if(result.isConfirmed) {   
       this._bus.deleteBus(busId).subscribe(
        (data)=>{
          this.allBus = this.allBus.filter((quiz)=>quiz.busId != busId);
          Swal.fire("Deleted","Bus is deleted","success");
        },
      (error)=>{
        console.log(error);       
      }
    )}
  })

}

}
