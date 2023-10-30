import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  searchText:any

  constructor(
    private _user:UserService,
  ){}

  users=[{
    id:null,
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    authorities:[
      {
        authority:''
      }
    ]
  }]

  ngOnInit(): void {
    this._user.getAllUsers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
      
  }

deleteUser(id:any){
  Swal.fire(
    {
      icon:'info',
      title:'Are You Sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }
  ).then((result)=>{
    if(result.isConfirmed){
      this._user.deleteUser(id).subscribe(
        (data:any)=>{
          this.users = this.users.filter((u)=>u.id != id)
          Swal.fire("Deleted","User is deleted","success")
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }
  })
}

}
