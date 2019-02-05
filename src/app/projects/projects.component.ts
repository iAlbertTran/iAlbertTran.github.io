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


  individualProjects = [
    {
      title: 'Funkollection',
      section_one_text: `Funkollection allows users to track Funko's Pop! Vinyls by providing access to a wide range of Pop! Vinyls for them to add to their own collection or wishlist, 
      and even explore similar figures they may be interested in! This allows users to view their collection easily and from anywhere! In addition, users can check out the current trending value on certain figures on the 
      secondary market by viewing both current and completed eBay listings.`,
      section_two_text: `As a single page application, Funkollection's front-end is implemented using the Angular 7 framework, allowing for structured development, as well as seamless routing.
      The back-end API of Funkollection is ran using Node.js / Express. Provides a SQLite Database that currently does NOT persist memory, where new information is erased atleast once every 24 horus. 
      This is meant to keep a working demo of the project that remains uncluttered, as well as allow visitors a safe way to try it out temporarily.`,
      section_three_text: `Interested in this project? Try out the live demo! The user-facing application is available on Github Pages, while the API is deployed to Heroku.`,
      link: `https://ialberttran.github.io/funkollection/`,
      showBool: this.showFunkollection,
      font_awesome: `fas fa-smile-beam`,
      icon_color: `funkollection`
    },

    {
      title: 'Weather App',
      section_one_text: `Weather App is a small 10-day forecast application. Search a specific, city, zip code, etc to get various types of information of that area!`,
      section_two_text: `Initially created from pure HTML, CSS, and Javascript, integrating Yahoo's old weather api. Since the API's retirement, the application has been updated to a Node.js project, implementing Yahoo's similar, but newer, API.`,
      section_three_text: `Interested in this project? Try out the live demo! The user-facing application is available on Heroku!`,
      link: `https://att-weather-app.herokuapp.com/`,
      showBool: this.showWeather,
      font_awesome: `fas fa-bolt`,
      icon_color: `weather`
    },
    {
      title: 'Checkers',
      section_one_text: `Checkers is a simple web application that allows two real users to play classic checkers. It keeps track of each and every move, showing a history list where users can jump to a
      a specific point in time of the game, where they can even continue from there!`,
      section_two_text: `Developed solely using the React framework and Javascript for move logic. Mobile responsive implementation for play on the go as well!`,
      section_three_text: `Interested in this project? Try out the live demo! This application is available on Github Pages!`,
      link: `https://ialberttran.github.io/checkers/`,
      showBool: this.showCheckers,
      font_awesome: `fas fa-chess-king`,
      icon_color: `checkers`
    }
  ];
  constructor(public _helperService: HelperService) { }

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
