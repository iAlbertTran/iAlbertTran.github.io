import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills = [
    {name: 'HTML', proficiency: 'Expert', fontAwesomeIcon: 'fab fa-html5'},
    {name: 'CSS', proficiency: 'Expert', fontAwesomeIcon: 'fab fa-css3-alt'},
    {name: 'JavaScript', proficiency: 'Expert', fontAwesomeIcon: 'fab fa-js-square'},
    {name: 'Angular', proficiency: 'Advanced', fontAwesomeIcon: 'fab fa-angular'},
    {name: 'Node.js', proficiency: 'Advanced', fontAwesomeIcon: 'fab fa-node'},
    {name: 'C#', proficiency: 'Intermediate', fontAwesomeIcon: 'devicon-csharp-plain'},
    {name: 'SQL', proficiency: 'Intermediate', fontAwesomeIcon: 'fas fa-code'},
    {name: 'Bootstrap', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-bootstrap-plain'},
    {name: 'jQuery', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-jquery-plain'},
    {name: 'Java', proficiency: 'Proficient', fontAwesomeIcon: 'fab fa-java'},
    {name: 'Swift', proficiency: 'Basic', fontAwesomeIcon: 'devicon-swift-plain'},
    {name: 'Linux / Unix CL', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-linux-plain'},
    {name: 'Git / Github', proficiency: 'Proficient', fontAwesomeIcon: 'fab fa-github'},
    {name: 'React', proficiency: 'Basic', fontAwesomeIcon: 'devicon-react-original'}

  ];
  constructor(private _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.setCurrentComponent('about');



  }
}
