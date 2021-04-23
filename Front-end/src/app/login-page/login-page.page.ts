import { Component, OnInit } from '@angular/core';

import {ApicallService} from 'src/app/apicall.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  inputTypes = ["email", "password"];
  placeholderText = ["Email ID", "Password"];
  UserInfo = {
    "Email ID": "",
    "Password": ""
  };
  constructor(private httpPost: ApicallService, private router: Router) { }

  ngOnInit() {
  }

  verifyUser(){
    this.httpPost.verifyData(this.UserInfo).subscribe(data => {
      if(data["status"] == "OK"){
        this.router.navigateByUrl('/landing-page');
        localStorage.setItem('usernumber', data["token"]);
        localStorage.setItem('userid', data["Name"]);
        this.httpPost.getCartDetails(data["token"]).subscribe(data => {
          if(data["data"] !== undefined){
            localStorage.setItem('mycart', JSON.stringify(data["data"]["Cart"]))
            localStorage.setItem('orders', JSON.stringify(data["data"]["Orders"]))
          }
        });
      }
      else{
        alert("You're password or emailId is incorrect");
      }
    });    
  }
}
