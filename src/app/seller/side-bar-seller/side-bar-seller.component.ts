import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar-seller',
  templateUrl: './side-bar-seller.component.html',
  styleUrls: ['./side-bar-seller.component.css']
})
export class SideBarSellerComponent {

  constructor(public login: LoginService) {

  }

}
