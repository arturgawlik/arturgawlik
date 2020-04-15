import { Component } from '@angular/core';
import { DrawService } from './directives/draw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drawZIndex = -1;
  toggleDrawBGColor = '#ff634700';

  constructor(public drawService: DrawService) {
  }

  toggleZIndex() {
    if (this.drawZIndex === -1) {
      this.drawZIndex = 1;
      this.toggleDrawBGColor = 'tomato';
    } else {
      this.drawZIndex = -1;
      this.toggleDrawBGColor = '#ff634700';
    }
  }

}
