import { Component } from '@angular/core';

import {ApicallService} from 'src/app/apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputTypes = ["text", "email", "password", "text"];
  placeholderText = ["Name", "Email ID", "Password", "Mobile Number"];
  CustomerInfo = {
    "Name": "",
    "Email ID": "",
    "Password": "",
    "Mobile Number": "",
    "Cart": [],
    "Orders": []
  };

  constructor(private httpPost: ApicallService) {}

  addUser(){
    this.httpPost.sendData(this.CustomerInfo).subscribe();
  }
}
