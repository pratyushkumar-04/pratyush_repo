import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
    title = 'company-portal';
    adminname:string='admin';
    adminpwd:string='123';
    user1name:string='ayush';
    user1pwd:string='ayush@123';
    user2name:string='chetan';
    user2pwd:string='chetan@987';
  
    name:string='';
    pwd:string='';
    errorMessage:string='';
    islogedin:boolean=false;
  
   onLogin():void{ if(this.name===this.adminname && this.pwd===this.adminpwd)
    {
      this.islogedin = true;
      this.router.navigate(['/admin']);
    }
    else if((this.name===this.user1name &&this.pwd===this.user1pwd) || (this.name===this.user2name && this.pwd===this.user2pwd))
    {
          this.islogedin = true;
      this.router.navigate(['/employee']);
    }
    else{
      this.errorMessage='Invalid Credentials';
    
    setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      }
  }

}
