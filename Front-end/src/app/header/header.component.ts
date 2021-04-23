import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  links = ['home', 'men', 'women', 'hats'];
  page = ["/landing-page", "/mens-page", "/womens-page", "/hat-page"];
  Text = this.headfun();
  link
  constructor() { }

  ngOnInit() {
  }
  headfun(){
    if(localStorage.userid){
      this.link = "javascript:void(0)"
      return "Hi " + localStorage.getItem('userid');
    }
    else{
      this.link = "/login-page"
      return "Log IN"
    }
  }
  display(){
    let element = document.getElementById("profile");
    let child = document.getElementById("list")
    child.style.visibility = "visible";
    element.appendChild(child);
  }
  hide(){
    let element = document.getElementById("profile");
    element.removeChild(element.childNodes[0]);
  }
  logout(){
    if(localStorage.usernumber){
      localStorage.removeItem('usernumber');
      localStorage.removeItem('userid');
      localStorage.removeItem('product');
      localStorage.removeItem('mycart');
      localStorage.removeItem('orders');      
    }
  }
}
