import { Component, OnInit } from '@angular/core';

import {ApicallService} from 'src/app/apicall.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {

  member:any;
  constructor(private httpPost: ApicallService) {}

  ngOnInit() {
    if(localStorage.product){
      this.member = JSON.parse(localStorage.getItem('product'))
    }
  }

  order() {
    if(!localStorage.userid){
      alert("You are not logged in. Log In and Try again");
    }
    else{
      alert("Product added to cart. Go to your cart and confirm your order.");
      // Add the product in cart of user in database
      let newItem = 1;
      let tempprod =  JSON.parse(localStorage.getItem('product'));
      tempprod.quantity = 1;
      let tempcart = JSON.parse(localStorage.getItem('mycart'));
      for(let cartitem of tempcart){
        if(tempprod.oid === cartitem.oid){
          cartitem.quantity += 1;
          newItem = 0
          break
        }
      }
      if(newItem === 1){
        tempcart.push(tempprod)
      }
      localStorage.setItem('mycart', JSON.stringify(tempcart))
      let usernum = localStorage.getItem('usernumber');
      this.httpPost.fillCart(tempcart, usernum).subscribe();
      }
  }
}