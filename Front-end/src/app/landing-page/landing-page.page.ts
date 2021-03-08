import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ApicallService} from 'src/app/apicall.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  cardValues:any = [];
  coverImg: string;
  constructor(private result: ApicallService, private router: Router) { }

  ngOnInit(): void {
    this.result.getData().subscribe((res:any) => {
      for(let product of res.best){
        this.cardValues.push({
          cost: product.cost,
          title: product.title,
          imgsrc: "http://127.0.0.1:8000/static/Best_Sellers/" + product.src
        });
      }
      this.coverImg = this.cardValues[res.best.length - 1].imgsrc;
      // Find a better alternative to above line
    });
  }
  displayProd(prodData) {
    localStorage.setItem('product', JSON.stringify(prodData))
    this.router.navigateByUrl('/product-page');
  }
}