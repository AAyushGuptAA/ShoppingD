import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service'

import {Router} from '@angular/router'

@Component({
  selector: 'app-womens-page',
  templateUrl: './womens-page.page.html',
  styleUrls: ['./womens-page.page.scss'],
})
export class WomensPagePage implements OnInit {

  cardValues = [];
  // categories = ["Jackets", "Tops", "Hats"];
  // color = ["All", "Black", "White", "Navy Blue"];
  // sortBy = ["Popularity", "Cost", "Stock"];
  // moreItems = ["Jackets", "Tops", "Hats"];
  constructor(private result: ApicallService,  private router: Router) { }

  ngOnInit() {
    this.result.getWomenData().subscribe((res:any) => {
      // console.log(res);
      for(let item of res.hats){
          this.cardValues.push({
            cost: item.cost,
            title: item.title,
            imgsrc: "http://127.0.0.1:8000/static/Women/" + item.src,
            oid: item.ItemId,
            oDetails: item.Details,
            popularity: item.pindex
          });
        }
      for(let item of res.jackets){
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: "http://127.0.0.1:8000/static/Women/" + item.src,
          oid: item.ItemId,
          oDetails: item.Details,
          popularity: item.pindex
        });
      }
      for(let item of res.tops){
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: "http://127.0.0.1:8000/static/Women/" + item.src,
          oid: item.ItemId,
          oDetails: item.Details,
          popularity: item.pindex
        });
      }
      this.cardValues.sort((a,b)=> b.popularity - a.popularity);
    });
  }

  displayProd(prodData) {
    localStorage.setItem('product', JSON.stringify(prodData))
    this.router.navigateByUrl('/product-page');
  }
}