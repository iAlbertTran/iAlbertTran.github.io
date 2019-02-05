import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills = [];
  tempSkills = [
    {name: 'HTML', proficiency: 'Expert', fontAwesomeIcon: 'devicon-html5-plain'},
    {name: 'CSS', proficiency: 'Expert', fontAwesomeIcon: 'devicon-css3-plain'},
    {name: 'JavaScript', proficiency: 'Expert', fontAwesomeIcon: 'devicon-javascript-plain'},
    {name: 'Angular', proficiency: 'Advanced', fontAwesomeIcon: 'devicon-angularjs-plain'},
    {name: 'Node.js', proficiency: 'Advanced', fontAwesomeIcon: 'devicon-nodejs-plain'},
    {name: 'C#', proficiency: 'Intermediate', fontAwesomeIcon: 'devicon-csharp-plain'},
    {name: 'SQL', proficiency: 'Intermediate', fontAwesomeIcon: 'devicon-devicon-plain'},
    {name: 'Bootstrap', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-bootstrap-plain'},
    {name: 'jQuery', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-jquery-plain'},
    {name: 'Java', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-java-plain'},
    {name: 'Swift', proficiency: 'Basic', fontAwesomeIcon: 'devicon-swift-plain'},
    {name: 'Linux / Unix CL', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-linux-plain'},
    {name: 'Git / Github', proficiency: 'Proficient', fontAwesomeIcon: 'devicon-github-plain'},
    {name: 'React', proficiency: 'Basic', fontAwesomeIcon: 'devicon-react-original'}

  ];

  loadProficiencyBar = false;

  constructor(public _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.setCurrentComponent('about');

    //add in the skils one by one to have a stagger naimation effect
    setInterval(() =>{
      if(this.tempSkills.length > 0)
        this.skills.push(this.tempSkills.shift());
    }, 100);

    setTimeout(() => {
      this.loadProficiencyBar = true;
      console.log(this.loadProficiencyBar);
    }, 1750);


  }
}
