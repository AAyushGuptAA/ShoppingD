import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.page.html',
  styleUrls: ['./demo-page.page.scss'],
})
export class DemoPagePage implements OnInit {

  link = "";
  constructor(private result: ApicallService) { }

  ngOnInit() {
    this.result.reqDemo().subscribe(res =>{
      this.link = environment.server_url + "/static/" + res["src"];
    })
  }

}
