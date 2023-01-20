import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  warning: string = "This is a warning, you are in danger!";

  constructor() {
    console.log("Constructor :" + this.warning);
  }
  ngOnInit(): void {
    console.log("ngOnInit :" + this.warning);
  }
}
