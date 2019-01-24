import { Component } from '@angular/core';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  openHamburgerMenu = false;

  constructor(private _helperService: HelperService){}

  openMenu(){
    this.openHamburgerMenu = this.openHamburgerMenu ? false : true;
  }
}
