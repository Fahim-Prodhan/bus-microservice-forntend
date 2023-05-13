import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-bus-list',
  templateUrl: './seller-bus-list.component.html',
  styleUrls: ['./seller-bus-list.component.css']
})
export class SellerBusListComponent {


  constructor(
    private _dialog:MatDialog,
    private _bus:BusService,
    
    ) {}
  
  
    searchText:any
    page=1
    pageSize=10
  
  
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
  
  
   
  
 
    
  
 
  
  }



