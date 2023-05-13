import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent {

  
  constructor(
    private snack:MatSnackBar,
    private sellerService: UserService
    ){}


    public seller = {
      username:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      password:'',
    
    }
  
    formSubmit() {
      if(this.seller.username=='' || this.seller.username == null ) {
        // alert("user name required!")
        this.snack.open('Username is required!!', 'OK', {
          duration: 3000
        });
        return;
      }
      if(this.seller.email=='' || this.seller.email == null ) {
        // alert("user name required!")
        this.snack.open('Email is required!!', 'OK', {
          duration: 3000
        });
        return;
      }
  
  
  this.sellerService.addSeller(this.seller).subscribe(
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
