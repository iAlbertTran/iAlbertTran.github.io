import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  increaseHeight = false;

  constructor(private _helperService: HelperService) { }

  ngOnInit() {

    this._helperService.setCurrentComponent('home');

    setTimeout(() => { 
      this.increaseHeight = true; 
    }, 3000)

  }

}
