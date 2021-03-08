import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  left_links = ['home', 'men', 'women', 'hats'];
  left_links_page = ["/landing-page", "/mens-page", "/womens-page", "/hat-page"];
  right_links = ['Search', 'Privacy Policy', 'Terms & Conditions', 'Return & Refunds'];
  right_links_page = ["/", "/", "/", ""];
  placeholderText: string = "Email Here";
  constructor() { }

  ngOnInit() {}

}
