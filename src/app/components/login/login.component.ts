import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'yourusername'
  password = ''
  errormessage ='Invalid Credentials'
  invalidcredentials = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleLogin(){
    //console.log(this.username);
    if(this.username==="myname" && this.password ==='123456')
    {
        this.router.navigate(['home']);
    }
    else{
      this.invalidcredentials = true
    }
  }

}
