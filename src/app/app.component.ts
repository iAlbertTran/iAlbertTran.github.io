import { Component, OnInit } from '@angular/core';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  openHamburgerMenu = false;
  moveToHome = false;
  moveToAbout = false;
  moveToPortfolio = false;
  moveToConnect = false;
  constructor(public _helperService: HelperService){}

  ngOnInit(){
  }

  openMenu(){
    this.openHamburgerMenu = this.openHamburgerMenu ? false : true;
    
  }

  closeNavDrawer(){
    this.openHamburgerMenu = false;
  }

  moveCaratTo(link: string){
    this.clearCarat();

    switch(link){
      case 'home':
        this.moveToHome = true;
        break;
      case 'about':
        this.moveToAbout = true;
        break;
      case 'portfolio':
        this.moveToPortfolio = true;
        break;
      case 'connect':
        this.moveToConnect = true;
        break;
    }
  }

  clearCarat(){
    this.moveToHome = false;
    this.moveToAbout = false;
    this.moveToPortfolio = false;
    this.moveToConnect = false;
  }
}
