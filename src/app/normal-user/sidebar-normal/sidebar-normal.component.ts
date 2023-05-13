import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-normal',
  templateUrl: './sidebar-normal.component.html',
  styleUrls: ['./sidebar-normal.component.css']
})
export class SidebarNormalComponent {
  constructor(public login: LoginService) {

  }
}
