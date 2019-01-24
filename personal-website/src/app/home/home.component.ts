import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  startRotateAnimation = false;
  increaseHeight = false;
  increaseWidth = false;

  constructor(private _helperService: HelperService) { }

  ngOnInit() {

    this._helperService.setCurrentComponent('home');

    setTimeout(() => { 
      this.increaseWidth = true;
    }, 2000);

    setTimeout(() => { 
      this.increaseHeight = true; 
    }, 3000);
    
    setTimeout(() => { this.startRotateAnimation = true; }, 4000);

  }

}
