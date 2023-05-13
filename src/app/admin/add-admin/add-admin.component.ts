import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {


  constructor(
    private snack:MatSnackBar,
    private adminService: UserService
    ){}


    public admin = {
      username:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      password:'',
    
    }
  
    formSubmit() {
      if(this.admin.username=='' || this.admin.username == null ) {
        // alert("user name required!")
        this.snack.open('Username is required!!', 'OK', {
          duration: 3000
        });
        return;
      }
      if(this.admin.email=='' || this.admin.email == null ) {
        // alert("user name required!")
        this.snack.open('Email is required!!', 'OK', {
          duration: 3000
        });
        return;
      }
  
  
  this.adminService.addAdmin(this.admin).subscribe(
    (data)=>{
      Swal.fire({
        title: 'Register',
        text: 'Your account has been created successfully!',
        icon: 'success',
        confirmButtonText: 'Ok',
        
      }).then((restul)=>{
        if(restul.isConfirmed) {
          
           window.location.reload();
        }
      });
      
    }, (error) => {
      console.log(error);
      this.snack.open('Something is went wrong', 'OK', {
        duration: 3000
      });
    }
  );
  
    }

}
