import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service';
import {Router} from '@angular/router'

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
          this.cardValues.push({
            cost: item.cost,
            title: item.title,
            imgsrc: "http://127.0.0.1:8000/static/Men/" + item.src,
            oid: item.ItemId,
            oDetails: item.Details,
            popularity: item.pindex
          });
      }
      for(let item of res.hats.women){
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