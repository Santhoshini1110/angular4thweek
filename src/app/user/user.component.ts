import { Component, OnInit ,Input,Output} from '@angular/core';


import {Subscription} from 'rxjs';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public usersinfo;
  
  constructor() { }

  ngOnInit(): void {

  }
  delete(id:number)
  {
    this.usersinfo.splice(id,1);
    
  }

}
