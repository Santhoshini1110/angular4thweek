import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public fname:string="";
  public lname:string="";
  public name:string="";
  @Output() public childEvent:EventEmitter<any>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void{
    }
    submit()
    {
     this.name=this.fname+" "+this.lname;
    // console.log(this.name);
        this.childEvent.emit(this.name);
    }
  }


