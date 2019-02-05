import { Component, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  socialmedia = [];

  tempsocialmedia = [
    {name: 'Facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/albert.tran.77'},
    {name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/alberttran17/'},
    {name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/iiitsAlbert'},
    {name: 'Github', icon: 'fab fa-github', link: 'https://github.com/iAlbertTran'},
    {name: 'Gmail', icon: 'fab fa-google-plus-g', link: 'mailto:albtran@ucdavis.edu'},
    {name: 'Slack', icon: 'fab fa-slack', link: 'https://join.slack.com/t/alberts-personal/shared_invite/enQtNTQyMDk2NjA4MTMxLWQwMTVkODVmM2ZkOGYyOGNmZjU5MzQ2NDllZGJlZWU4Zjk0OTUxYTE5ZDUxMTRiZTY1MzY1MDNhNDJiZGE0NWQ'}
  ];

  constructor(public _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.setCurrentComponent('connect');

    setInterval(() =>{
      if(this.tempsocialmedia.length > 0)
        this.socialmedia.push(this.tempsocialmedia.shift());
    }, 100);
  }

}
