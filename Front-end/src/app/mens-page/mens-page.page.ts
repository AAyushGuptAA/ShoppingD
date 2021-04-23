import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service';
import {Router} from '@angular/router'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mens-page',
  templateUrl: './mens-page.page.html',
  styleUrls: ['./mens-page.page.scss'],
})
export class MensPagePage implements OnInit {

  cardValues = [];
  // categories = ["Jackets", "Suits", "Hats"];
  // color = ["All", "Black", "White", "Navy Blue"];
  // sortBy = ["Popularity", "Cost", "Stock"];
  // moreItems = ["Jackets", "Suits", "Hats"];
  constructor(private result: ApicallService, private router: Router) { }

  ngOnInit() {
    this.result.getMenData().subscribe((res:any) => {
      for(let item of res.hats){
          this.cardValues.push({
            cost: item.cost,
            title: item.title,
            imgsrc: environment.server_url + "/static/Men/" + item.src,
            oid: item.ItemId,
            oDetails: item.Details,
            popularity: item.pindex
          });
        }
      for(let item of res.jackets){
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: environment.server_url + "/static/Men/" + item.src,
          oid: item.ItemId,
          oDetails: item.Details,
          popularity: item.pindex
        });
      }
      for(let item of res.suits){
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: environment.server_url + "/static/Men/" + item.src,
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
