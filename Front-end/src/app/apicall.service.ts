import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  private getbestprod: string = environment.server_url + "/products/best/";
  private getmenprod: string = environment.server_url + "/products/men/";
  private getwomenprod: string = environment.server_url + "/products/women/";
  private gethatprod: string = environment.server_url + "/products/hat/";
  private adduserurl: string = environment.server_url + "/main/add/";
  private checkuserurl: string = environment.server_url + "/main/check/";
  private userdataurl: string = environment.server_url + "/main/user/";
  private usercarturl: string = environment.server_url + "/main/cartLis/";
  private cartaddurl: string = environment.server_url + "/main/cartmodify/";
  private userordersurl: string = environment.server_url + "/main/ordersmodify/";
  
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
