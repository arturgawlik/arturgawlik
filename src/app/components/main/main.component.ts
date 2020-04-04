import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // hrefArray = 'mailto:artur.gawlik@icloud.com';
  private hrefArray = ['m', 'a', 'i', 'l', 't', 'o', ':', 'a', 'r', 't', 'u', 'r', '.', 'g', 'a', 'w', 'l', 'i', 'k', '@', 'i', 'c', 'l', 'o', 'u', 'd', '.', 'c', 'o', 'm']

  
  get href() {
    return this.hrefArray.join('');
  }

  constructor() { }

  ngOnInit() {
  }

}
