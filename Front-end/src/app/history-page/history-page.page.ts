import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.page.html',
  styleUrls: ['./history-page.page.scss'],
})
export class HistoryPagePage implements OnInit {

  product = [];
  constructor() { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders(){
    if(!localStorage.orders){
      document.getElementById("histBody").style.visibility = "hidden";
      let child = document.createElement("h1");
      let childText = document.createTextNode("You're seeing this message because: You're not logged in.");
      child.appendChild(childText);
      document.getElementById("histBody").insertBefore(child, document.getElementById("check")).style.cssText = "visibility:visible; text-align: center;color: DodgerBlue;";
    }
    else{
      let cart: string = localStorage.getItem('orders');
      this.product = JSON.parse(cart);
      if(this.product.length === 0){
        document.getElementById("histBody").style.visibility = "hidden";
        let child = document.createElement("h1");
        let childText = document.createTextNode("You have not ordered anything. Go shop for your favorite products.");
        child.appendChild(childText);
        document.getElementById("histBody").insertBefore(child, document.getElementById("check")).style.cssText = "visibility:visible; text-align: center;color: DodgerBlue;";
      }
    }
  }
}
