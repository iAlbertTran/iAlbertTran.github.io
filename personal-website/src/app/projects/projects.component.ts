import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  showFunkollection = false;
  showWeather = false;
  showCheckers = false;

  constructor(private _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.setCurrentComponent('portfolio');
  }

  showProject(project: string){
    this.showCheckers = false;
    this.showFunkollection = false;
    this.showWeather = false;

    switch(project){
      case 'funkollection':
        this.showFunkollection = true;
        break;
      case 'weather':
        this.showWeather = true;
        break;
      case 'checkers':
        this.showCheckers = true;
        break;
    }
  }

}
