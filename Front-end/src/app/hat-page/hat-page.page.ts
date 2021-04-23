import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service';
import {Router} from '@angular/router'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hat-page',
  templateUrl: './hat-page.page.html',
  styleUrls: ['./hat-page.page.scss'],
})
export class HatPagePage implements OnInit {

  cardValues = [];
  // categories = ["Men", "Women"];
  // color = ["All", "Black", "White", "Navy Blue"];
  // sortBy = ["Popularity", "Cost", "Stock"];

  constructor(private result: ApicallService, private router: Router) { }

  ngOnInit() {
    this.result.getHatsData().subscribe((res:any) => {
      for(let item of res.hats.men){
        // if(localStorage.orders){
        //   let temporders = JSON.parse(localStorage.getItem('orders'));
        //   for(let prods of temporders){
        //         if(prods.oid==item.ItemId){
        //           item.pindex += 1
        //         }
        //       }
        //     }
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: environment.server_url + "/static/Men/" + item.src,
          oid: item.ItemId,
          oDetails: item.Details,
          popularity: item.pindex
        });
      }
      for(let item of res.hats.women){
        // if(localStorage.orders){
        //   let temporders = JSON.parse(localStorage.getItem('orders'));
        //   for(let prods of temporders){
        //         if(prods.oid==item.ItemId){
        //           item.pindex += 1
        //         }
        //       }
        //     }
        this.cardValues.push({
          cost: item.cost,
          title: item.title,
          imgsrc: environment.server_url + "/static/Women/" + item.src,
          oid: item.ItemId,
          oDetails: item.Details,
          popularity: item.pindex
        });
      }
      this.cardValues.sort((a,b)=> b.popularity - a.popularity);
    });
  }

  // sortitems(){
  //   var DropdownList = (document.getElementById("selectList")) as HTMLSelectElement;
  //   if(DropdownList.selectedIndex == 1){
  //   this.cardValues.sort((a,b)=> b.popularity - a.popularity);
  //   // window.location.reload();
  //   // alert("Sort by popularity");
  //   }
  // }

  displayProd(prodData) {
    localStorage.setItem('product', JSON.stringify(prodData))
    this.router.navigateByUrl('/product-page');
  }
}