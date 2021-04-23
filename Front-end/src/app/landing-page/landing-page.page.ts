import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ApicallService} from 'src/app/apicall.service';
import { environment } from 'src/environments/environment';

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
        if(localStorage.orders){
          let temporders = JSON.parse(localStorage.getItem('orders'));
          for(let prods of temporders){
                if(prods.oid==product.ItemId){
                  product.pindex += 1
                }
              }
            }
        this.cardValues.push({
          cost: product.cost,
          title: product.title,
          imgsrc: environment.server_url + "/static/Best_Sellers/" + product.src,
          oid: product.ItemId,
          oDetails: product.Details,
          popularity: product.pindex
        });
      }
      this.cardValues.sort((a,b)=> b.popularity - a.popularity);
      this.coverImg = this.cardValues[res.best.length - 1].imgsrc;
      // Find a better alternative to above line
    });
  }
  displayProd(prodData) {
    localStorage.setItem('product', JSON.stringify(prodData))
    this.router.navigateByUrl('/product-page');
  }
}