import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.setCurrentComponent('contact');
  }

}
