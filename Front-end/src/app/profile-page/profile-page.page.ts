import { Component, OnInit } from '@angular/core';

import {ApicallService} from 'src/app/apicall.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  inputTypes = ["text", "email", "text"];
  values = [];
  constructor(private httpPost: ApicallService) { }

  ngOnInit() {
    let usertoken:string = localStorage.getItem("usernumber");
    this.httpPost.getLoggedUserInfo(usertoken).subscribe(data => {
      if(data["data"] !== undefined){
        this.values.push(data["data"]["Name"]);
        this.values.push(data["data"]["Email ID"]);
        this.values.push(data["data"]["Mobile Number"]);
      }
      else{
        document.getElementById("probody").style.visibility = "hidden";
        let child = document.createElement("h1");
        let childText = document.createTextNode("Looks like you're not Logged In. Log In and try again");
        child.appendChild(childText);
        document.getElementById("probody").insertBefore(child, document.getElementById("first")).style.cssText = "visibility:visible; text-align: center;color: red;";
      }
    });
  }
}
