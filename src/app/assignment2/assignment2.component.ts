import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  isDisable: boolean = false;
  userName = "Rohini Tambe";
  isDirective: boolean = false;
  constructor() { }

  delete(){
    this.userName="";
  }
}
