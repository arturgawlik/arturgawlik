import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CvComponent } from './components/cv/cv.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DrawDirective } from './directives/draw.directive';
import { DrawService } from './directives/draw.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    CvComponent,
    DrawDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [
    DrawService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
