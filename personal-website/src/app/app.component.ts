import { Component, OnInit } from '@angular/core';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  openHamburgerMenu = false;

  constructor(private _helperService: HelperService){}

  ngOnInit(){
  }

  openMenu(){
    this.openHamburgerMenu = this.openHamburgerMenu ? false : true;
    
  }

  closeNavDrawer(){
    this.openHamburgerMenu = false;
  }
}
