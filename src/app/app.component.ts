import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users=[];
  
  public len;
  constructor()
  {
    
  }
  add(user)
    {
    this.users.push(user);
   // console.log(user);

    }
  
}
