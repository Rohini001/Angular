import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  success: string = "You are so successful!";

  constructor() {
    console.log("Constructor :" + this.success);
  }
  ngOnInit(): void {
    console.log("ngOnInit :" + this.success);

  }
}
