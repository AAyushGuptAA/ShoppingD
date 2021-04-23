import { Component, OnInit } from '@angular/core';
import {ApicallService} from 'src/app/apicall.service'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {

  product = [];
  cartTotal: number = 0;
  constructor(private httpPost: ApicallService) {}

  ngOnInit() {
  this.getCartItems()
  }

  backToShopping(){
    // Navigate to previous page.
    window.history.back();
  }

  getCartItems(){
    if(!localStorage.mycart){
      document.getElementById("cartBody").style.visibility = "hidden";
      let child = document.createElement("h1");
      let childText = document.createTextNode("You're seeing this message because: You're not logged in.");
      child.appendChild(childText);
      document.getElementById("cartBody").insertBefore(child, document.getElementById("child")).style.cssText = "visibility:visible; text-align: center;color: navy;";
    }
    else{
      let cart: string = localStorage.getItem('mycart');
      this.product = JSON.parse(cart);
      if(this.product.length === 0){
        document.getElementById("cartBody").style.visibility = "hidden";
        let child = document.createElement("h1");
        let childText = document.createTextNode("Your cart is empty. Shop and add your favorite products to cart.");
        child.appendChild(childText);
        document.getElementById("cartBody").insertBefore(child, document.getElementById("child")).style.cssText = "visibility:visible; text-align: center;color: navy;";
      }
    }
    for(let prods of this.product){
      this.cartTotal += parseInt(prods.cost)*parseInt(prods.quantity)
    }
  }

  reduceq(obj){
    if(obj.quantity > 1){
      obj.quantity -= 1;
      this.cartTotal -= parseInt(obj.cost)
    }
    let tempcart = JSON.parse(localStorage.getItem('mycart'));
    for(let item of tempcart){
      if(item.oid == obj.oid){
        item.quantity = obj.quantity
        break
      }
    }
    localStorage.setItem('mycart', JSON.stringify(tempcart));
    let usernum = localStorage.getItem('usernumber');
    this.httpPost.fillCart(tempcart, usernum).subscribe();
  }

  incrementq(obj){
    obj.quantity += 1;
    this.cartTotal += parseInt(obj.cost)
    let tempcart = JSON.parse(localStorage.getItem('mycart'));
    for(let item of tempcart){
      if(item.oid == obj.oid){
        item.quantity = obj.quantity
        break
      }
    }
    localStorage.setItem('mycart', JSON.stringify(tempcart))
    let usernum = localStorage.getItem('usernumber');
    this.httpPost.fillCart(tempcart, usernum).subscribe();
  }

  OrderCart(){
    alert("Order Successful! Thank you for purchasing");
    // Add the product in cart of user in database
    let tempcart = JSON.parse(localStorage.getItem('mycart'));
    let temporders = JSON.parse(localStorage.getItem('orders'));
    // localStorage.setItem('orders', JSON.stringify(tempcart))
    for(let cartitem of tempcart){
      temporders.push(cartitem);
    }
    tempcart = [];
    localStorage.setItem('mycart', JSON.stringify(tempcart))
    localStorage.setItem('orders', JSON.stringify(temporders))
    let usernum = localStorage.getItem('usernumber');
    this.httpPost.placeOrder(temporders, usernum).subscribe();
  }
}