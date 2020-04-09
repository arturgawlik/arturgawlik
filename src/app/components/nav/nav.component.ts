import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  smallMenuOpened = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.smallMenuOpened = false;
      }
  });
  }

  toggleSmallMenuOpen() {
    this.smallMenuOpened = !this.smallMenuOpened;
  }

}
