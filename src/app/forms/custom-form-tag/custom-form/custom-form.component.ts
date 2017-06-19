import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  initialValue: number = 9;

  constructor() { }

  ngOnInit() {
  }

}
