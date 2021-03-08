import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  private getbestprod: string = "http://127.0.0.1:8000/api/products/best/";
  private getmenprod: string = "http://127.0.0.1:8000/api/products/men/";
  private getwomenprod: string = "http://127.0.0.1:8000/api/products/women/";
  private gethatprod: string = "http://127.0.0.1:8000/api/products/hat/";
  private adduserurl: string = "http://127.0.0.1:8000/api/main/add/";
  private checkuserurl: string = "http://127.0.0.1:8000/api/main/check/";
  private userdataurl: string = "http://127.0.0.1:8000/api/main/user/";
  private usercarturl: string = "http://127.0.0.1:8000/api/main/cartLis/";
  private cartaddurl: string = "http://127.0.0.1:8000/api/main/cartmodify/";
  private userordersurl: string = "http://127.0.0.1:8000/api/main/ordersmodify/";
  
  constructor(private http: HttpClient) { }

  getData(){
    // Get the current Best products.
    return this.http.get(this.getbestprod);
  }
  getMenData(){
    // Get the products for Men
    return this.http.get(this.getmenprod);
  }
  getWomenData(){
    // Get the products for Women
    return this.http.get(this.getwomenprod);
  }
  getHatsData(){
    // Get the Hats
    return this.http.get(this.gethatprod);
  }
  sendData(userData: object) {
    // Add new user in the database
    const body= userData;
    return this.http.post(this.adduserurl, body);
  }

  verifyData(user: object){
    // Check if the user exist in our database when he logs in.
    const body=JSON.stringify(user);
    return this.http.post(this.checkuserurl, body);
  }

  getLoggedUserInfo(token) {
    // Get all the information of the user who is currently logged in. This information will be used on profile page.
    const header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}` });
    const options = {
      headers: header,
   };
    return this.http.get(this.userdataurl, options);
  }

  getCartDetails(token){
    // Get the products in the user's cart.
    const header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}` });
    const options = {
      headers: header,
   };
    return this.http.get(this.usercarturl, options);
  }

  placeOrder(products:Array<Object>, usernumber){
    // Add the products to user's cart.
    const body= {'todo':'add', 'orders':products, 'usernumber': usernumber};
    return this.http.post(this.userordersurl, body);
  }

  fillCart(products:Array<Object>, usernumber){
    // Add the products to user's cart.
    const body= {'todo':'add', 'cart':products, 'usernumber': usernumber};
    return this.http.post(this.cartaddurl, body);
  }
}
