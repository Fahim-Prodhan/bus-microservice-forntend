import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public login:LoginService,private router:Router){}

  logIn=false;
  user=null;

  searchResultNormal = false
  searchRestultSeller = false

  ngOnInit(): void {
    this.logIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    if(this.login.getUserRole()=="NORMAL"){
      this.searchResultNormal = true
    }
    if( this.login.getUserRole()=="SELLER"){
        this.searchRestultSeller = true;
    }
}

  public logout(){
    this.login.logout();
    this.logIn=false;
    this.user=null;
    window.location.href='/login'
  }


  

  redirectUser()
  {
    if(this.login.getUserRole()=="ADMIN")
    {
      this.router.navigate(['/admin/admin-dashboard'])
    }
    else if(this.login.getUserRole()=="SELLER"){
      this.router.navigate(['/seller/seller-dashboard']);
    }
    else
    {
      this.router.navigate(['/normal/normal-dashboard']);
    }
  }

}
